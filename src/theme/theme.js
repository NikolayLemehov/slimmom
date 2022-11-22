import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
};

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1280px',
};

export const theme = extendTheme({ config, breakpoints });
