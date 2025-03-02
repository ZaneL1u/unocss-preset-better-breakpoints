import type { Breakpoint, BreakpointOption } from './interface'
import { BreakpointMatchTypeEnum } from './interface'

export function hasAnySpecifiedKey<T extends object>(keys: string[], obj: T) {
  return keys.some(key => Object.hasOwnProperty.call(obj, key))
};

export function isMatchType(option: BreakpointOption): option is { [BreakpointMatchTypeEnum.ALL]: Breakpoint } | { [BreakpointMatchTypeEnum.PRINT]: Breakpoint, [BreakpointMatchTypeEnum.SCREEN]: Breakpoint } {
  return typeof option === 'object' && hasAnySpecifiedKey(Object.values(BreakpointMatchTypeEnum), option)
}

export function convertKey(key: string): string {
  switch (key) {
    case 'min':
      return 'min-width'
    case 'max':
      return 'max-width'
    default:
      return key
  }
}
