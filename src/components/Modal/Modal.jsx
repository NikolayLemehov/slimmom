import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import MainButton from 'components/Button/Button';

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MainButton text="open" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <MainButton text="Start losing weight" onClick={onClose} />
          <ModalFooter display="flex" justifyContent="center"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
