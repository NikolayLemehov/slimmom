import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormControl, Box } from '@chakra-ui/react';
import InputField from 'components/InputField/InputField';
import AddButton from 'components/Button/AddButton';

import { selectProduct, addProduct } from 'redux/products/productsOperations';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'product') {
      setProduct(value);
      dispatch(selectProduct(value));
    }

    if (name === 'grams') {
      setGrams(value);
    }
  };

  const handleFromSubmit = e => {
    e.preventDefault();

    if (product === '' || grams === '') {
      console.log('Fill in the input fields');
      return;
    }

    // dispatch(addProduct(product));
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <FormControl
        display={{ xs: 'none', md: 'flex' }}
        alignItems="center"
        gap={{ md: '22px', lg: '48px' }}
      >
        <Box w="240px">
          <InputField
            labelName="Enter product name"
            width="100%"
            handlerEvent={handleInputChange}
            name="product"
            value={product}
          />
        </Box>
        <Box w={{ md: '106px', lg: '107px' }}>
          <InputField
            labelName="Grams"
            width="100%"
            handlerEvent={handleInputChange}
            right={0}
            name="grams"
            value={grams}
          />
        </Box>
        <AddButton type="submit" />
      </FormControl>
    </form>
  );
}
