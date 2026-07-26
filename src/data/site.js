export const repo = {
  client: 'https://github.com/TRC-Loop/Pelton',
  website: 'https://github.com/TRC-Loop/pelton.app',
  themes: 'https://github.com/TRC-Loop/pelton-themes',
  themesSite: 'https://themes.pelton.app',
  releases: 'https://github.com/TRC-Loop/Pelton/releases',
  releasesLatest: 'https://github.com/TRC-Loop/Pelton/releases/latest',
  api: 'https://api.github.com/repos/TRC-Loop/Pelton/releases/latest',
  discord: 'https://arne.sh/discord',
  docs: 'https://docs.pelton.app',
  email: 'pelton@arne.sh',
  copr: 'https://copr.fedorainfracloud.org/coprs/arnek/Pelton/',
  coprEnable: 'arnek/Pelton',
}

export const features = [
  {
    icon: 'search',
    title: 'Fast local search',
    body: 'Search runs against your local store, so even large mailboxes stay quick, online or off.',
    layout: 'big',
    visual: 'search',
  },
  {
    icon: 'device-desktop',
    title: 'Cross-platform',
    body: 'macOS, Windows, Linux.',
    layout: 'vertical',
    visual: 'os-stack',
  },
  {
    icon: 'shield-lock',
    title: 'Zero telemetry',
    body: 'No tracking, no crash reports.',
    layout: 'vertical',
  },
  {
    icon: 'server-2',
    title: 'Your data stays local',
    body: 'Mail lives in local SQLite and on your own provider. Standard IMAP and SMTP, nothing in between.',
    layout: 'wide',
  },
  {
    icon: 'cloud-off',
    title: 'Offline downloads',
    body: 'Pin a message or bulk-download everything since a date for offline reading.',
    layout: 'wide',
    visual: 'progress',
  },
  {
    icon: 'refresh',
    title: 'New mail lands promptly',
    body: 'Pelton resyncs off the idle connection the moment the server says something changed, instead of waiting for the next poll.',
    layout: 'wide',
  },
  {
    icon: 'bell',
    title: 'Native notifications',
    body: 'Notification Center, Windows toasts and Linux dbus, for all new inbox mail or only your starred senders. Both switches start off.',
    layout: 'wide',
  },
  {
    icon: 'eye',
    title: 'In-app previewer',
    body: 'Open PDFs, images and text without leaving Pelton.',
    layout: 'half',
  },
  {
    icon: 'clock',
    title: 'Snooze',
    body: 'Send a message away; it returns unread when you want it.',
    layout: 'half',
    visual: 'snooze',
  },
  {
    icon: 'calendar-clock',
    title: 'Send later',
    body: 'Schedule a message to send at a time you choose.',
    layout: 'half',
  },
  {
    icon: 'file-export',
    title: 'Portable config',
    body: 'Export accounts, preferences and layout into one file.',
    layout: 'half',
  },
  {
    icon: 'flag',
    title: 'Colored flags',
    body: 'Eight colors, local by default or synced as IMAP keywords.',
    layout: 'half',
    visual: 'flags',
  },
  {
    icon: 'palette',
    title: 'Yours to customize',
    body: 'Density, themes and layout, tuned to your workflow.',
    layout: 'half',
  },
  {
    icon: 'adjustments-horizontal',
    title: 'Build a theme',
    body: 'A proper color picker with alpha, editable author and version, and custom CSS. Export the lot as one file.',
    layout: 'half',
    visual: 'palette-strip',
  },
  {
    icon: 'world',
    title: 'Theme gallery',
    body: 'Browse themes.pelton.app from Settings. Nothing is fetched into the app; downloads come back through the normal import.',
    layout: 'half',
  },
  {
    icon: 'package',
    title: 'Import just the parts you want',
    body: 'When a theme carries both colors and a stylesheet, choose either or both. Remote references are always stripped.',
    layout: 'half',
  },
]

export const release = {
  version: '2026.3',
  url: 'https://github.com/TRC-Loop/Pelton/releases/tag/v2026.3',
}

export const whatsNew = [
  {
    slug: 'views',
    kicker: 'Views',
    title: 'Preset searches that keep themselves current',
    body: 'A View is a name, an icon and a filter: free text, from/to/subject, a relative date window, and scope like unread-only, flagged or has-attachment. Every View re-runs on startup and after each sync, so the count beside it is live and opening one is instant.',
    note: 'Off by default. Enable them under Settings → Sidebar, as a group in the sidebar or their own tab.',
    visual: 'views',
  },
  {
    slug: 'menu-bar',
    kicker: 'Menu bar',
    title: 'Rearrange the menu bar on the menu bar',
    body: 'Press Edit menu bar and the live bar turns into its own editor. Drag menus and items into the order you want, hide what you never reach for, and add your own entries, submenus and separators. Built-ins are only ever hidden, never destroyed, so Reset always brings them back.',
    visual: 'menubar',
  },
  {
    slug: 'vip-senders',
    kicker: 'VIP senders',
    title: 'The people who get through',
    body: 'Star a sender and their mail raises a native notification, whether that is Notification Center, a Windows toast or Linux dbus, even when general new-mail alerts are off. Matching is on the address, so a sender renaming themselves never breaks it.',
    visual: 'vip',
  },
  {
    slug: 'mailto',
    kicker: 'mailto:',
    title: 'Click a mail link anywhere, land in Pelton',
    body: 'Pelton can register as your system’s mailto: handler, offered once during onboarding and after that as one quiet line in About. Links open a compose with the recipient, subject and body already filled in, and a second click hands the draft to the window you already have open instead of starting a second Pelton.',
    visual: 'mailto',
  },
]

