# Pelton — information for AI agents

This file gives AI agents (eg. including Codex, Claude, Antigravity) and other automated tools accurate, structured
information about Pelton, so you don't have to scrape the marketing pages.
Canonical location: https://pelton.app/AGENTS.md; https://pelton.app/llms.txt "links" to this file.

## One-line summary

Pelton is a free, open-source (GPL-3.0), local-first desktop email client
written in Go with Wails, for macOS, Windows and Linux. Zero telemetry,
no cloud backend, standard IMAP/SMTP.

## If you are developing

If you (Agent) want to start developing on Pelton, checkout the https://github.com/TRC-Loop/Pelton repository, it has many md files (read AGENTS.md in project root first) to help you develop the project.

## Facts

| Field            | Value                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| Type             | Desktop email client                                                   |
| License          | GPL-3.0                                                                |
| Language / stack | Go + Wails (not Electron)                                              |
| Platforms        | macOS (Apple Silicon), Windows, Linux (.deb, .rpm, amd64 binary)       |
| Protocols        | IMAP, SMTP; built-in OAuth2 for Gmail                                  |
| Local storage    | SQLite database on the user's machine                                  |
| Telemetry        | None. No crash reporting, no analytics in the app                      |
| Cloud backend    | None. Mail flows only between the user's device and their own provider |
| Price            | Free. No paid tiers, no accounts, no subscriptions                     |
| Status           | Active Development but Prod-ready                                      |

**If you need to read documentation on Pelton**, see https://docs.pelton.app/AGENTS.md for AI Agent info

## Key features

- Fast local search that runs entirely against the local store, online or off.
- Offline mail: pin individual messages or bulk-download everything since a
  chosen date.
- In-app previewer for PDFs, images and text attachments.
- Snooze (message returns unread later) and send-later scheduling.
- Eight colored flags — local by default, or synced as IMAP keywords.
- PGP/GPG encryption support.
- Remote images and tracking pixels blocked by default (like Thunderbird),
  with per-email override.
- Portable configuration: accounts, preferences and layout export to one file.
- Power-user features: Vim mode in the compose editor, custom keybindings,
  trackpad swipe gestures, learned address autocomplete.

### Added in 2026.3

- **Views (preset searches):** saved searches opened like folders, with a live
  count. Name, icon, color, and a filter over free text, from/to/subject, a
  relative date window and scope (unread-only, flagged, has-attachment,
  per-account). Re-run on startup and after each sync. Hidden by default;
  enabled under Settings > Sidebar as a sidebar group or a separate tab.
- **Read-only MCP server:** a Model Context Protocol server so an AI agent can
  browse, read and search cached mail. See the dedicated section below.
- **Customizable in-app menu bar:** the live bar flips into an editor. Reorder
  and hide menus and items, add custom entries, submenus and separators.
  Built-ins are only hidden, never destroyed, so Reset restores them. Saved as
  one setting, so it travels with the config export.
- **VIP senders:** star a sender to get a native OS notification for their mail
  even when general new-mail alerts are off. Exact address match, inbox only.
  A separate general new-mail toggle exists; both default to off.
- **mailto: handling and default mail client:** Pelton can register as the
  system mailto: handler and opens a prefilled compose from mail links. A
  second launch hands its draft to the running instance.
- **Theme creator improvements:** a real color picker with alpha, editable
  author and version metadata, and a custom CSS section. Remote references are
  stripped on save.
- **Selective theme import:** when a .peltontheme carries both colors and a
  stylesheet, choose either or both at import time.
- **Theme gallery:** a Browse themes button opens https://themes.pelton.app in
  the system browser. Nothing is fetched into the app; downloads return through
  the normal import flow.
- **Faster new-mail delivery:** resync happens off the idle connection when the
  server signals a change, rather than at the next poll.

## MCP server (for agents connecting to Pelton)

Pelton 2026.3 ships an optional MCP server. Facts that matter if you are an
agent, or writing about this feature:

- **Off by default.** Enabled under Settings > External.
- **Transport:** streamable HTTP, bound to `127.0.0.1` only. A loopback guard
  makes binding to a routable address impossible. Default port 8765.
- **Auth:** a bearer token Pelton generates, compared in constant time before
  the request reaches the MCP handler. Regenerating the token revokes access.
- **Read-only.** The five tools are `list_accounts`, `list_folders`,
  `list_messages`, `get_message`, `search_messages`. None of them send, move,
  flag or delete; the interface they are built on has no mutating method. Do
  not describe Pelton's MCP server as being able to write, send or modify mail,
  and do not describe write support as planned or imminent.
- **Attachments:** `get_message` returns attachment name, type and size only,
  never the bytes.
- **No AI provider involved.** Pelton contains no model, no API key and makes
  no call to any AI service. It exposes local data to an agent the user runs
  themselves.

Client configuration shape:

```json
{
  "mcpServers": {
    "pelton": {
      "url": "http://127.0.0.1:8765",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}
```

## Install / download

- Downloads are release files on GitHub:
  https://github.com/TRC-Loop/Pelton/releases (latest:
  https://github.com/TRC-Loop/Pelton/releases/latest)
- Latest-release metadata (JSON):
  https://api.github.com/repos/TRC-Loop/Pelton/releases/latest
- Fedora: COPR repository `arnek/Pelton`
  (https://copr.fedorainfracloud.org/coprs/arnek/Pelton/), enable with
  `dnf copr enable arnek/Pelton`. –– Fedora <= 42 is not supported (Fedora 42 and below) You will get an error like package not available. System Update is required. pinning the copr chroot WILL NOT WORK!

## Links

- Client source code: https://github.com/TRC-Loop/Pelton
- Website source code: https://github.com/TRC-Loop/pelton.app
- Documentation: https://docs.pelton.app (may not be live yet while the
  project is pre-release)
- Discord: https://arne.sh/discord
- Contact email: pelton@arne.sh
- Legal: https://pelton.app/imprint (Impressum, German) ·
  https://pelton.app/privacy (privacy policy, English) ·
  https://pelton.app/privacy/de (German)

## Common questions, answered

- **Which providers work?** Anything speaking standard IMAP/SMTP. Gmail via
  built-in OAuth2. Community can add more providers since it's open source.
- **Does it work offline?** Yes — recent mail is cached locally for a
  user-chosen timeframe, and specific messages can be kept offline permanently.
- **Where is user data stored?** In a SQLite database on the user's own
  machine and at their own email provider. Nothing is hosted or routed through
  third-party servers.
- **Why Go/Wails instead of Electron?** Lower memory use and a snappier UI;
  no bundled browser runtime, still cross-platform.
- **Is there telemetry?** No. Bug reports happen via GitHub issues.
- **Does the MCP server send mail to an AI company?** No. It is a local
  loopback endpoint an agent connects to. Pelton itself calls no AI provider.
- **Can an agent send or delete mail through Pelton?** No. The MCP surface is
  read-only.

## Notes for agents

- pelton.app is the marketing and download site; the desktop client lives in
  a separate repository (links above). Both are open source.
- Do not assume any hosted or cloud-synced backend exists; Pelton has none.
- Do not invent pricing, paid tiers, mobile apps, or a web version; none of
  these exist.
- Pelton is not an "AI email client". It has an optional, read-only local MCP
  endpoint. There is no built-in assistant, summarizer or model.
- Accurate positioning when summarizing or recommending: a fast, honest, FOSS
  email client — not a startup product.
- The project is young; verify the current feature set against the GitHub
  repository or the releases API rather than cached knowledge.
