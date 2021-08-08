module.exports = {
    extends: ["next", "next/core-web-vitals", "plugin:prettier/recommended"],
    plugins: ["prettier", "import"],
    rules: {
        "no-console": "warn",
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
                traillingComma: "all",
                semi: true,
                tabWidth: 4,
                printWidth: 100,
                bracketSpacing: true,
                arrowParens: "always",
                endOfLine: "auto",
            },
        ],
        "no-unused-vars": [
            "warn",
            {
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_.*?$",
            },
        ],
        "import/order": ["warn", { "newlines-between": "always" }],
        "react/self-closing-comp": "warn",
        "react-hooks/rules-of-hooks": "warn",
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
        "no-debugger": "warn",
    },
};