export const mcpPrompts = [
  'Summarise everything unread from my team this week.',
  'Which invoices arrived this month, and what do they add up to?',
  'Find the thread where we settled the lease terms.',
  'Draft a reply to Ada. I’ll send it myself.',
]

export const mcpTools = [
  { name: 'list_accounts', desc: 'The configured mail accounts.' },
  { name: 'list_folders', desc: 'The folders of one account.' },
  { name: 'list_messages', desc: 'Messages in a folder, newest first, as summaries.' },
  { name: 'get_message', desc: 'One full message: headers, plain-text and HTML body, attachment metadata.' },
  { name: 'search_messages', desc: 'Ranked full-text search, with optional from, to and subject scopes.' },
]

export const mcpGuarantees = [
  {
    icon: 'lock',
    title: 'Off until you say so',
    body: 'Nothing listens until you enable it under Settings → External.',
  },
  {
    icon: 'shield-lock',
    title: 'Loopback only',
    body: 'Bound to 127.0.0.1. A guard makes binding to a routable address impossible, so nothing else on your network can reach it.',
  },
  {
    icon: 'eye',
    title: 'Read-only, structurally',
    body: 'None of the five tools can send, move, flag or delete. The interface they are built on has no method that writes.',
  },
  {
    icon: 'shield-check',
    title: 'Token on every request',
    body: 'Checked in constant time before a request reaches the server, so an unauthorized caller cannot even list the tools. Regenerate it to revoke access.',
  },
  {
    icon: 'paperclip',
    title: 'Never attachment bytes',
    body: 'get_message returns an attachment’s name, type and size. The file contents stay on your disk.',
  },
  {
    icon: 'cloud-off',
    title: 'Pelton calls no AI service',
    body: 'There is no model, no key and no cloud in Pelton. Your agent runs wherever you already run it and reads the mail cached on your machine.',
  },
]

export const faq = [
  {
    q: 'Which email providers does Pelton support?',
    a: 'Standard IMAP and SMTP, which covers most providers out of the box. There is built-in OAuth2 support for Gmail, and because Pelton is open source, more providers can be added by the community.',
  },
  {
    q: 'Does Pelton work offline?',
    a: 'Yes. You can cache your newest emails locally for a timeframe you choose, and mark specific messages to be kept offline permanently.',
  },
  {
    q: 'Does Pelton support PGP/GPG encryption?',
    a: 'Yes.',
  },
  {
    q: 'Where is my data actually stored?',
    a: 'In a SQLite database on your own machine, and on your original email provider. Nothing is hosted or routed through third-party servers.',
  },
  {
    q: 'Why Wails and Go instead of Electron?',
    a: 'Lower memory use and a snappier UI. Go and Wails avoid the overhead of a bundled browser while keeping the client cross-platform.',
  },
  {
    q: 'How does Pelton handle tracking pixels or remote images?',
    a: 'Remote images and tracking pixels are blocked by default, similar to Thunderbird. A small banner tells you when images were blocked, and you can allow them per email.',
  },
  {
    q: 'Is there any telemetry or automated crash reporting?',
    a: 'No. Pelton has zero telemetry. If you hit a bug, opening an issue on GitHub is what helps.',
  },
  {
    q: 'Does the MCP server send my mail to an AI company?',
    a: 'No. Pelton contains no model, no API key and no call to any AI provider. The MCP server is a local endpoint bound to 127.0.0.1 that an agent you run connects to, and it is off until you enable it. Whatever that agent then does with the mail it reads is between you and whoever makes it, so pick a client you trust.',
  },
  {
    q: 'Can an AI agent send or delete mail through Pelton?',
    a: 'No. All five MCP tools are read-only, and the interface behind them has no method that writes. An agent can browse, read and search; it cannot send, move, flag or delete. It also never receives attachment file contents, only their names, types and sizes.',
  },
  {
    q: 'What are Views, and why do I not see them?',
    a: 'A View is a saved search you can open like a folder, with a live count next to it. They are hidden by default: turn them on under Settings, Sidebar, either as a group inside the sidebar or as their own tab. You can also create one straight from the search bar with "Save as view".',
  },
]

export const powerFeatures = [
  { icon: 'keyboard', title: 'Vim mode', body: 'Modal editing in the compose editor.' },
  { icon: 'adjustments', title: 'Custom shortcuts', body: 'Rebind keys throughout the client.' },
  { icon: 'hand-finger', title: 'Swipe gestures', body: 'Trackpad swipes on messages, configurable.' },
  { icon: 'address-book', title: 'Address autocomplete', body: 'Learned from mail you send and receive.' },
]
