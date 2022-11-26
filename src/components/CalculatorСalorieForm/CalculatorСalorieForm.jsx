import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import InputField from 'components/InputField/InputField';

import MainButton from 'components/Button/MainButton';

import { Form, Title, NameLabel } from './CalculatorСalorieForm.styled';
import CalculatorFormError from './CalculatorFormValidation/CalculatorFormError';
import CalculatorFormValidation from './CalculatorFormValidation/CalculatorFormValidation';

export default function CalculatorСalorieForm({
  handleSubmit,
  handleChange,
  handleInputBlur,
  handleRadio,
  renderAlert,
  showValidationInput,
  blurOnInput,
  dataUser,
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
            pb={{ xs: '10px', md: '0px' }}
          >
            <Box position="relative">
              <InputField
                labelName="Height *"
                type="number"
                name="heightUser"
                handlerEvent={handleChange}
                onBlur={handleInputBlur}
                width="100%"
              />
              {blurOnInput &&
                showValidationInput &&
                (dataUser.height === 0 || dataUser.height === null) && (
                  <CalculatorFormValidation text="Please, enter your height" />
                )}

              {showValidationInput &&
                dataUser.height !== 0 &&
                dataUser.height !== null &&
                (dataUser.height < 140 || dataUser.height > 220) && (
                  <CalculatorFormValidation text="The height must be between 140cm and 220cm." />
                )}
            </Box>

            <Box position="relative">
              <InputField
                labelName="Age *"
                type="number"
                name="ageUser"
                handlerEvent={handleChange}
                onBlur={handleInputBlur}
                width="100%"
              />
              {blurOnInput &&
                showValidationInput &&
                (dataUser.age === 0 || dataUser.age === null) && (
                  <CalculatorFormValidation text="Please enter your age" />
                )}

              {showValidationInput &&
                dataUser.age !== 0 &&
                dataUser.age !== null &&
                (dataUser.age < 16 || dataUser.age > 120) && (
                  <CalculatorFormValidation text="The age should be between 16 years and 120 years." />
                )}
            </Box>
            <Box position="relative">
              <InputField
                labelName="Current weight *"
                type="number"
                name="currentWeightUser"
                handlerEvent={handleChange}
                onBlur={handleInputBlur}
                width="100%"
              />
              {blurOnInput &&
                showValidationInput &&
                (dataUser.weight === 0 || dataUser.weight === null) && (
                  <CalculatorFormValidation text="Please enter your current weight" />
                )}

              {showValidationInput &&
                dataUser.weight !== 0 &&
                dataUser.weight !== null &&
                (dataUser.weight < 40 || dataUser.weight > 150) && (
                  <CalculatorFormValidation text="The current weight should be between 40kg and 150kg." />
                )}
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            minWidth={{ xs: '100%', md: '240px' }}
          >
            <Box position="relative">
              <InputField
                labelName="Desired weight *"
                type="number"
                name="desiredWeightUser"
                handlerEvent={handleChange}
                onBlur={handleInputBlur}
                width="100%"
              />
              {blurOnInput &&
                showValidationInput &&
                (dataUser.desiredWeight === 0 ||
                  dataUser.desiredWeight === null) && (
                  <CalculatorFormValidation text="Please enter your desired weight" />
                )}

              {showValidationInput &&
                dataUser.desiredWeight !== 0 &&
                dataUser.desiredWeight !== null &&
                (dataUser.desiredWeight < 40 ||
                  dataUser.desiredWeight > 150) && (
                  <CalculatorFormValidation text="The desired weight should be between 40kg and 150kg." />
                )}
            </Box>
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
