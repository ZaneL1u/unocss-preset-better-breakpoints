import { defineConfig } from 'unocss'
import { presetBetterBreakpoints } from 'unocss-preset-better-breakpoints'

export default defineConfig({
  presets: [
    // ...
    presetBetterBreakpoints(),
  ],
})
