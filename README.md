<div align="center">
  <!-- タイトル -->
  <h1>
    ESLint rules for Nuxt3
  </h1>
  <!-- バッジ一覧 -->
  <span>
    <!-- Nuxt -->
    <a href="https://github.com/nuxt/nuxt">
      <img
        src="https://img.shields.io/badge/Nuxt-v3.2.0-00DC82.svg?logo=Nuxt.js"
        alt="Nuxt Version Badge"
      >
    </a>
    <!-- Vuetify -->
    <a href="https://github.com/vuetifyjs/vuetify">
      <img
        src="https://img.shields.io/badge/Vuetify-v3.1.4-1867C0.svg?logo=Vuetify"
        alt="Vuetifty Version Badge"
      >
    </a>
  </span>
</div>

ESLint rules for Nuxt3 for myself.

## `eslint-config-nuxt3-typescript`

<span>
  <!-- Nuxt3 ESLint packages -->
  <a href="https://github.com/nuxt/eslint-config">
    <img
      src="https://img.shields.io/badge/Nuxt3 ESLint packages-v12.0.0-00DC82.svg?logo=Nuxt.js"
      alt="Nuxt3-ESLint-Packages Version Badge"
    >
  </a> 
</span>

### Description

- Created based on [@nuxtjs/eslint-config-typescript](https://github.com/nuxt/eslint-config#typescript).

  The following settings are extended in based.

  - [eslint-plugin-vue/vue3-recommended](https://github.com/vuejs/eslint-plugin-vue)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)

- Add ESLint rules and Prettier plugins with custom.

  - [prettier](https://github.com/prettier/prettier)
  - [eslint-config-prettier](https://giddthub.com/prettier/eslint-config-prettier)
  - [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)

### Installation

```shell
$ npm i -D eslint
```

```shell
$ npm i @nuxtjs/eslint-config-typescript \
        prettier \
        eslint-config-prettier \
        eslint-plugin-unused-imports
```
