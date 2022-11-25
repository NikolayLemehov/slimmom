import React from 'react';
import { Spinner } from '@chakra-ui/react';

export default function Loader({ height = '40', width = '40', ...otherProps }) {
  return (
    <Spinner
      height={height}
      width={width}
      color="#FC842D"
      aria-label="loading"
      {...otherProps}
    />
  );
}
