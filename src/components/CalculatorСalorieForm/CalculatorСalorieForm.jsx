import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import InputField from 'components/InputField/InputField';

import MainButton from 'components/Button/MainButton';

import { Form, Title, NameLabel } from './CalculatorСalorieForm.styled';
import CalculatorFormError from './CalculatorFormValidation/CalculatorFormError';

export default function CalculatorСalorieForm({
  handleSubmit,
  handleChange,
  handleRadio,
  renderAlert,
}) {
  return (
    <>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          gap={{ md: '32px' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          width={{ xs: '100%' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            minWidth={{ xs: '100%', md: '240px' }}
          >
            <InputField
              labelName="Height *"
              type="number"
              name="heightUser"
              handlerEvent={handleChange}
              width="100%"
              // required
              // min="50"
              // max="220"
              // title="The height must be between 50cm and 220cm."
            />
            <InputField
              labelName="Age *"
              type="number"
              name="ageUser"
              handlerEvent={handleChange}
              width="100%"
              // required
              // min="6"
              // max="120"
              // title="The age should be between 6 years and 120 years."
            />
            <InputField
              labelName="Current weight *"
              type="number"
              name="currentWeightUser"
              handlerEvent={handleChange}
              width="100%"
              // required
              // min="10"
              // max="150"
              // title="The current weight should be between 10kg and 150kg."
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            minWidth={{ xs: '100%', md: '240px' }}
          >
            <InputField
              labelName="Desired weight *"
              type="number"
              name="desiredWeightUser"
              handlerEvent={handleChange}
              width="100%"
              // required
              // min="10"
              // max="150"
              // title="The desired weight should be between 10kg and 150kg."
            />
            <NameLabel>Blood type *</NameLabel>
            <RadioGroup
              onChange={handleRadio}
              name="bloodTypeUser"
              defaultValue="1"
            >
              <Stack direction="row" spacing={10}>
                <Radio value="1" w="20px" size="lg" colorScheme="orange">
                  1
                </Radio>
                <Radio value="2" w="20px" size="lg" colorScheme="orange">
                  2
                </Radio>
                <Radio value="3" w="20px" size="lg" colorScheme="orange">
                  3
                </Radio>
                <Radio value="4" w="20px" size="lg" colorScheme="orange">
                  4
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box position="relative">
          <MainButton type="submit" text="Start losing weight" />
          {renderAlert && <CalculatorFormError />}
        </Box>
      </Form>
    </>
  );
}
