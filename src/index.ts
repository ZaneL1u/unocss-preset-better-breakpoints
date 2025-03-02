import type { Preset } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import { definePreset } from '@unocss/core'
import { variantBreakpoints } from './variant'

export const presetBetterBreakpoints = definePreset(() => {
  return {
    name: 'unocss-preset-better-breakpoints',

    variants: [variantBreakpoints()],
  } satisfies Preset<Theme>
})
