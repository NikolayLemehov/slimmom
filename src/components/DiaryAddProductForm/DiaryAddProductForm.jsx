import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormControl, Box } from '@chakra-ui/react';

import DiaryFormError from './DiaryFormValidation/DiaryFormError';
import DiaryFormValidation from './DiaryFormValidation/DiaryFormValidation';
import InputField from 'components/InputField/InputField';
import AddButton from 'components/Button/AddButton';
import DiarySelectProduct from 'components/DiarySelectProduct/DiarySelectProduct';

import { selectProduct, addProduct } from 'redux/products/productsOperations';
import {
  selectProductOfList,
  selectCurrentDate,
} from 'redux/products/productsSelectors';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();
  const searchProduct = useSelector(selectProductOfList);
  const currentDate = useSelector(selectCurrentDate);

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [productInputDirty, setProductInputDirty] = useState(false);
  const [gramsInputDirty, setGramsInputDirty] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const inputDirty = productInputDirty || gramsInputDirty;

  const handleProductItemClick = e => {
    const { textContent } = e.target;
    setProduct(textContent);
    dispatch(selectProduct(textContent));
    setIsSelectOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'product') {
      setProduct(value);
      setProductInputDirty(false);
      setSubmitError(false);
      dispatch(selectProduct(value));
    }

    if (name === 'product' && value === '') {
      setProductInputDirty(true);
      setIsSelectOpen(false);
    }

    if (name === 'product' && value !== '') {
      setIsSelectOpen(true);
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

  // const handleInputClick = () => {
  //   setIsSelectOpen(true);

  //   if(product === '') {
  //     setIsSelectOpen(false)
  //   }
  // };

  const handleFromSubmit = e => {
    e.preventDefault();

    if (product === '' || grams === '') {
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 3500);
      return;
    }

    if (searchProduct.length > 0) {
      const requestBody = {
        date: currentDate,
        productId: searchProduct[0]._id,
        weight: grams,
      };
      dispatch(addProduct(requestBody));
      setProduct('');
      setGrams('');
    }
  };

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      <form onSubmit={handleFromSubmit}>
        <FormControl
          display={{ xs: 'none', md: 'flex' }}
          alignItems="center"
          gap={{ md: '22px', lg: '48px' }}
          isInvalid={inputDirty}
        >
          <Box w={{ md: '240px' }} fontSize="14px">
            <InputField
              labelName="Enter product name"
              width="100%"
              handlerEvent={handleInputChange}
              name="product"
              value={product}
              onBlur={handleInputBlur}
              // onClick={handleInputClick}
            />
            {productInputDirty && (
              <DiaryFormValidation text="*Please, enter the product name" />
            )}
            {searchProduct.length > 0 && isSelectOpen && (
              <DiarySelectProduct
                data={searchProduct}
                onClick={handleProductItemClick}
              />
            )}
          </Box>

          <Box
            w={{ md: '106px', lg: '107px' }}
            fontSize="14px"
            position="relative"
          >
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
              <DiaryFormValidation text="*Please, enter the product weight" />
            )}
          </Box>

          <AddButton type="submit" />
          {submitError && <DiaryFormError />}
        </FormControl>
      </form>
    </Box>
  );
}
