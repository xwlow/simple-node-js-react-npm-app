// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";

// export default [
//   js.configs.recommended,
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node
//       }
//     }
//   },
//   {
//     files: ["**/*.{js,jsx}"],
//     ...pluginReact.configs.flat.recommended,
//   }
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import pluginSecurityNode from "eslint-plugin-security-node";
import plugNoUnsanitized from "eslint-plugin-no-unsanitized";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      security: pluginSecurity,
      "security-node": pluginSecurityNode
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginSecurityNode.configs.recommended.rules,
      ...pluginNoUnsanitized.configs.recommended.rules,
      "no-unsanitized/method": "error",
      "security/detect-eval-with-expression": "error",
    }
  }
];

// npx eslint test.js