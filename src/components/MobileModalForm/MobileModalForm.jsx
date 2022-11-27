import React, {useState} from 'react';
import {Box, Button, Flex, FormControl, VStack} from "@chakra-ui/react";
import InputField from "../InputField/InputField";
import DiaryFormValidation from "../DiaryAddProductForm/DiaryFormValidation/DiaryFormValidation";
import DiarySelectProduct from "../DiarySelectProduct/DiarySelectProduct";
import AddButton from "../Button/AddButton";
import DiaryFormError from "../DiaryAddProductForm/DiaryFormValidation/DiaryFormError";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../../redux/products/productsSelectors";
import {selectProduct} from "../../redux/products/productsOperations";
import {Field, Form, Formik} from "formik";
import {noop} from "../../utils/noop";

export default function MobileModalForm(props) {
  // const dispatch = useDispatch();
  // const searchProduct = useSelector(selectProducts);
  //
  // const [product, setProduct] = useState('');
  // const [grams, setGrams] = useState('');
  // const [productInputDirty, setProductInputDirty] = useState(false);
  // const [gramsInputDirty, setGramsInputDirty] = useState(false);
  // const [submitError, setSubmitError] = useState(false);
  // const [isSelectOpen, setIsSelectOpen] = useState(false);
  //
  // const inputDirty = productInputDirty || gramsInputDirty;
  //
  // const handleProductItemClick = e => {
  //   const { textContent } = e.target;
  //   setProduct(textContent);
  //   dispatch(selectProduct(textContent));
  //   setIsSelectOpen(!isSelectOpen);
  // };
  //
  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   if (name === 'product') {
  //     setProduct(value);
  //     setProductInputDirty(false);
  //     setSubmitError(false);
  //     dispatch(selectProduct(value));
  //   }
  //
  //   if (name === 'product' && value === '') {
  //     setProductInputDirty(true);
  //     setIsSelectOpen(false);
  //   }
  //
  //   if (name === 'grams') {
  //     setGrams(value);
  //     setSubmitError(false);
  //     setGramsInputDirty(false);
  //   }
  //
  //   if (name === 'grams' && value === '') {
  //     setGramsInputDirty(true);
  //   }
  // };
  //
  // const handleInputBlur = e => {
  //   setProductInputDirty(false);
  //   setGramsInputDirty(false);
  // };
  //
  // const handleInputClick = () => {
  //   setIsSelectOpen(true);
  // };
  //
  // const handleFromSubmit = e => {
  //   e.preventDefault();
  //
  //   if (product === '' || grams === '') {
  //     setSubmitError(true);
  //     setTimeout(() => {
  //       setSubmitError(false);
  //     }, 3500);
  //     return;
  //   }
  //   // dispatch(addProduct(product));
  // };
  const initialValues = {
    product: '',
    grams: '',
  }
  const onSubmit = (values) => {
    console.log(values)
  }


  return (
    <Box pt='12px'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form
            // onSubmit={handleFromSubmit}
          >
            <VStack>

              <VStack
                // spacing={5}
                alignItems="center"
                gap={{xs: '12px'}}
                mb='30px'
                w='100%'
                // isInvalid={inputDirty}
              >
                <Box w={{xs: '100%'}} fontSize="14px">
                  <Field name="product">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <InputField
                          labelName="Enter product name"
                          width="100%"
                          handlerEvent={noop}
                          // handlerEvent={handleInputChange}
                          name="product"
                          // value={product}
                          // onBlur={handleInputBlur}
                          // onClick={handleInputClick}
                          {...field}
                        />
                        <DiaryFormValidation text={form.errors.email}/>
                      </FormControl>
                    )}
                  </Field>
                  {/*{productInputDirty && (*/}
                  {/*  <DiaryFormValidation text="*Please, enter the product name" />*/}
                  {/*)}*/}
                  {/*{searchProduct.length > 0 && isSelectOpen && (*/}
                  {/*  <DiarySelectProduct*/}
                  {/*    data={searchProduct}*/}
                  {/*    // onClick={handleProductItemClick}*/}
                  {/*  />*/}
                  {/*)}*/}
                </Box>

                <Box w={{xs: '100%'}}>
                  <Field name="grams">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <InputField
                          labelName="Grams"
                          width="100%"
                          handlerEvent={noop}
                          // handlerEvent={handleInputChange}
                          // right={0}
                          name="grams"
                          // value={grams}
                          // onBlur={handleInputBlur}
                          {...field}
                        />
                        <DiaryFormValidation text={form.errors.email}/>
                      </FormControl>
                    )}
                  </Field>
                  {/*{gramsInputDirty && (*/}
                  {/*  <DiaryFormValidation text="*Please, enter the product weight" />*/}
                  {/*)}*/}
                </Box>
              </VStack>

              <Button type="submit" variant='primary' margin='0 auto'>Add</Button>
              {/*{submitError && <DiaryFormError />}*/}
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

