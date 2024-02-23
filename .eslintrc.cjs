const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/react",
    ].map(require.resolve),
    "eslint:recommended",
    "plugin:prettier/recommended",
    'plugin:react-hooks/recommended',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: ["cjs", ".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".eslintrc.cjs",
    "tailwind.config.cjs",
    "postcss.config.cjs",
    "vite.config.ts",
  ],
  plugins: [
    "react",
    "react-refresh",
    "react-hooks",
    "prettier",
    "simple-import-sort",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 120,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        tailwindFunctions: ["tv", "cn"],
        tailwindConfig: "./tailwind.config.cjs",
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
    "eslint-comments/require-description": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "off",
    "import/first": "error",
    "import/order": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "directive", next: "*" },
    ],
    "no-console": [
      "error",
      {
        allow: ["info", "warn", "error"],
      },
    ],
  },
  overrides: [
    {
      files: ["src/main.tsx"],
      rules: {
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
