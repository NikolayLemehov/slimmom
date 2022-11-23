import { useState } from 'react';
import {
  Box,
  Divider,
  Icon,
  Link,
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
import { IoReturnDownBackSharp } from 'react-icons/io5';
import LogoSmall from 'components/Logo/SmallLogo';
import { NavLink } from 'react-router-dom';

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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ xs: 'full', sm: '2xl' }}
      >
        {overlay}
        <ModalContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
          >
            <LogoSmall />
            <Box display={{ sm: 'none' }}>
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/login"
                mr="16px"
              >
                SIGIN IN
              </Link>
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/registration"
              >
                REGISTRATION
              </Link>
            </Box>
          </Box>
          <Box display={{ sm: 'none' }}>
            <Box
              bgColor="#EFF1F3"
              w="100%"
              h="40px"
              display={{ xs: 'flex', sm: 'none' }}
            >
              <Icon
                as={IoReturnDownBackSharp}
                ml="20px"
                mt="12px"
                boxSize="5"
              />
            </Box>
          </Box>
          <Box maxW="409px" mx="auto">
            <ModalHeader fontSize="26px" textAlign="center">
              Your recommended daily calorie intake is
            </ModalHeader>
          </Box>

          <ModalCloseButton size="sm" display={{ xs: 'none', sm: 'block' }} />
          <ModalBody h="100%">
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
            <Text
              as={'h3'}
              color="#212121"
              textAlign="center"
              mt="12px"
              mb="20px"
            >
              Foods you should not eat
            </Text>
            <OrderedList mx="auto" display="flex" justifyContent="center">
              <ListItem color="#9B9FAA">Product item</ListItem>
            </OrderedList>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center" mb="120px">
            <MainButton text="Start losing weight" onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
