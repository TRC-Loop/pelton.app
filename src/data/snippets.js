export const snippets = [
  {
    "path": "internal/imap/idle.go",
    "lang": "go",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/internal/imap/idle.go#L1-L26",
    "code": "package imap\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/emersion/go-imap/v2\"\n)\n\n// Idle blocks in IMAP IDLE until ctx is cancelled. Updates arrive on Updates().\nfunc (c *Client) Idle(ctx context.Context) error {\n\tif !c.SupportsIdle() {\n\t\treturn fmt.Errorf(\"imap: server does not advertise the IDLE capability\")\n\t}\n\tif c.raw.State() != imap.ConnStateSelected {\n\t\treturn fmt.Errorf(\"imap: a mailbox must be selected before idling\")\n\t}\n\n\tcmd, err := c.raw.Idle()\n\tif err != nil {\n\t\treturn fmt.Errorf(\"imap: start idle: %w\", err)\n\t}\n\n\t<-ctx.Done()\n\n\tif err := cmd.Close(); err != nil {"
  },
  {
    "path": "internal/imap/search.go",
    "lang": "go",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/internal/imap/search.go#L1-L26",
    "code": "package imap\n\nimport (\n\t\"fmt\"\n\t\"time\"\n\n\t\"github.com/emersion/go-imap/v2\"\n)\n\n// SearchByMessageID returns the UIDs in the selected mailbox whose Message-ID\n// header matches messageID. It backs undo-archive: after a move the message has a\n// new UID in the destination, so we relocate it by its stable rfc Message-ID.\nfunc (c *Client) SearchByMessageID(messageID string) ([]imap.UID, error) {\n\tif c.raw.Mailbox() == nil {\n\t\treturn nil, fmt.Errorf(\"imap: no mailbox selected for search\")\n\t}\n\tif messageID == \"\" {\n\t\treturn nil, fmt.Errorf(\"imap: empty message-id\")\n\t}\n\tcriteria := &imap.SearchCriteria{\n\t\tHeader: []imap.SearchCriteriaHeaderField{{Key: \"Message-Id\", Value: messageID}},\n\t}\n\tdata, err := c.raw.UIDSearch(criteria, nil).Wait()\n\tif err != nil {\n\t\treturn nil, fmt.Errorf(\"imap: search message-id %q: %w\", messageID, err)\n\t}"
  },
  {
    "path": "internal/imap/flags.go",
    "lang": "go",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/internal/imap/flags.go#L1-L24",
    "code": "package imap\n\nimport (\n\t\"fmt\"\n\n\t\"github.com/emersion/go-imap/v2\"\n)\n\n// AddFlags adds flags to the message with the given UID (additive, idempotent).\nfunc (c *Client) AddFlags(uid imap.UID, flags ...imap.Flag) error {\n\treturn c.store(uid, imap.StoreFlagsAdd, flags)\n}\n\n// RemoveFlags clears flags from the message with the given UID.\nfunc (c *Client) RemoveFlags(uid imap.UID, flags ...imap.Flag) error {\n\treturn c.store(uid, imap.StoreFlagsDel, flags)\n}\n\n// SetFlags replaces the message's entire flag set.\nfunc (c *Client) SetFlags(uid imap.UID, flags ...imap.Flag) error {\n\treturn c.store(uid, imap.StoreFlagsSet, flags)\n}\n\n// store issues a UID STORE; UID keeps the target stable across changes."
  },
  {
    "path": "internal/sync/push.go",
    "lang": "go",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/internal/sync/push.go#L1-L26",
    "code": "package sync\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/emersion/go-imap/v2\"\n\n\t\"github.com/TRC-Loop/Pelton/internal/storage\"\n)\n\n// pushFlags stores the merged flags locally, adds them on the server and clears\n// the pending marker.\n//\n// the server push is additive (STORE +FLAGS), never a full replace, so flags we\n// do not model (\\Answered, \\Draft, keywords) are left untouched. combined with\n// the union merge policy this means we only ever set flags on the server, never\n// clear them, see the policy note in reconcile.go.\nfunc (e *Engine) pushFlags(ctx context.Context, state storage.MessageState, flags storage.Flag) error {\n\tif err := e.store.SetMessageFlags(ctx, state.ID, flags); err != nil {\n\t\treturn fmt.Errorf(\"sync: store merged flags for uid %d: %w\", state.UID, err)\n\t}\n\tif imapFlags := storageFlagsToImap(flags); len(imapFlags) > 0 {\n\t\tif err := e.client.AddFlags(imap.UID(state.UID), imapFlags...); err != nil {\n\t\t\treturn fmt.Errorf(\"sync: push flags for uid %d: %w\", state.UID, err)\n\t\t}"
  },
  {
    "path": "main.go",
    "lang": "go",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/main.go#L1-L24",
    "code": "// Command pelton is the desktop mail client entrypoint. It embeds the built\n// frontend and hands control to the desktop package, which owns the wails app\n// and all the frontend bindings. Keeping this file tiny keeps the repo root\n// uncluttered; the application code lives in internal/desktop.\npackage main\n\nimport (\n\t\"embed\"\n\t\"os\"\n\t\"slices\"\n\n\t\"github.com/TRC-Loop/Pelton/internal/desktop\"\n)\n\n//go:embed all:frontend/dist\nvar assets embed.FS\n\n// licenseManifest is the generated list of third-party licenses (run\n// `make licenses`); programLicense is Pelton's own GPL-3.0 text. They are\n// embedded here, at the module root where the files live, and handed to the\n// desktop layer to serve to the about section on demand.\n//\n//go:embed licenses/manifest.json\nvar licenseManifest string"
  },
  {
    "path": "frontend/src/components/common/Avatar.svelte",
    "lang": "svelte",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/frontend/src/components/common/Avatar.svelte#L1-L26",
    "code": "<script lang=\"ts\">\n  // a circular sender avatar. it tries the configured remote photo candidates in\n  // order (BIMI logo, Gravatar — per the user's fallback chain) and, when they\n  // all fail or none exist, draws a generated placeholder (\"pfp\") in the chosen\n  // style. the placeholder is a deterministic inline SVG, so it needs no network\n  // and is stable per sender. accent stays reserved for selection and links.\n  import { photosFor } from '../../lib/avatar'\n  import { pfpForSender, type PfpStyle } from '../../lib/pfp'\n  import { prefs } from '../../stores/prefs'\n\n  export let name: string = ''\n  export let email: string = ''\n  export let size: number = 32\n  // colored=false renders a neutral disc (used by skeletons), bypassing photos.\n  export let colored: boolean = true\n\n  // the generated placeholder for the current style; always available as the\n  // final fallback and shown immediately while remote candidates resolve.\n  $: placeholder = pfpForSender(($prefs.avatarStyle as PfpStyle) ?? 'initials', name, email)\n\n  // remote candidates for this sender under the current source preference. we\n  // try them in order via the <img> error handler; index advances on each fail.\n  let candidates: string[] = []\n  let attempt = 0\n  $: void resolveCandidates($prefs.avatarSource, email, colored)\n  async function resolveCandidates(source: string, em: string, isColored: boolean): Promise<void> {"
  },
  {
    "path": "frontend/src/components/common/ToggleSwitch.svelte",
    "lang": "svelte",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/frontend/src/components/common/ToggleSwitch.svelte#L1-L26",
    "code": "<script lang=\"ts\">\n  // a small accessible on/off switch used across settings in place of native\n  // checkboxes. it dispatches `change` with the new boolean; the parent owns the\n  // state. disabled switches are dimmed and inert.\n  import { createEventDispatcher } from 'svelte'\n\n  export let checked: boolean = false\n  export let disabled: boolean = false\n  export let label: string = ''\n\n  const dispatch = createEventDispatcher<{ change: boolean }>()\n\n  function toggle(): void {\n    if (disabled) {\n      return\n    }\n    dispatch('change', !checked)\n  }\n</script>\n\n<button\n  type=\"button\"\n  role=\"switch\"\n  class=\"switch\"\n  class:on={checked}\n  aria-checked={checked}"
  },
  {
    "path": "frontend/src/components/sidebar/UnifiedViews.svelte",
    "lang": "svelte",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/frontend/src/components/sidebar/UnifiedViews.svelte#L1-L26",
    "code": "<script lang=\"ts\">\n  // the unified cross-account views at the top of the sidebar. unified inbox is\n  // the default selection. flagged shows a total (flagged are not \"unread\"), the\n  // others show unread counts.\n  import {\n    IconInbox,\n    IconFlag,\n    IconSend,\n    IconFile,\n    IconArchive,\n    IconAlertTriangle,\n    IconTrash,\n    IconFolder,\n  } from '@tabler/icons-svelte'\n  import SidebarRow from './SidebarRow.svelte'\n  import type { UnifiedView, ViewKey } from '../../lib/types'\n  import { selection, selectView } from '../../stores/selection'\n  import { prefs } from '../../stores/prefs'\n  import { t } from '../../lib/i18n'\n\n  export let views: UnifiedView[]\n\n  const viewIcons: Record<string, typeof IconFolder> = {\n    inbox: IconInbox,\n    flagged: IconFlag,\n    sent: IconSend,"
  },
  {
    "path": "frontend/src/components/common/IconButton.svelte",
    "lang": "svelte",
    "start": 1,
    "url": "https://github.com/TRC-Loop/Pelton/blob/6a5c3a39e5db0bbc107e239ff81e228a103caec5/frontend/src/components/common/IconButton.svelte#L1-L23",
    "code": "<script lang=\"ts\">\n  // a square icon-only button. label is required and becomes the aria-label so\n  // icon-only controls stay accessible. the icon goes in the default slot.\n  export let label: string\n  export let title: string = label\n  export let active: boolean = false\n  export let danger: boolean = false\n  export let disabled: boolean = false\n</script>\n\n<button\n  type=\"button\"\n  class=\"icon-btn\"\n  class:active\n  class:danger\n  aria-label={label}\n  aria-pressed={active}\n  {title}\n  {disabled}\n  on:click\n>\n  <slot />\n</button>"
  }
]
