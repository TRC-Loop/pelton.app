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
    body: 'macOS, Windows, Fedora.',
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
]

export const powerFeatures = [
  { icon: 'keyboard', title: 'Vim mode', body: 'Modal editing in the compose editor.' },
  { icon: 'adjustments', title: 'Custom shortcuts', body: 'Rebind keys throughout the client.' },
  { icon: 'hand-finger', title: 'Swipe gestures', body: 'Trackpad swipes on messages, configurable.' },
  { icon: 'address-book', title: 'Address autocomplete', body: 'Learned from mail you send and receive.' },
]
