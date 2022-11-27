import {Field, Form, Formik} from "formik";
import {
  Box,
  Button,
  Flex, FormControl,
  Heading,
  VStack
} from "@chakra-ui/react";
import InputField from "../../components/InputField/InputField";
import authOperations from "../../redux/auth/authOperations";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BgImg} from "./Registration.styled";
import {customColors} from "../../theme/colors";
import * as Yup from "yup";
import {authSelectors} from "../../redux/auth/authSelectors";
import {noop} from "../../utils/noop";
import DiaryFormValidation from "../../components/DiaryAddProductForm/DiaryFormValidation/DiaryFormValidation";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
});

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrationLoading = useSelector(authSelectors.registrationLoading);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  }
  const onSubmit = (values) => {
    const {email, password, name} = values;
    dispatch(authOperations.register({email, password, username: name}))
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
            as='h1' size='xs' mb='34px'
            w={{xs: '100%', md: 'auto'}}
            textAlign={{xs: 'center', md: 'left'}}
            color={customColors.sun["100"]}
            textTransform='uppercase'
          >Registration</Heading>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {() => (
              <Form>
                <VStack spacing={7} align="flex-start" mb={{xs: '60px', lg: '60px'}}>

                  <Field name="name">{({field, form}) => (
                    <Box w={{xs: '100%', md: '240px'}}>
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <InputField
                          labelName="Name *"
                          type="text"
                          name="name"
                          handlerEvent={noop}
                          // value={formik.values.name}
                          required
                          width="100%"
                          {...field}
                        />
                        <DiaryFormValidation text={form.errors.email}/>
                      </FormControl>
                    </Box>
                  )}
                  </Field>

                  <Field name="email">{({field, form}) => (
                    <Box w={{xs: '100%', md: '240px'}}>
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <InputField
                          labelName="Email *"
                          type="text"
                          name="email"
                          handlerEvent={noop}
                          // value={formik.values.email}
                          required
                          width="100%"
                          {...field}
                        />
                        <DiaryFormValidation text={form.errors.email}/>
                      </FormControl>
                    </Box>
                  )}
                  </Field>
                  <Field name="password">{({field, form}) => (
                    <Box w={{xs: '100%', md: '240px'}}>
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <InputField
                          labelName="Password *"
                          type="password"
                          name="password"
                          handlerEvent={noop}
                          // value={formik.values.password}
                          required
                          width="100%"
                          {...field}
                        />
                        <DiaryFormValidation text={form.errors.email}/>
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
                  <Button variant={'outline'} type="button" onClick={() => navigate('/login')}>Login</Button>
                  <Button variant={'primary'} type="submit" isLoading={registrationLoading}>Register</Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
