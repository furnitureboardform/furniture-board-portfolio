#!/usr/bin/env node
// Classifies the pending diff into a review tier for the commit-push flow:
//   skip | simplify | code-review:medium
// Path-based ceiling — a genuinely trivial diff (one-line constant/comment) or a data-only edit
// (e.g. the PROJECTS array) may still be downgraded to `skip` by judgment.
// Source of truth for the tiers: CLAUDE.md rule #12.

import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const TIERS = ['skip', 'simplify', 'code-review:medium'];

function changedFiles() {
  const cmds = [
    'git diff --cached --name-only',
    'git diff --name-only',
    'git ls-files --others --exclude-standard',
  ];
  const out = cmds
    .map((c) => {
      try {
        return execSync(c, { encoding: 'utf8' });
      } catch {
        return '';
      }
    })
    .join('\n');
  return [...new Set(out.split('\n').map((s) => s.trim()).filter(Boolean))];
}

const isTest = (f) => /\.test\.ts$/.test(f);
const isTs = (f) => /^ts\/.*\.ts$/.test(f) && !isTest(f);
// Pure logic covered by a sibling test (e.g. validation.ts) → bug-focused review.
const hasSiblingTest = (f) => existsSync(f.replace(/\.ts$/, '.test.ts'));

function tierOf(file) {
  if (isTs(file) && hasSiblingTest(file)) return 2;
  if (isTs(file)) return 1; // other ts (DOM/interactivity, e.g. main.ts) → quality-only review
  return 0;
}

const files = changedFiles();
if (files.length === 0) {
  console.log('review-tier: skip (no pending changes)');
  process.exit(0);
}

const buckets = [[], [], []];
for (const f of files) buckets[tierOf(f)].push(f);
const max = buckets.reduce((m, b, i) => (b.length ? i : m), 0);

console.log(`review-tier: ${TIERS[max]}`);
for (let i = TIERS.length - 1; i >= 0; i--) {
  if (buckets[i].length) console.log(`  ${TIERS[i]}: ${buckets[i].join(', ')}`);
}
