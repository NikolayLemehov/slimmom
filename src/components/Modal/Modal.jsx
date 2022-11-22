import {
  Box,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import MainButton from 'components/Button/Button';

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MainButton text="Start losing weight" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <Box w="409px" mx="auto">
            <ModalHeader fontSize="26px" textAlign="center">
              Your recommended daily calorie intake is
            </ModalHeader>
          </Box>

          <ModalCloseButton size="sm" />
          <ModalBody>
            <Text
              as="b"
              fontSize="48px"
              display="flex"
              alignItems="baseline"
              justifyContent="center"
              color="#264061"
            >
              2800<Text fontSize="24px">kcal</Text>
            </Text>
            <Divider w="330px" mx="auto" />
            <Text color="#212121" textAlign="center" mt="12px">
              Foods you should not eat
            </Text>
            <Box>
              <Text color="#9B9FAA" textAlign="center">
                1.Product item
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <MainButton text="Start losing weight" onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
