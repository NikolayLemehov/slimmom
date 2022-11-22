import {extendTheme} from '@chakra-ui/react';
import "@fontsource/noto-sans"
// body { font-family: "Noto Sans", sans-serif; }
import "@fontsource/montserrat"
// body { font-family: "Montserrat", sans-serif; }

const config = {
  initialColorMode: 'light',
};

const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1280px',
};

export const theme = extendTheme({
  config, breakpoints,
  // fonts: {
  //   heading: `'Open Sans', sans-serif`,
  //   body: `'Raleway', sans-serif`,
  // }
});
