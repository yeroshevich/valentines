import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsdoc from "eslint-plugin-jsdoc";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.tsx"],
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error"
    }
  }
];

export default eslintConfig;
