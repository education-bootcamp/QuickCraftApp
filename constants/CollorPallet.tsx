export const COLORS={
    darkGray:'#bdc3c7',
    gray:'#ecf0f1',
    orange:'#d35400',
    light:'#FFF',
    blue:'#3498db',
    primary:'#2c3e50'
} as const;

export type ColorTypes = keyof typeof COLORS;