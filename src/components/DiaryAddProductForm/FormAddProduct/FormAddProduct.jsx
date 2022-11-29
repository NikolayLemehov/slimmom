import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormControl, Box } from '@chakra-ui/react';

import InputField from 'components/InputField/InputField';
import DiaryFormError from '../DiaryFormValidation/DiaryFormError';
import DiaryFormValidation from '../DiaryFormValidation/DiaryFormValidation';
import DiarySelectProduct from 'components/DiarySelectProduct/DiarySelectProduct';

import { selectProduct, addProduct } from 'redux/products/productsOperations';
import {
  selectProductOfList,
  selectCurrentDate,
} from 'redux/products/productsSelectors';
import {useDebounce} from "../../../hooks/useDebounce";

export default function FormAddProduct({
  display,
  gap,
  productFieldW,
  gramsFieldW,
  retreat,
  children,
  ...otherProps
}) {
  const dispatch = useDispatch();
  const searchProduct = useSelector(selectProductOfList);
  const currentDate = useSelector(selectCurrentDate);

  const [product, setProduct] = useState('');
  const debouncedProduct = useDebounce(product, 1000)
  const [grams, setGrams] = useState('');
  const [productInputDirty, setProductInputDirty] = useState(false);
  const [gramsInputDirty, setGramsInputDirty] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const inputDirty = productInputDirty || gramsInputDirty;

  useEffect(() => {
    dispatch(selectProduct(debouncedProduct));
  }, [dispatch, debouncedProduct])

  const handleProductItemClick = e => {
    const { textContent } = e.target;
    setProduct(textContent);
    // dispatch(selectProduct(textContent));
    setIsSelectOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'product') {
      setProduct(value);
      setProductInputDirty(false);
      setSubmitError(false);
      // dispatch(selectProduct(value));
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

  const handleInputBlur = () => {
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
    <form onSubmit={handleFromSubmit}>
      <FormControl
        display={display}
        alignItems="center"
        gap={gap}
        isInvalid={inputDirty}
        {...otherProps}
      >
        <Box w={productFieldW} fontSize="14px">
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

        <Box w={gramsFieldW} fontSize="14px" position="relative">
          <InputField
            labelName="Grams"
            width="100%"
            handlerEvent={handleInputChange}
            right={retreat}
            name="grams"
            value={grams}
            onBlur={handleInputBlur}
          />
          {gramsInputDirty && (
            <DiaryFormValidation text="*Please, enter the product weight" />
          )}
        </Box>

        {children}
        {submitError && <DiaryFormError />}
      </FormControl>
    </form>
  );
}
