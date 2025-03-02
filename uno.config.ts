import { defineConfig, presetMini } from 'unocss'
import { presetBetterBreakpoints } from './src'

// Just for Vscode Extension
export default defineConfig({
  theme: {
    betterBreakpoints: {
      md: { max: '768px' },
      sm: { max: '640px' },
    },
  },
  presets: [
    presetMini(),
    presetBetterBreakpoints(),
  ],
})
