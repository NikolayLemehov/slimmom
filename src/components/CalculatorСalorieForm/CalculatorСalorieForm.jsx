import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import InputField from 'components/InputField/InputField';
import MainButton from 'components/Button/MainButton';

import { Form, Title } from './CalculatorСalorieForm.styled';

export default function CalculatorСalorieForm() {
  const handlerEvent = e => {
    console.log(e);
  };

  return (
    <>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form>
        <Box display="flex" gap="32px">
          <Box display="flex" flexDirection="column" gap="10px">
            <InputField
              labelName="Height *"
              type="number"
              name="height"
              handlerEvent={handlerEvent}
              required
              width="240px"
            />
            <InputField
              labelName="Age *"
              type="number"
              name="age"
              handlerEvent={handlerEvent}
              required
              width="240px"
            />
            <InputField
              labelName="Current weight *"
              type="number"
              name="currentWeight"
              handlerEvent={handlerEvent}
              required
              width="240px"
            />
          </Box>
          <Box display="flex" flexDirection="column" gap="10px">
            <InputField
              labelName="Desired weight *"
              type="number"
              name="desiredWeight *"
              handlerEvent={handlerEvent}
              required
              width="240px"
            />
            <InputField
              labelName="Blood type *"
              type="number"
              name="bloodType"
              value="1"
              handlerEvent={handlerEvent}
              required
              width="240px"
              disable
            />
            <RadioGroup onChange={handlerEvent} name="bloodType">
              <Stack direction="row" spacing={10}>
                <Radio value="1" w="20px" size="lg" defaultChecked>
                  1
                </Radio>
                <Radio value="2" w="20px" size="lg">
                  2
                </Radio>
                <Radio value="3" w="20px" size="lg">
                  3
                </Radio>
                <Radio value="4" w="20px" size="lg">
                  4
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <MainButton type="submit" text="Start losing weight" />
      </Form>
    </>
  );
}
