import { createGenerator } from '@unocss/core'
import { presetMini } from 'unocss'
// breakpoints.test.ts
import { describe, expect, it } from 'vitest'
import { presetBetterBreakpoints } from '../src'
import { breakpointToMatcher } from '../src/variant'

it('it works', async () => {
  const uno = createGenerator({
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

  const { css } = await (await uno).generate('h-5 sm:h-10 md:h-20')

  expect(css).toMatchInlineSnapshot(`
    "/* layer: preflights */
    *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);}
    /* layer: default */
    .h-5{height:1.25rem;}
    @media (max-width: 640px){
    .sm\\:h-10{height:2.5rem;}
    }
    @media (max-width: 768px){
    .md\\:h-20{height:5rem;}
    }"
  `)
})

describe('breakpointToMatcher', () => {
  it('handles numeric values', () => {
    expect(breakpointToMatcher(768)).toBe('(min-width: 768px)')
    expect(breakpointToMatcher(1024.5)).toBe('(min-width: 1024.5px)')
  })

  it('handles string values', () => {
    expect(breakpointToMatcher('768px')).toBe('(min-width: 768px)')
    expect(breakpointToMatcher('60em')).toBe('(min-width: 60em)')
  })

  it('handles object values', () => {
    expect(breakpointToMatcher({ min: 768, max: 1024 }))
      .toBe('(min-width: 768px) and (max-width: 1024px)')

    expect(breakpointToMatcher({ 'min-width': '768px', 'orientation': 'portrait' }))
      .toBe('(min-width: 768px) and (orientation: portrait)')
  })

  it('handles complex units', () => {
    expect(breakpointToMatcher({ min: '100vh', max: '50rem' }))
      .toBe('(min-width: 100vh) and (max-width: 50rem)')
  })
})

describe('variantBreakpoints', () => {
  it('returns undefined when no breakpoints configured', async () => {
    const uno = createGenerator()

    const { css } = await (await uno).generate('h-5 sm:h-10 md:h-20')

    expect(css).toMatchSnapshot()
  })
})
