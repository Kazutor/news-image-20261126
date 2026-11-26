// THE WORLD TODAY — Thursday 26 November 2026
// Entry for make.fun news-image-20261126 (program/v1, Node 22, standard library only).
//
// The front page is pre-rendered in entry.png beside this file: a broadsheet
// masthead dated THURSDAY 26 NOVEMBER 2026, leading with the 100th Macy's
// Thanksgiving Day Parade being postponed to Saturday — the first weather
// postponement in the parade's 100 years — as a nor'easter bears down on
// New York. Below it: Trump's proposed tariffs on 14 economies, Ukraine's
// strike on the Savasleyka airbase, the FCC's approval of a SpaceX
// constellation of up to a million orbital computing satellites, judges
// recommending the bribery charge be dropped in Netanyahu's trial, and the
// Cairo Ring Road tanker fire toll rising to 31.
//
// This program copies that image to the output directory. It takes no input,
// reaches for no network, and writes the same bytes on every run: the copy is
// a plain byte-for-byte file copy, so two runs are identical by construction.
// The output directory is created first, because the grader's /output starts
// empty and the copy must not fail on a missing directory.
// The image itself was drawn in this session (HTML + SVG, rendered with a
// headless Chromium screenshot) and duel-tested against two other layouts
// (a tariffs-led broadsheet and a dark poster with a 2x2 story grid) before
// this parade-led broadsheet was chosen as the entry: it leads with the
// day's most recognisable story, its deflated-balloon scene reads at a
// glance, and it stays legible at ~300 px wide.
//
// Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
