import {useFormik} from "formik";
import {
  Box,
  Button,
  Flex,
  Heading, HStack,
  VStack
} from "@chakra-ui/react";
import InputField from "../../components/InputField/InputField";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import {customColors} from "../../theme/colors";

export function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authOperations.logIn(values))
    }
  });
  return (
    <Flex direction='column' justify="flex-start" alignItems='flex-start' h="max-content" height='100%' flexGrow='1'>
      <Box bg="white" py='98px'>
        <Heading as='h1' size='xs' mb='34px' style={{textTransform: 'uppercase', color: customColors.sun["100"]}}>Sign
          In</Heading>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <VStack spacing='50px' align="flex-start">
            <VStack spacing={5} align="flex-start">
              <InputField
                autoComplete="off"
                labelName="Email *"
                type="text"
                name="email"
                handlerEvent={formik.handleChange}
                value={formik.values.email}
                required
                width="240px"
              />
              <InputField
                autoComplete="off"
                labelName="Password *"
                type="password"
                name="password"
                handlerEvent={formik.handleChange}
                value={formik.values.password}
                required
                width="240px"
              />
            </VStack>
            <HStack>
              <Button variant={'primary'} type="submit">Login</Button>
              <Button variant={'outline'} type="button" onClick={() => navigate('/registration')}>Register</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
