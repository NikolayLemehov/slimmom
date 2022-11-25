import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormControl, Box } from '@chakra-ui/react';

import DiaryAddFormValidation from './DiaryAddFormValidation';
import DiaryAddFormError from './DiaryAddFormError';
import InputField from 'components/InputField/InputField';
import AddButton from 'components/Button/AddButton';

import { selectProduct, addProduct } from 'redux/products/productsOperations';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [productInputDirty, setProductInputDirty] = useState(false);
  const [gramsInputDirty, setGramsInputDirty] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const inputDirty = productInputDirty || gramsInputDirty;

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'product') {
      setProduct(value);
      setProductInputDirty(false);
      setSubmitError(false);
      dispatch(selectProduct(value));
    }

    if (name === 'product' && value === '') {
      setProductInputDirty(true);
    }

    if (name === 'grams') {
      setGrams(value);
      setSubmitError(false);
      setGramsInputDirty(false);
    }

    if (name === 'grams' && value === '') {
      setGramsInputDirty(true);
    }
  };

  const handleInputBlur = e => {
    setProductInputDirty(false);

    setGramsInputDirty(false);
  };

  const handleFromSubmit = e => {
    e.preventDefault();

    if (product === '' || grams === '') {
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 3500);
      return;
    }
    // dispatch(addProduct(product));
  };

  const handleClick = e => {
    // setSubmitError(false);
    console.log(e);
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <FormControl
        display={{ xs: 'none', md: 'flex' }}
        alignItems="center"
        gap={{ md: '22px', lg: '48px' }}
        isInvalid={inputDirty}
      >
        <Box w="240px">
          <InputField
            labelName="Enter product name"
            width="100%"
            handlerEvent={handleInputChange}
            name="product"
            value={product}
            onBlur={handleInputBlur}
          />
          {productInputDirty && (
            <DiaryAddFormValidation text="*Please, enter the product name" />
          )}
        </Box>
        <Box w={{ md: '106px', lg: '107px' }} position="relative">
          <InputField
            labelName="Grams"
            width="100%"
            handlerEvent={handleInputChange}
            right={0}
            name="grams"
            value={grams}
            onBlur={handleInputBlur}
          />
          {gramsInputDirty && (
            <DiaryAddFormValidation text="*Please, enter the product weight" />
          )}
        </Box>

        <AddButton type="submit" onClick={handleClick} />
        {submitError && <DiaryAddFormError />}
      </FormControl>
    </form>
  );
}
