// eslint.config.js
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    extends: [js.configs.recommended, pluginReact.configs.flat.recommended],
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ turn off this outdated rule
      "react/jsx-uses-react": "off", // ✅ not needed in React 17+
    },
  },
]);
