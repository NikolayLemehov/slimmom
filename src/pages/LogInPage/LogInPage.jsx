import {Field, Form, Formik} from "formik";
import {
  Box,
  Button,
  Flex, FormControl, FormErrorMessage,
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

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export function LogInPage() {
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
        // pt={{md: '120px'}}
        pb={{lg: '25px'}}
      >
        <Box
          py='98px' flexGrow='1'
        >
          <Heading
            as='h1' size='xs' mb='34px'
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
                <VStack spacing={5} align="flex-start" mb={{xs: '60px', lg: '60px'}}>
                  <Field name='email'>
                    {({field, form}) => {
                      // console.log({field, form})
                      return (
                        <Box w={{xs: '100%', md: '240px'}}>
                          <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <InputField
                              // autoComplete="off"
                              labelName="Email&nbsp;*"
                              type="text"
                              name="email"
                              handlerEvent={noop}
                              // value={formik.values.email}
                              required
                              width='100%'
                              {...field}
                            />
                            <FormErrorMessage colorScheme={'red'}>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                        </Box>
                      )
                    }}
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
                            // value={formik.values.password}
                            required
                            width='100%'
                            {...field}
                          />
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
