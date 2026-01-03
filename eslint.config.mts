import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

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
  // Core rules
  {
    ignores: ["src/components/**", "**/*.ts"],
    rules: {
      "max-depth": ["error", 3],
      "max-len": ["error", 200],
      "max-lines": ["error", 200],
      "max-lines-per-function": ["error", 200],
      "max-nested-callbacks": ["error", 3],
      complexity: ["error", 10],
    },
  },
]);
