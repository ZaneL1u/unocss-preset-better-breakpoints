# unocss-preset-better-breakpoints

<!-- automd:badges color="yellow" license name="unocss-preset-better-breakpoints" codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/unocss-preset-better-breakpoints?color=yellow)](https://npmjs.com/package/unocss-preset-better-breakpoints)
[![npm downloads](https://img.shields.io/npm/dm/unocss-preset-better-breakpoints?color=yellow)](https://npm.chart.dev/unocss-preset-better-breakpoints)
[![bundle size](https://img.shields.io/bundlephobia/minzip/unocss-preset-better-breakpoints?color=yellow)](https://bundlephobia.com/package/unocss-preset-better-breakpoints)
[![install size](https://badgen.net/packagephobia/install/unocss-preset-better-breakpoints?color=yellow)](https://packagephobia.com/result?p=unocss-preset-better-breakpoints)
[![codecov](https://img.shields.io/codecov/c/gh/ZaneL1u/unocss-preset-better-breakpoints?color=yellow)](https://codecov.io/gh/ZaneL1u/unocss-preset-better-breakpoints)
[![license](https://img.shields.io/github/license/ZaneL1u/unocss-preset-better-breakpoints?color=yellow)](https://github.com/ZaneL1u/unocss-preset-better-breakpoints/blob/main/LICENSE)

<!-- /automd -->

UnoCSS has better breakpoint presets, which can be configured for Desktop First and Mobile First.

## Features
- 📏 Viewport breakpoints
- 📱 According to the equipment and design
- 📦 Easy to use
- 🚀 Fast and efficient

## Installation
<!-- automd:pm-install dev -->

```sh
# ✨ Auto-detect
npx nypm install -D unocss-preset-better-breakpoints

# npm
npm install -D unocss-preset-better-breakpoints

# yarn
yarn add -D unocss-preset-better-breakpoints

# pnpm
pnpm install -D unocss-preset-better-breakpoints

# bun
bun install -D unocss-preset-better-breakpoints

# deno
deno install --dev unocss-preset-better-breakpoints
```

<!-- /automd -->

## Usage
<!-- automd:file src="./tests/fixture/src/example.ts" code -->

```ts [example.ts]
import { defineConfig } from 'unocss'
import { presetBetterBreakpoints } from 'unocss-preset-better-breakpoints'

export default defineConfig({
  presets: [
    // ...
    presetBetterBreakpoints(),
  ],
})
```

<!-- /automd -->

## License
<!-- automd:contributors author="ZaneL1u" license="MIT" -->

Published under the [MIT](https://github.com/ZaneL1u/unocss-preset-better-breakpoints/blob/main/LICENSE) license.
Made by [@ZaneL1u](https://github.com/ZaneL1u) and [community](https://github.com/ZaneL1u/unocss-preset-better-breakpoints/graphs/contributors) 💛
<br><br>
<a href="https://github.com/ZaneL1u/unocss-preset-better-breakpoints/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ZaneL1u/unocss-preset-better-breakpoints" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
