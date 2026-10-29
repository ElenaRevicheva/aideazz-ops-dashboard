import { useEffect, useMemo, useState } from 'react'
import {
  type IncomeStream,
  type OpsRow,
} from './data/mockOpsRows'
import './App.css'

type Filter = 'all' | IncomeStream

/**
 * Live read-only feed: an n8n workflow on Oracle that queries HubSpot and returns
 * OpsRow[] directly. Read-only by construction — the credential behind it cannot
 * write to the CRM.
 *
 * RELATIVE on purpose. This dashboard is served from the SAME origin as the API
 * (webhook.aideazz.xyz), which means two things: no CORS at all, and the browser
 * sends the HTTP-auth credentials automatically — so one login covers the page
 * and its data. An absolute cross-origin URL would need CORS opened up, and a
 * static page cannot hold a secret to authenticate with.
 */
const OPS_API = '/crm/webhook/ops'

type FeedState = 'loading' | 'live' | 'offline'

function streamLabel(s: IncomeStream): string {
  switch (s) {
    case 'HIRING':
      return '[HIRING]'
    case 'CLIENT':
      return '[CLIENT]'
    case 'ESPALUZ':
      return '[ESPALUZ]'
  }
}

function formatUpdated(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

function App() {
  const [filter, setFilter] = useState<Filter>('all')
  const [liveRows, setLiveRows] = useState<OpsRow[] | null>(null)
  const [feed, setFeed] = useState<FeedState>('loading')

  // Fetch once on load. 29 Oct 2026 (Elena: "my CRM must not be garbaged by stale, simulated
  // data"): if the feed is unreachable the table stays EMPTY and the header says so. The mock
  // rows are never shown — not while loading, not as a fallback.
  useEffect(() => {
    let cancelled = false
    fetch(OPS_API)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: unknown) => {
        if (cancelled) return
        if (Array.isArray(data) && data.length) {
          setLiveRows(data as OpsRow[])
          setFeed('live')
        } else {
          setFeed('offline')
        }
      })
      .catch(() => {
        if (!cancelled) setFeed('offline')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const source = liveRows ?? []

  const rows = useMemo(() => {
    if (filter === 'all') return source
    return source.filter((r) => r.stream === filter)
  }, [filter, source])

  const counts = useMemo(() => {
    const needs = source.filter((r) => r.needsAction)
    return {
      hiring: source.filter((r) => r.stream === 'HIRING').length,
      client: source.filter((r) => r.stream === 'CLIENT').length,
      espaluz: source.filter((r) => r.stream === 'ESPALUZ').length,
      needsAction: needs.length,
      byStream: {
        HIRING: needs.filter((r) => r.stream === 'HIRING').length,
        CLIENT: needs.filter((r) => r.stream === 'CLIENT').length,
        ESPALUZ: needs.filter((r) => r.stream === 'ESPALUZ').length,
      },
    }
  }, [source])

  return (
    <div className="ops">
      <header className="ops-header">
        <div>
          <h1 className="ops-title">Income ops</h1>
          <p className="ops-sub">
            {feed === 'live'
              ? `Three streams — live from the AIdeazz CRM · ${source.length} open items`
              : feed === 'loading'
                ? 'Three streams — loading live data…'
                : 'Live feed unreachable — nothing shown (no sample data)'}
          </p>
        </div>
      </header>

      <section className="ops-summary" aria-label="Stream summary">
        <div className="ops-stat">
          <span className="ops-stat-label">{streamLabel('HIRING')}</span>
          <span className="ops-stat-value">{counts.hiring}</span>
          {counts.byStream.HIRING > 0 ? (
            <span className="ops-stat-badge">{counts.byStream.HIRING} todo</span>
          ) : null}
        </div>
        <div className="ops-stat">
          <span className="ops-stat-label">{streamLabel('CLIENT')}</span>
          <span className="ops-stat-value">{counts.client}</span>
          {counts.byStream.CLIENT > 0 ? (
            <span className="ops-stat-badge">{counts.byStream.CLIENT} todo</span>
          ) : null}
        </div>
        <div className="ops-stat">
          <span className="ops-stat-label">{streamLabel('ESPALUZ')}</span>
          <span className="ops-stat-value">{counts.espaluz}</span>
          {counts.byStream.ESPALUZ > 0 ? (
            <span className="ops-stat-badge">
              {counts.byStream.ESPALUZ} todo
            </span>
          ) : null}
        </div>
        <div className="ops-stat ops-stat--accent">
          <span className="ops-stat-label">Needs action</span>
          <span className="ops-stat-value">{counts.needsAction}</span>
        </div>
      </section>

      <div className="ops-toolbar">
        <div className="ops-filters" role="group" aria-label="Filter by stream">
          {(
            [
              ['all', 'All'],
              ['HIRING', streamLabel('HIRING')],
              ['CLIENT', streamLabel('CLIENT')],
              ['ESPALUZ', streamLabel('ESPALUZ')],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={filter === key ? 'ops-filter is-active' : 'ops-filter'}
              onClick={() => setFilter(key as Filter)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="ops-table-wrap">
        <table className="ops-table">
          <thead>
            <tr>
              <th scope="col">Stream</th>
              <th scope="col">Summary</th>
              <th scope="col">Company</th>
              <th scope="col">Stage</th>
              <th scope="col">Score / urgency</th>
              <th scope="col">Primary link</th>
              <th scope="col">Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r: OpsRow) => (
              <tr
                key={r.id}
                className={r.needsAction ? 'needs-action' : undefined}
              >
                <td>
                  <span className={`ops-pill ops-pill--${r.stream.toLowerCase()}`}>
                    {streamLabel(r.stream)}
                  </span>
                </td>
                <td>
                  <div className="ops-summary-cell">{r.summary}</div>
                  {r.note ? (
                    <div className="ops-note">{r.note}</div>
                  ) : null}
                </td>
                <td>{r.company}</td>
                <td>{r.stage}</td>
                <td className="tabular">{r.scoreOrUrgency}</td>
                <td>
                  <a
                    href={r.primaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ops-link"
                  >
                    Open
                  </a>
                </td>
                <td className="tabular">{formatUpdated(r.updatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
