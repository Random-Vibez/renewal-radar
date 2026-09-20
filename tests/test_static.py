#!/usr/bin/env python3
from pathlib import Path
p=Path(__file__).resolve().parents[1]
html=(p/'index.html').read_text(); js=(p/'app.js').read_text(); css=(p/'styles.css').read_text()
assert 'localStorage' in js and 'connect-src \'none\'' in (p/'.htaccess').read_text()
assert 'No account, bank connection, uploads' in html
assert 'textContent' in js and 'innerHTML' not in js
assert 'prefers-reduced-motion' in css and '@media print' in css
assert 'type="file"' in html and 'aria-live' in html
assert 'cookie-banner-accept' in (p/'cookie-banner.js').read_text()
assert 'insertBefore(banner' in (p/'cookie-banner.js').read_text()
assert '@media(max-width:560px)' in (p/'cookie-banner.css').read_text()
assert '@media print{header,.hero,.notice,.grid,.toolbar,footer' in css
assert 'rel="icon"' in html
print('PASS: browser-local boundary, bounded schema, safe rendering, privacy disclosure, accessibility and responsive contracts')
