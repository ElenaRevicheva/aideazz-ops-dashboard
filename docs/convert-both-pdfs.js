#!/usr/bin/env node
/**
 * Converts ROADMAP_AND_PLAN.md and CONTENT_AUDIT_SUMMARY_FOR_MANNY.md to PDF.
 * Uses pdf-lib (no Puppeteer). Run: node docs/convert-both-pdfs.js
 */
const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const FILES = [
  ['ROADMAP_AND_PLAN.md', 'ROADMAP_AND_PLAN.pdf'],
  ['CONTENT_AUDIT_SUMMARY_FOR_MANNY.md', 'CONTENT_AUDIT_SUMMARY_FOR_MANNY.pdf'],
];

function toAscii(text) {
  return text
    .replace(/→/g, '->')
    .replace(/←/g, '<-')
    .replace(/–/g, '-')
    .replace(/—/g, '-')
    .replace(/"/g, '"')
    .replace(/"/g, '"')
    .replace(/'/g, "'")
    .replace(/’/g, "'")
    .replace(/…/g, '...')
    .replace(/[^\x00-\x7F]/g, '');
}

function mdToLines(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  for (let line of lines) {
    line = line
      .replace(/^#+\s*/, '')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\|/g, ' | ')
      .trim();
    line = toAscii(line);
    if (line === '---') {
      out.push('---');
      continue;
    }
    if (/^\|[-:\s|]+\|/.test(line)) continue;
    if (line) out.push(line);
  }
  return out;
}

function wrapText(text, maxLen = 90) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const w of words) {
    if (current.length + w.length + 1 <= maxLen) {
      current += (current ? ' ' : '') + w;
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function convertFile(mdPath, pdfPath) {
  const md = fs.readFileSync(mdPath, 'utf8');
  const lines = mdToLines(md);

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontSize = 10;
  const lineHeight = 14;
  const margin = 50;
  const pageWidth = 595;
  const pageHeight = 842;
  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  for (const line of lines) {
    const isTitle = /^(HandyManny|For Manny|Content Audit|Implementation|Phase|Week|Step-by-Step|Before Day|Golden Rules|One-Page|Before You Start|What We|Executive)/i.test(line) && line.length < 60;
    const fontToUse = isTitle || (line.length < 50 && !line.includes('|')) ? fontBold : font;
    const size = isTitle ? 14 : fontSize;

    const wrapped = wrapText(line, 85);
    for (const w of wrapped) {
      if (y < margin + lineHeight) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
      page.drawText(toAscii(w), {
        x: margin,
        y,
        size,
        font: fontToUse,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= lineHeight;
    }
    y -= 2;
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log('PDF created:', pdfPath);
}

async function main() {
  const dir = __dirname;
  for (const [mdName, pdfName] of FILES) {
    const mdPath = path.join(dir, mdName);
    const pdfPath = path.join(dir, pdfName);
    if (!fs.existsSync(mdPath)) {
      console.warn('Skip (not found):', mdName);
      continue;
    }
    await convertFile(mdPath, pdfPath);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
