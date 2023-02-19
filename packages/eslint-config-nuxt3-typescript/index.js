module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    // https://eslint.vuejs.org/rules/no-unused-properties.html#vue-no-unused-properties
    "vue/no-unused-properties": [
      "error",
      {
        groups: ["props", "setup"],
      },
    ],
  },
};
