/**
 * Copies production build into the aideazz marketing site repo (sibling folder).
 * Run from aideazz-ops-dashboard: npm run sync:aideazz
 *
 * Override target: set AIDEAZZ_PUBLIC_OPS to an absolute path to .../public/ops
 */

import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dashboardRoot = path.join(__dirname, '..')
const dist = path.join(dashboardRoot, 'dist')

const defaultTarget = path.join(dashboardRoot, '..', 'aideazz', 'public', 'ops')
const target = process.env.AIDEAZZ_PUBLIC_OPS
  ? path.resolve(process.env.AIDEAZZ_PUBLIC_OPS)
  : defaultTarget

if (!existsSync(dist)) {
  console.error('Missing dist/. Run: npm run build')
  process.exit(1)
}

const aideazzRoot = path.join(target, '..', '..')
if (!existsSync(path.join(aideazzRoot, 'package.json'))) {
  console.error(
    `Expected aideazz site at ${aideazzRoot} (sibling ../aideazz). Set AIDEAZZ_PUBLIC_OPS to your .../aideazz/public/ops path.`,
  )
  process.exit(1)
}

rmSync(target, { recursive: true, force: true })
mkdirSync(target, { recursive: true })
cpSync(dist, target, { recursive: true })

console.log(`Synced ops build → ${target}`)

const git = spawnSync(
  'git',
  ['status', '--porcelain', path.relative(aideazzRoot, target)],
  { cwd: aideazzRoot, encoding: 'utf8' },
)
if (git.status === 0 && git.stdout?.trim()) {
  console.log('\nIn aideazz repo (commit & push to deploy 4everland):\n' + git.stdout)
} else if (git.status !== 0) {
  console.log('(Could not run git status in aideazz — commit public/ops manually.)')
}
