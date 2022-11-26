import { FormErrorMessage } from '@chakra-ui/react';

import React from 'react';

export default function CalculatorFormValidation({ text }) {
  return (
    <FormErrorMessage fontSize="8px" m="0" position="absolute" top="70px">
      {text}
    </FormErrorMessage>
  );
}
