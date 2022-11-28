import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

export default function Loader({ height = '40', width = '40', ...otherProps }) {
  return (
    <Flex justifyContent="center" marginTop="80px">
      <Spinner
        height={height}
        width={width}
        color="#FC842D"
        aria-label="loading"
        {...otherProps}
      />
    </Flex>
  );
}
