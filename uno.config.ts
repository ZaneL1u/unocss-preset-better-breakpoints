import { defineConfig, presetUno } from 'unocss'
import { presetBetterBreakpoints } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUno(),
    presetBetterBreakpoints({
      span: 24,
    }),
  ],
})
