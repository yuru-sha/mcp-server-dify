import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // 除外設定を最初に配置
    ignores: ["**/dist/**/*", "**/build/**/*"],
  },
  {
    files: ["**/*.ts"], // TypeScriptファイルのみを対象に
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // TypeScript特有のルール
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "warn",

      // 一般的なルール
      "no-console": "off", // 開発中はconsole.logを許可
      "no-debugger": "error",
      "prefer-const": "warn",
      quotes: ["warn", "double", { allowTemplateLiterals: true }],
      semi: ["warn", "always"],
      "no-var": "error",
      eqeqeq: ["warn", "always"],
      "no-multiple-empty-lines": ["warn", { max: 2 }],
      indent: ["warn", 2],
    },
  },
  pluginJs.configs.recommended,
];
