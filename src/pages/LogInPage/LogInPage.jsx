import {Field, Form, Formik} from "formik";
import {
  Box,
  Button,
  Flex, FormControl,
  Heading,
  VStack
} from "@chakra-ui/react";
import InputField from "../../components/InputField/InputField";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import {customColors} from "../../theme/colors";
import {BgImg} from "./LogIn.styled";
import * as Yup from 'yup';
import {noop} from "../../utils/noop";
import {authSelectors} from "../../redux/auth/authSelectors";
import DiaryFormValidation from "../../components/DiaryAddProductForm/DiaryFormValidation/DiaryFormValidation";

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
});

export default function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginLoading = useSelector(authSelectors.loginLoading);
  const onSubmit = (values) => {
    dispatch(authOperations.logIn(values))
  }

  return (
    <>
      <BgImg/>
      <Flex
        w={{xs: '100%', md: 'auto'}}
        justify="flex-start"
        alignItems={{xs: 'flex-start', lg: 'center'}}
        flexGrow='1'
        pt={{xs: '38px', md: '150px'}}
        pb={{xs: '50px', lg: '25px'}}
      >
        <Box
          flexGrow='1'
        >
          <Heading
            as='h1' size='xs'
            mb={{xs: '50px', md: '34px'}}
            w={{xs: '100%', md: 'auto'}}
            textAlign={{xs: 'center', md: 'left'}}
            color={customColors.sun["100"]}
            textTransform='uppercase'
          >Sign In</Heading>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LogInSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <VStack spacing={7} align="flex-start" mb={{xs: '60px', lg: '60px'}}>
                  <Field name='email'>
                    {({field, form}) => (
                      <Box w={{xs: '100%', md: '240px'}}>
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <InputField
                            // autoComplete="off"
                            labelName="Email&nbsp;*"
                            type="text"
                            name="email"
                            handlerEvent={noop}
                            required
                            width='100%'
                            {...field}
                          />
                          <DiaryFormValidation text={form.errors.email}/>
                        </FormControl>
                      </Box>
                    )}
                  </Field>
                  <Field name='password'>
                    {({field, form}) => (
                      <Box w={{xs: '100%', md: '240px'}}>
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                          <InputField
                            // autoComplete="off"
                            labelName="Password&nbsp;*"
                            type="password"
                            name="password"
                            handlerEvent={noop}
                            required
                            width='100%'
                            {...field}
                          />
                          <DiaryFormValidation text={form.errors.password}/>
                        </FormControl>
                      </Box>
                    )}
                  </Field>
                </VStack>
                <Flex
                  gap={6}
                  flexDirection={{xs: 'column', md: 'row'}}
                  alignItems={{xs: 'center'}}
                >
                  <Button variant={'primary'} type="submit" isLoading={loginLoading}>Login</Button>
                  <Button variant={'outline'} type="button" onClick={() => navigate('/registration')}>Register</Button>
                </Flex>

              </Form>
            )}
          </Formik>

        </Box>
      </Flex>
    </>
  );
}
