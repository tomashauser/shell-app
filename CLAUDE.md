# Claude Code Guidelines

## Commits: ALWAYS use gitmojis

Format: `[gitmoji] [Message with capital]`

Common: ✨ feature | 🐛 bug | 💄 UI | ♻️ refactor | 📝 docs | 🔧 config

Example: `git commit -m "✨ Add dark mode toggle"`

## Key Standards

**DRY**: Modify base components (Button, Card) not individual instances. Extract patterns into reusable components (e.g., PageCard).

**URLs**: kebab-case (`/spanish-verbs/present-subjunctive`), internal data camelCase, convert with `tenseToSlug()`/`slugToTense()`.

**Styling**: Buttons have `cursor-pointer active:scale-95 transition-transform` globally in buttonVariants.

**Pre-commit**: Run `bun run type-check && bun run biome check --write [files]`

## Spanish Verbs App

- Use `PageCard` component for pages (animated backgrounds)
- Page titles centered with `text-center w-full`
- Data in `data.ts`, utils in `utils.ts`, storage in `storage.ts`
