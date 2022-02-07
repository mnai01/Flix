import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'blue' }));

export default customTheme;
