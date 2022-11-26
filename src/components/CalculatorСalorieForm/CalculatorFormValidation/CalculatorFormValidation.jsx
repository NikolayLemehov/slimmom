import { Text } from '@chakra-ui/react';

import React from 'react';

export default function CalculatorFormValidation({ text }) {
  return (
    <Text
      fontSize="8px"
      m="0"
      position="absolute"
      top={{ xs: '48px', md: '63px' }}
      color="red"
    >
      {text}
    </Text>
  );
}
