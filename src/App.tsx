import { useMemo, useState } from 'react'
import {
  MOCK_OPS_ROWS,
  type IncomeStream,
  type OpsRow,
} from './data/mockOpsRows'
import './App.css'

type Filter = 'all' | IncomeStream

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

  const rows = useMemo(() => {
    if (filter === 'all') return MOCK_OPS_ROWS
    return MOCK_OPS_ROWS.filter((r) => r.stream === filter)
  }, [filter])

  const counts = useMemo(() => {
    const needs = MOCK_OPS_ROWS.filter((r) => r.needsAction)
    return {
      hiring: MOCK_OPS_ROWS.filter((r) => r.stream === 'HIRING').length,
      client: MOCK_OPS_ROWS.filter((r) => r.stream === 'CLIENT').length,
      espaluz: MOCK_OPS_ROWS.filter((r) => r.stream === 'ESPALUZ').length,
      needsAction: needs.length,
      byStream: {
        HIRING: needs.filter((r) => r.stream === 'HIRING').length,
        CLIENT: needs.filter((r) => r.stream === 'CLIENT').length,
        ESPALUZ: needs.filter((r) => r.stream === 'ESPALUZ').length,
      },
    }
  }, [])

  return (
    <div className="ops">
      <header className="ops-header">
        <div>
          <h1 className="ops-title">Income ops</h1>
          <p className="ops-sub">
            Three streams — mock data. Wire to read-only API when ready.
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
