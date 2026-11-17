// Generates public/og.png (1200x630) used for Open Graph / Twitter link previews.
// Run: node scripts/generate-og.mjs
import sharp from 'sharp';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#FAFAF9"/>
  <rect width="1200" height="12" fill="#2952E3"/>

  <text x="80" y="215" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="72" fill="#1C1D21">Jui-Chien (Eric) Tsou</text>
  <text x="80" y="295" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="42" fill="#2952E3">HPC &amp; ML Systems Research</text>
  <text x="80" y="352" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#5B5F6B">Computer Science @ National Taiwan University</text>

  <g font-family="Menlo, Consolas, monospace" font-size="22" text-anchor="middle">
    <rect x="80" y="450" width="230" height="56" rx="28" fill="#2952E3" fill-opacity="0.05" stroke="#2952E3" stroke-opacity="0.3"/>
    <text x="195" y="486" fill="#2952E3">777x speedup</text>
    <rect x="330" y="450" width="320" height="56" rx="28" fill="#2952E3" fill-opacity="0.05" stroke="#2952E3" stroke-opacity="0.3"/>
    <text x="490" y="486" fill="#2952E3">SC25 Overall Winner</text>
    <rect x="670" y="450" width="220" height="56" rx="28" fill="#2952E3" fill-opacity="0.05" stroke="#2952E3" stroke-opacity="0.3"/>
    <text x="780" y="486" fill="#2952E3">4 papers</text>
  </g>

  <text x="80" y="580" font-family="Menlo, Consolas, monospace" font-size="22" fill="#5B5F6B">pango0.github.io</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);
console.log('public/og.png generated');
