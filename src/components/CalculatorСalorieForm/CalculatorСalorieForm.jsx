import InputField from 'components/InputField/InputField';

import { Form } from './CalculatorСalorieForm.styled';

export default function CalculatorСalorieForm() {
  const handlerEvent = e => {
    console.log(e.target.value);
  };

  return (
    <>
      <Form>
        <InputField
          labelName="Height *"
          type="number"
          name="height"
          handlerEvent={handlerEvent}
          required
          width="240px"
        />
      </Form>
    </>
  );
}
