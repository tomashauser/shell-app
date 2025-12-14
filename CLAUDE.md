# Claude Code Guidelines

## Key Standards

- Create a new commit after every change using the gitmoji format `[:code:] [Message with capital]` - Use text codes, NOT emoji symbols.
- ONLY commit files you edited as user may be working on other files. Always use `git add [specific-files]` with only the files you modified.
- Pre-commit: Run `bun run type-check && bun run biome check --write [files]`

**IMPORTANT - Git commits**: 

## Spanish Verbs App

- Use `PageCard` component for pages (animated backgrounds)
- Page titles centered with `text-center w-full`
- Data in `data.ts`, utils in `utils.ts`, storage in `storage.ts`
