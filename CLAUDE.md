# Claude Code Guidelines

## Commits: ALWAYS use gitmojis

Format: `[:code:] [Message with capital]` - Use text codes, NOT emoji symbols

Common codes:
- `:sparkles:` feature
- `:bug:` bug fix
- `:lipstick:` UI/style
- `:recycle:` refactor
- `:memo:` docs
- `:wrench:` config

Example: `git commit -m ":sparkles: Add dark mode toggle"`

## Key Standards

**DRY**: Modify base components (Button, Card) not individual instances. Extract patterns into reusable components (e.g., PageCard).

**URLs**: kebab-case (`/spanish-verbs/present-subjunctive`), internal data camelCase, convert with `tenseToSlug()`/`slugToTense()`.

**Styling**: Buttons have `cursor-pointer active:scale-95 transition-transform` globally in buttonVariants.

**Pre-commit**: Run `bun run type-check && bun run biome check --write [files]`

**IMPORTANT - Git commits**: ONLY commit files you edited. NEVER use `git add -A` or `git add .` as user may be working on other files. Always use `git add [specific-files]` with only the files you modified.

## Spanish Verbs App

- Use `PageCard` component for pages (animated backgrounds)
- Page titles centered with `text-center w-full`
- Data in `data.ts`, utils in `utils.ts`, storage in `storage.ts`
