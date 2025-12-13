# Claude Code Guidelines for this Project

## Commit Message Format

**ALWAYS use gitmojis** in commit messages with this format:

```
[gitmoji] [Message starting with capital letter]
```

### Common Gitmojis

- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 💄 `:lipstick:` - UI/style updates
- ♻️ `:recycle:` - Refactoring
- 🎨 `:art:` - Improve structure/format of code
- ⚡️ `:zap:` - Performance improvements
- 📝 `:memo:` - Documentation
- 🔧 `:wrench:` - Configuration files
- ✅ `:white_check_mark:` - Tests
- 🚚 `:truck:` - Move/rename files
- 🔥 `:fire:` - Remove code/files
- 🚨 `:rotating_light:` - Fix linter warnings

### Example Commits

```bash
git commit -m "✨ Add dark mode toggle to settings"
git commit -m "🐛 Fix progress bar calculation in scoreboard"
git commit -m "♻️ Extract PageCard component for reusability"
git commit -m "💄 Center page titles across all views"
```

## Code Standards

### 1. DRY Principle - Don't Repeat Yourself

- **Global changes over individual edits**: Modify base components (like Button, Card) instead of editing each instance
- **Extract common patterns**: Create reusable components when layout/structure is repeated
- **Example**: `PageCard` component for consistent page layouts with animated backgrounds

### 2. Component Organization

- Keep components in `src/app/components/[feature]/components/` for feature-specific UI
- Shared UI components go in `src/components/ui/` (shadcn components)
- Utility functions in dedicated files (e.g., `utils.ts`)

### 3. Routing

- Use Next.js App Router folder structure for routes
- URL naming: Use kebab-case for URLs (e.g., `/spanish-verbs/present-subjunctive`)
- Internal data: Can use camelCase (convert with utility functions)

### 4. Styling

- Use Tailwind CSS classes
- Common interactive patterns (cursor, animations) should be in base components
- Current standard for buttons: `cursor-pointer active:scale-95 transition-transform`

## Project-Specific Conventions

### Spanish Verbs App

- **Data format**: Internal tense keys use camelCase (e.g., `presentSubjunctive`)
- **URL format**: Use kebab-case (e.g., `/spanish-verbs/present-subjunctive`)
- **Conversion utilities**: `tenseToSlug()` and `slugToTense()` in `utils.ts`
- **Page layout**: Use `PageCard` component for consistent animated backgrounds and layout
- **Progress tracking**: Stored in localStorage via `storage.ts`

## Git Workflow

### Before Committing

1. Run type check: `bun run type-check`
2. Run linter/formatter: `bun run biome check --write [files]`
3. Verify all changes are intentional
4. Use descriptive commit messages with gitmojis

### Commit Template

```bash
git commit -m "$(cat <<'EOF'
[gitmoji] [Short description starting with capital]

[Optional longer description of changes]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

## Common Tasks

### Adding a new button style globally

Edit `src/components/ui/button.tsx` in the `buttonVariants` cva definition.

### Adding a new page to Spanish Verbs

1. Create route folder in `src/app/spanish-verbs/`
2. Use `PageCard` component for consistent layout
3. Update navigation in parent components

### URL-based state management

This project uses Next.js routing instead of URL parameters:
- Different screens = different routes
- Example: `/spanish-verbs/[tense]/practice` for practice mode

## Important Notes

- TypeScript errors must be fixed before committing
- Biome is used for linting and formatting (not ESLint/Prettier)
- All buttons globally have cursor-pointer and click animations
- Page titles should be centered using `text-center w-full` classes
- Never commit changes without running checks first

## Resources

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Biome: https://biomejs.dev
