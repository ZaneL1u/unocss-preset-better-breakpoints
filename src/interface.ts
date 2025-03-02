export enum BreakpointEnum {
  /** extra large */
  XL = 'xl',
  /** large */
  LG = 'lg',
  /** medium */
  MD = 'md',
  /** small */
  SM = 'sm',
  /** extra small */
  XS = 'xs',
}

export type BreakpointType = `${BreakpointEnum}`

export type CSSUnit = 'vh' | 'vw' | 'px' | 'rem' | 'em' | 'pt' | 'pc' | 'mm' | 'cm' | 'in' | 'ex' | 'ch' | 'vmin' | 'vmax' | '%'

/**
 * Combined size unit
 *
 * @example
 * - '100px'
 * - '100%'
 * - '100vh'
 * - '100vw'
 */
export type CombinedSizeUnit = `${number}${CSSUnit}`

export enum BreakpointMatchTypeEnum {
  /** all */
  ALL = 'all',
  /** print */
  PRINT = 'print',
  /** screen */
  SCREEN = 'screen',
}

/**
 * Breakpoint option
 * @example
 * - 520
 * - '520px'
 * - { max: 520 }
 * - { max: 520, min: 1024 }
 * - { 'min-width': '520px' }
 * - { 'width': '1024px', 'orientation': 'landscape' }
 */
export type Breakpoint =
  | {
    max?: number | CombinedSizeUnit
    min?: number | CombinedSizeUnit
    orientation?: 'landscape' | 'portrait'
  } | {
    'max-width'?: number | CombinedSizeUnit
    'min-width'?: number | CombinedSizeUnit
    'max-height'?: number | CombinedSizeUnit
    'min-height'?: number | CombinedSizeUnit
    'width'?: number | CombinedSizeUnit
    'height'?: number | CombinedSizeUnit
    'orientation'?: 'landscape' | 'portrait'
  }
  | CombinedSizeUnit
  | number

export type BreakpointObj = Exclude<Breakpoint, string | number>

/**
 * Breakpoint option
 */
export type BreakpointOption =
  | { [BreakpointMatchTypeEnum.ALL]: Breakpoint, [BreakpointMatchTypeEnum.PRINT]?: never, [BreakpointMatchTypeEnum.SCREEN]?: never }
  | { [BreakpointMatchTypeEnum.PRINT]?: Breakpoint, [BreakpointMatchTypeEnum.SCREEN]?: Breakpoint, [BreakpointMatchTypeEnum.ALL]?: never }
  | Breakpoint

/**
 * Better breakpoints options
 *
 */
export type BetterBreakpointsOptions = {
  [key in BreakpointEnum | string]: BreakpointOption;
}
