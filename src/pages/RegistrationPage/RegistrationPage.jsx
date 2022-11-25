import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  Heading, HStack,
  VStack
} from "@chakra-ui/react";
import InputField from "../../components/InputField/InputField";
import authOperations from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BgImg} from "./Registration.styled";

export function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const {email, password, name} = values;
      dispatch(authOperations.register({email, password, username: name}))
      console.log(values)
    }
  });
  return (
    <>
      <BgImg/>
    <Flex align="center" justify="flex-start" h="max-content">
      <Box bg="white" p={6} rounded="md">
        <Heading>Registration</Heading>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <InputField
              labelName="Name *"
              type="text"
              name="name"
              handlerEvent={formik.handleChange}
              value={formik.values.name}
              required
              width="100%"
            />
            <InputField
              labelName="Email *"
              type="text"
              name="email"
              handlerEvent={formik.handleChange}
              value={formik.values.email}
              required
              width="100%"
            />
            <InputField
              labelName="Password *"
              type="password"
              name="password"
              handlerEvent={formik.handleChange}
              value={formik.values.password}
              required
              width="100%"
            />
            <HStack>
              {/*<MainButton type="submit" text='Login' onClick={() => navigate('/login')}/>*/}
              {/*<MainButton type="button" text='Register' background={'#ffffff'}/>*/}
              <Button variant={'outline'} type="button" onClick={() => navigate('/login')}>Login</Button>
              <Button variant={'primary'} type="submit">Register</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Flex>
    </>
  );
}
