import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ),
  {
    env: {
      browser: true,
      es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [
      "react",
      "react-hooks",
      "@typescript-eslint",
      "import",
      "jsx-a11y",
      "@tanstack/query",
    ],
    rules: {
      // JavaScript rules
      "arrow-parens": "warn",
      "default-case-last": "warn",
      "default-case": "error",
      "dot-notation": "warn",
      eqeqeq: "error",
      "implicit-arrow-linebreak": "off",
      "max-params": ["warn", { max: 3 }],
      "no-console": "warn",
      "object-shorthand": ["error", "always"],
      "no-duplicate-imports": "error",
      "no-return-await": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "require-await": "error",
      camelcase: [
        "error",
        {
          properties: "always",
          ignoreDestructuring: true,
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
          message: "Default React import not allowed",
        },
        {
          selector:
            "ImportDeclaration[source.value='react'][specifiers.0.type='ImportSpecifier']",
          message: "Named React import not allowed",
        },
      ],

      // TypeScript rules
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          tsIgnore: "allow-with-description",
          tsExpectError: "allow-with-description",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
      "react/sort-prop-types": "warn",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
          arrowFunctions: "always",
          functionComponents: "arrow-function",
        },
      ],
      "react/no-unstable-nested-components": "error",
      "react/jsx-sort-props": [
        "warn",
        {
          reservedFirst: true,
          shorthandFirst: true,
          callbacksLast: true,
        },
      ],

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // a11y rules
      "jsx-a11y/aria-role": "warn",

      // Import rules
      "import/dynamic-import-chunkname": "error",
      "import/export": "warn",
      "import/first": "error",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "error",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "error",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.stories.tsx",
            "**/*.test.{ts,tsx}",
            "**/*.spec.{ts,tsx}",
            "./src/{test-utils.tsx,setupTests.ts}",
          ],
        },
      ],
      "import/no-unassigned-import": [
        "error",
        {
          allow: ["**/*.{scss,sass,css}", "core/theme", "core/tracking"],
        },
      ],
      "import/order": [
        "error",
        {
          pathGroups: [
            {
              pattern: "test-utils",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "./*.scss",
              group: "index",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          groups: [
            ["builtin", "external"],
            "internal",
            "parent",
            "sibling",
            "index",
            "type",
          ],
        },
      ],

      // React Query rules
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/prefer-query-object-syntax": "error",
    },
    overrides: [
      {
        files: ["*.tsx"],
        rules: {
          "react/prop-types": "off",
        },
      },
      {
        files: ["*.spec.ts", "*.spec.tsx"],
        rules: {
          "no-magic-numbers": "off",
          "react/display-name": "off",
        },
      },
      {
        files: ["*.stories.tsx"],
        rules: {
          "no-console": "off",
          "no-magic-numbers": "off",
          "import/no-anonymous-default-export": "off",
        },
      },
      {
        extends: ["plugin:cypress/recommended"],
        files: ["cypress/**/*.js"],
      },
    ],
    settings: {
      react: {
        version: "detect",
      },
      "import/ignore": ["node_modules"],
      "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".scss", ".css"],
      "import/resolver": {
        typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      },
    },
  },
];

export default eslintConfig;
