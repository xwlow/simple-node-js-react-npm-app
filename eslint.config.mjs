// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
//   pluginReact.configs.flat.recommended,
// ]);


import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.{js,jsx}"],
    ...pluginReact.configs.flat.recommended,
  }
];
