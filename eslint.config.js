// eslint.config.js
import js from "@eslint/js";
import parserTs from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/ban-ts-comment": "off",
        },
    },
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: parserTs,
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            vue: vuePlugin,
        },
        rules: {
            // Tự định nghĩa lại rule Vue (tương đương vue3-recommended)
            "vue/html-indent": ["error", 2],
            "vue/max-attributes-per-line": ["error", { singleline: 3 }],
            "vue/html-self-closing": "error",
            "vue/no-unused-components": "warn",
            "vue/require-v-for-key": "error",
            "vue/no-mutating-props": "error",
            "vue/no-deprecated-v-on-native-modifier": "warn"
        },
    },
];
