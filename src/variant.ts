import type { VariantHandler, VariantObject } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import type { BetterBreakpointsOptions, Breakpoint, BreakpointObj } from './interface'
import { convertKey, isMatchType } from './helper'
import { BreakpointMatchTypeEnum } from './interface'

declare module '@unocss/preset-mini' {
  interface Theme {
    betterBreakpoints?: BetterBreakpointsOptions
  }
}

// Reusable constants for media query construction
const PX_SUFFIX = 'px'
const MEDIA_QUERY_JOIN = ' and '
const MEDIA_TYPE_JOIN = ', '

/**
 * Transforms breakpoint configuration into CSS media query matcher
 * @param option Breakpoint configuration (object or primitive value)
 * @returns Media query string for CSS rules
 */
export function breakpointToMatcher(option: Breakpoint): string {
  // Handle primitive values directly for fast path
  if (typeof option !== 'object') {
    const size = typeof option === 'string' ? option : `${option}${PX_SUFFIX}`
    return `(min-width: ${size})`
  }

  const entries = Object.entries(option as BreakpointObj)
  const parts = Array.from({ length: entries.length })

  for (let i = 0; i < entries.length; i++) {
    const [key, size] = entries[i]
    const value = typeof size === 'string' ? size : `${size}${PX_SUFFIX}`
    parts[i] = `(${convertKey(key)}: ${value})`
  }

  return parts.join(MEDIA_QUERY_JOIN)
}

/**
 * Creates UnoCSS variant handler for responsive breakpoints
 * @returns Configured variant object for UnoCSS
 */
export function variantBreakpoints(): VariantObject<Theme> {
  // Reusable handler factory for media query variants
  const createHandler = (query: string, matcher: string): VariantHandler => ({
    matcher,
    handle: (input, next) => next({
      ...input,
      parent: `@media ${query}`,
      parentOrder: 3000,
    }),
  })

  // WeakMap preserves memory when configurations are garbage collected
  const regexCache = new WeakMap<BetterBreakpointsOptions, RegExp>()

  return {
    name: 'betterBreakpoints',
    order: -1,
    match(matcher, context) {
      const { betterBreakpoints } = context.theme
      if (!betterBreakpoints)
        return

      // Set provides O(1) lookups for breakpoint validation
      const breakpointSet = new Set(Object.keys(betterBreakpoints))
      if (!breakpointSet.size)
        return

      // Cache regex patterns per configuration to avoid recompilation
      let regex = regexCache.get(betterBreakpoints)
      if (!regex) {
        const pattern = Array.from(breakpointSet).join('|')
        regex = new RegExp(`^(?<breakpoint>${pattern}):`)
        regexCache.set(betterBreakpoints, regex)
      }

      const match = matcher.match(regex)
      const breakpoint = match?.groups?.breakpoint
      if (!breakpoint || !breakpointSet.has(breakpoint))
        return

      const option = betterBreakpoints[breakpoint]
      if (!option)
        return

      // Fast path for simple breakpoint configurations
      if (!isMatchType(option)) {
        return createHandler(breakpointToMatcher(option as Breakpoint), matcher)
      }

      // Prioritize 'all' media type handling
      const allBreakpoint = option[BreakpointMatchTypeEnum.ALL]
      if (allBreakpoint !== undefined) {
        const query = breakpointToMatcher(allBreakpoint)
        return query && createHandler(query, matcher)
      }

      // Handle combined media types with explicit control flow
      const mediaQueries = []
      const printBreakpoint = option[BreakpointMatchTypeEnum.PRINT]
      const screenBreakpoint = option[BreakpointMatchTypeEnum.SCREEN]

      // Avoid array methods for critical path performance
      if (printBreakpoint) {
        mediaQueries.push(`print and ${breakpointToMatcher(printBreakpoint)}`)
      }
      if (screenBreakpoint) {
        mediaQueries.push(`screen and ${breakpointToMatcher(screenBreakpoint)}`)
      }

      return mediaQueries.length
        ? createHandler(mediaQueries.join(MEDIA_TYPE_JOIN), matcher)
        : undefined
    },
  }
}
