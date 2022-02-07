import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

export const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: 'flix-io',
};
const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
});
export const customTheme = extendTheme(breakpoints, config, withDefaultColorScheme({ colorScheme: 'blue' }));

export default customTheme;
