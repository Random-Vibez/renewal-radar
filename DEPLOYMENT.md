# Renewal Radar deployment handoff

Release: 2026-09-20
Status: COMPLETE

Public URL: https://randomvibez.ai/renewal-radar/
Catalog URL: https://randomvibez.ai/project-detail.html?project=renewal-radar
Repository: https://github.com/Random-Vibez/renewal-radar
Commit: f87358b927071a9ef3ede8e866acd8feb9f8f403

Purpose

Renewal Radar is a browser-local record for subscription renewals, trials, cancellation routes, dates, references, notes, JSON backup, and printing. It has no account, backend, bank connection, provider contact, analytics, or background reminders.

Release evidence

- Independent pre-release browser gate: GO after fixing cookie-notice occlusion and print disclaimer removal.
- Independent post-upload live gate: GO at desktop 1440x1000, tablet 768x900, and mobile 390x844.
- Live app, homepage, and detail route: HTTP 200.
- Fresh browser save/reload workflow: PASS.
- Cookie notice first visit, dismissal, and non-occlusion: PASS.
- Console, page, failed-request, same-origin HTTP >=400 checks: PASS.
- Horizontal overflow: PASS at all required viewports.
- Print privacy/unencrypted-export disclaimer: PASS.
- Runtime files and preview: HTTP 200; preview loaded with non-zero dimensions.
- Protected README, SECURITY, LICENSE, tests, and .htaccess probes: not served.
- Renewal Radar path response CSP: effective `connect-src 'none'`, self-only scripts/styles/images, object/frame denial, and no-store.
- Local and remote SHA-256 hashes matched for runtime files, preview, catalog, and RSS.
- Remote rollback backup: timestamped backup on the approved production host, recorded in the private operator handoff
- Plesk/Nginx path configuration backup: timestamped private operator backup on the approved production host

Portfolio

- Catalog: 14 projects.
- RSS: 14 items.
- Build record: 2026-09-20 11:00:14 UTC start; 2026-09-20 17:33:55 UTC completion; 23,621 seconds; 85,152 uncached/reasoning tokens represented in the catalog ledger.
- Token accounting includes the recorded build, remediation, release, and independent QA sessions; cached context is tracked separately in the local accounting record.

Rollback

Restore the affected catalog/feed/app/preview files from the timestamped remote backup, restore the previous vhost_nginx.conf, then run the supported Plesk domain reconfiguration command and repeat live GET/header/browser verification.

Residual limitations

- Browser-local records are device/browser scoped and are not encrypted.
- Exported JSON and printed records must be protected like paperwork.
- The app does not send reminders, cancel services, contact providers, or guarantee refunds.
- The completion email is verified at SMTP/IMAP/Sent-MIME stages; recipient-side mailbox confirmation depends on the available mailbox visibility.
