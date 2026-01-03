import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  tseslint.configs.recommendedTypeChecked,
  // Enable projectService
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...nextVitals, // Contains eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y, @next/eslint-plugin-next
  eslintConfigPrettier, // Gets rid off rule collisions with prettier
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Structural limits
  {
    ignores: ["src/components/**", "**/*.ts"],
    rules: {
      "max-depth": ["error", 3],
      "max-lines": ["error", 200],
      "max-lines-per-function": ["error", 200],
      "max-nested-callbacks": ["error", 3],
      complexity: ["error", 10],
    },
  },
  // Core rules
  {
    rules: {
      // prop={"abc"} --> prop="abc"
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      // Force everyone to use path aliases
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/../../**"],
              message: "Use path aliases (@/*) for imports going up 2+ directories",
            },
          ],
        },
      ],
    },
  },
  // Set up file casing rules (PascalCaseComponent.tsx, kebab-case-ts-files.ts)
  {
    files: ["src/**/*.tsx"],
    plugins: {
      unicorn,
    },
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            pascalCase: true,
            kebabCase: true, // Next.js files like not-found.tsx
          },
        },
      ],
    },
  },
  {
    files: ["src/**/*.ts"],
    ignores: ["**/*.d.ts", "**/*.config.ts", "src/app/theme/**"],
    plugins: {
      unicorn,
    },
    rules: {
      "unicorn/filename-case": ["error", { cases: { kebabCase: true } }],
    },
  },
  // Checks and automatically removes unused imports on --fix
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
    },
  },
  // Set some useful unicorn rules
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      unicorn,
    },
    rules: {
      "unicorn/no-await-expression-member": "error",
      "unicorn/prefer-logical-operator-over-ternary": "error",
      "unicorn/prefer-math-min-max": "error",
      "unicorn/require-number-to-fixed-digits-argument": "error",
    },
  },
]);
