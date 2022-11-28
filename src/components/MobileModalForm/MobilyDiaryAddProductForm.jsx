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

import { useNavigate } from 'react-router-dom/dist';
import Header from 'components/Header/Header';
import GrayBar from 'components/GrayBar/GrayBar';
import Loader from 'components/Loader/Loader';

const ModalWindow = ({ isOpen, onClose }) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/registration');
  // };
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
          {/* {isOpen && <GrayBar onClick={onClose} />} */}
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

// export default function MobileModalForm() {
//   return (

// <Box pt="120px">
//   <FormAddProduct
//     display="flex"
//     gap={{ xs: '12px' }}
//     productFieldW={{ xs: '100%' }}
//     gramsFieldW={{ xs: '100%' }}
//     flexDirection="column"
//     mb="30px"
//     w="100%"
//   >
//     <Button type="submit" variant="primary" margin="60px auto 0">
//       Add
//     </Button>
//   </FormAddProduct>
// </Box>
//   );
// }
