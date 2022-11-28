import { Button } from '@chakra-ui/react';
import { VscChromeClose } from 'react-icons/vsc';

export default function DeleteButton({ onClick }) {
  return (
    <Button
      type="button"
      display="flex"
      justifyContent="center"
      marginRight={{ md: '40px' }}
      background="transparent"
      color="rgba(155, 159, 170, 1)"
      p="10px"
      marginBottom="10px"
      width="25px"
      height="25px"
      _hover={{
        color: '#FC842D',
      }}
      onClick={onClick}
    >
      <VscChromeClose width="12px" height="12px" />
    </Button>
  );
}
