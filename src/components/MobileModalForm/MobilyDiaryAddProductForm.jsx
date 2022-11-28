import { Box, Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import FormAddProduct from 'components/DiaryAddProductForm/FormAddProduct/FormAddProduct';

export default function MobileModalForm() {
  return (
    <Box pt="120px">
      <FormAddProduct
        display="flex"
        gap={{ xs: '12px' }}
        productFieldW={{ xs: '100%' }}
        gramsFieldW={{ xs: '100%' }}
        flexDirection="column"
        mb="30px"
        w="100%"
      >
        <Button type="submit" variant="primary" margin="60px auto 0">
          Add
        </Button>
      </FormAddProduct>
    </Box>
  );
}
