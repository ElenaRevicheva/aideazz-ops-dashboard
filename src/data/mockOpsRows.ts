/** Placeholder rows — swap for API response shape when wiring CTO AIPA read endpoint. */

export type IncomeStream = 'HIRING' | 'CLIENT' | 'ESPALUZ'

export interface OpsRow {
  id: string
  stream: IncomeStream
  summary: string
  company: string
  stage: string
  scoreOrUrgency: string
  primaryUrl: string
  updatedAt: string
  needsAction: boolean
  note?: string
}

export const MOCK_OPS_ROWS: OpsRow[] = [
  {
    id: '1',
    stream: 'HIRING',
    summary: 'Fractional CTO @ Empirical',
    company: 'Empirical',
    stage: 'Applied',
    scoreOrUrgency: '82',
    primaryUrl: 'https://example.com/job/apply',
    updatedAt: '2026-05-17T12:00:00Z',
    needsAction: true,
    note: 'human_pending — confirm one-click URL in HubSpot deal',
  },
  {
    id: '2',
    stream: 'HIRING',
    summary: 'AI automation engineer @ Northwind',
    company: 'Northwind',
    stage: 'Prospected',
    scoreOrUrgency: '71',
    primaryUrl: 'https://example.com/jobs/nw-ai',
    updatedAt: '2026-05-16T09:30:00Z',
    needsAction: false,
  },
  {
    id: '3',
    stream: 'CLIENT',
    summary: 'Founder pain: AI ops gap (HN thread)',
    company: 'Acme Labs',
    stage: 'Prospected',
    scoreOrUrgency: 'urgency 4',
    primaryUrl: 'mailto:founder@acme.example',
    updatedAt: '2026-05-17T08:15:00Z',
    needsAction: true,
    note: 'Pain / classifier → surface on Contact fields next',
  },
  {
    id: '4',
    stream: 'CLIENT',
    summary: 'GitHub topic lead — llm + automation',
    company: 'River Compute',
    stage: 'Contacted',
    scoreOrUrgency: 'urgency 3',
    primaryUrl: 'https://linkedin.com/in/example',
    updatedAt: '2026-05-15T18:00:00Z',
    needsAction: false,
  },
  {
    id: '5',
    stream: 'ESPALUZ',
    summary: 'TG trial — user_id 8c6f…',
    company: 'EspaLuz',
    stage: 'Trial day 28 / 30',
    scoreOrUrgency: 'convert',
    primaryUrl: 'https://t.me/EspaLuzFamily_bot',
    updatedAt: '2026-05-17T06:00:00Z',
    needsAction: true,
    note: 'PayPal webhook / CRM sync still blocking full loop',
  },
]
