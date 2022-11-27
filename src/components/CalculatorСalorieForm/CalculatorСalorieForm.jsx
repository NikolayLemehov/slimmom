import { Box } from '@chakra-ui/react';
import InputField from 'components/InputField/InputField';

import MainButton from 'components/Button/MainButton';

import {
  Form,
  Title,
  NameLabel,
  RadioInput,
  RadioValue,
  RadioLabel,
  CheckedBox,
} from './CalculatorСalorieForm.styled';
import CalculatorFormError from './CalculatorFormValidation/CalculatorFormError';
import CalculatorFormValidation from './CalculatorFormValidation/CalculatorFormValidation';

export default function CalculatorСalorieForm({
  handleSubmit,
  handleChange,
  handleInputBlur,
  renderAlert,
  showValidationInput,
  blurOnInput,
  dataUser,
  bloodTypeUser,
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
            <Box>
              <NameLabel>Blood type *</NameLabel>
              <Box display="flex" gap={{ xs: '24px', md: '28px' }}>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="bloodTypeUser"
                    value="1"
                    checked={bloodTypeUser === 1}
                    onChange={handleChange}
                  />

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="20px"
                    h="20px"
                    background="#FFFFFF"
                    border="1px solid #E0E0E0"
                    borderRadius="50%"
                  >
                    <CheckedBox />
                  </Box>
                  <RadioValue>1</RadioValue>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="bloodTypeUser"
                    value="2"
                    onChange={handleChange}
                    checked={bloodTypeUser === 2}
                  />

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="20px"
                    h="20px"
                    background="#FFFFFF"
                    border="1px solid #E0E0E0"
                    borderRadius="50%"
                  >
                    <CheckedBox />
                  </Box>
                  <RadioValue>2</RadioValue>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="bloodTypeUser"
                    value="3"
                    onChange={handleChange}
                    checked={bloodTypeUser === 3}
                  />

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="20px"
                    h="20px"
                    background="#FFFFFF"
                    border="1px solid #E0E0E0"
                    borderRadius="50%"
                  >
                    <CheckedBox />
                  </Box>
                  <RadioValue>3</RadioValue>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="bloodTypeUser"
                    value="4"
                    onChange={handleChange}
                    checked={bloodTypeUser === 4}
                  />

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="20px"
                    h="20px"
                    background="#FFFFFF"
                    border="1px solid #E0E0E0"
                    borderRadius="50%"
                  >
                    <CheckedBox />
                  </Box>
                  <RadioValue>4</RadioValue>
                </RadioLabel>
              </Box>
            </Box>
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
