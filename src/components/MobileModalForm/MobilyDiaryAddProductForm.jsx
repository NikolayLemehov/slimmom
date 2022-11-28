import { Box, Button } from '@chakra-ui/react';
import {
  Modal,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import FormAddProduct from 'components/DiaryAddProductForm/FormAddProduct/FormAddProduct';

import Header from 'components/Header/Header';

const ModalWindow = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ xs: 'full', md: '2xl' }}
      >
        <ModalContent>
          <Header onClick={onClose} />
          <ModalBody>
            <Box pt="200px">
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
