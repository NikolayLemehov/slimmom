import {
  Box,
  Divider,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import MainButton from 'components/Button/MainButton';
import { useState } from 'react';

const ModalWindow = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MainButton
        text="Start losing weight"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        {overlay}
        <ModalContent>
          <Box w="409px" mx="auto">
            <ModalHeader fontSize="26px" textAlign="center">
              Your recommended daily calorie intake is
            </ModalHeader>
          </Box>

          <ModalCloseButton size="sm" />
          <ModalBody>
            <Box display="flex" justifyContent="center">
              <Text
                as="b"
                fontSize="48px"
                display="flex"
                alignItems="baseline"
                justifyContent="center"
                color="#264061"
              >
                2800
                <Text fontSize="24px" ml="1">
                  kcal
                </Text>
              </Text>
            </Box>

            <Divider w="330px" mx="auto" />
            <Text as={'h3'} color="#212121" textAlign="center" mt="12px">
              Foods you should not eat
            </Text>
          </ModalBody>
          <OrderedList mx="auto">
            <ListItem color="#9B9FAA">Product item</ListItem>
          </OrderedList>
          <ModalFooter display="flex" justifyContent="center">
            <MainButton text="Start losing weight" onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
