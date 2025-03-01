import { defineConfig } from 'unocss'
import { presetBetterBreakpoints } from './src'

// Just for Vscode Extension
export default defineConfig({
  presets: [
    presetBetterBreakpoints({
      span: 24,
    }),
  ],
})
