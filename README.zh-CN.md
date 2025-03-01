# unocss-preset-better-breakpoints

<!-- automd:badges color="yellow" license name="unocss-preset-better-breakpoints" codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/unocss-preset-better-breakpoints?color=yellow)](https://npmjs.com/package/unocss-preset-better-breakpoints)
[![npm downloads](https://img.shields.io/npm/dm/unocss-preset-better-breakpoints?color=yellow)](https://npm.chart.dev/unocss-preset-better-breakpoints)
[![bundle size](https://img.shields.io/bundlephobia/minzip/unocss-preset-better-breakpoints?color=yellow)](https://bundlephobia.com/package/unocss-preset-better-breakpoints)
[![install size](https://badgen.net/packagephobia/install/unocss-preset-better-breakpoints?color=yellow)](https://packagephobia.com/result?p=unocss-preset-better-breakpoints)
[![codecov](https://img.shields.io/codecov/c/gh/ZaneL1u/unocss-preset-better-breakpoints?color=yellow)](https://codecov.io/gh/ZaneL1u/unocss-preset-better-breakpoints)
[![license](https://img.shields.io/github/license/ZaneL1u/unocss-preset-better-breakpoints?color=yellow)](https://github.com/ZaneL1u/unocss-preset-better-breakpoints/blob/main/LICENSE)

<!-- /automd -->

为 UnoCSS 打造的更好的 BreakPoints 预设, 无论您是移动端优先或者桌面端优先。

<br>

<p align='center'>
<a href="https://github.com/ZaneL1u/unocss-preset-better-breakpoints/blob/main/README.md">English</a> | <b>简体中文</b>
</p>
<br>

## 功能
- 📏 根据视口响应式的断点系统
- 📱 更好的适配设计稿和设备
- 📦 使用简单
- 🚀 快速高效的完成各种设备的适配

## 安装
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

## 使用
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

## 开源许可
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
