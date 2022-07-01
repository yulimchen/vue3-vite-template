/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    // 页面组件忽略命名规则
    {
      files: ["src/views/index.vue", "src/views/**/index.vue"], // 匹配views和二级目录中的index.vue
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
