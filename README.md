# Renewal Radar

A browser-local record for subscription renewals, trials, and cancellation follow-up.

## Boundary
No account, backend, bank connection, upload, analytics, provider contact, or background reminder. Records stay in this browser. JSON exports and printed records are unencrypted. This is record keeping, not legal or financial advice.

## Verification
Run `node --check app.js`, `python3 tests/test_static.py`, and serve the directory with `python3 -m http.server` for asset smoke checks. Production headers must be checked on the intended HTTPS host; a local server does not apply `.htaccess`.
