import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
export default defineConfig([
  // 1. Ignore build/dist folders
  {
    ignores: ["dist/"],
  },

  // 2. JS & TS file config (general)
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser, // for browser APIs
    },
  },

  // 3. Node.js (CommonJS-style) JS files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  // 4. Jest configuration for test files
  {
    files: ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"],
    languageOptions: {
      globals: {
        ...globals.jest, // adds describe, it, expect, etc.
      },
    },
  },

  // 5. TypeScript-specific rules
  ...tseslint.configs.recommended, // spreads the recommended TS rules
  eslintPluginPrettier,
]);
