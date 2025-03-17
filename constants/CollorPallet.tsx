export const COLORS={
    darkGray:'#bdc3c7',
    orange:'#d35400',
    light:'#FFF'
} as const;

export type ColorTypes = keyof typeof COLORS;