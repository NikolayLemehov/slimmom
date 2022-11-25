import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import css from './DiaryAddProductForm.module.css';

export default function DiaryAddFormError() {
  return (
    <Alert
      status="error"
      className={css.alert_box}
      position="absolute"
      top="0px"
      left="510px"
      display="flex"
      flexDirection="column"
      gap="4px"
      w="100px"
      p="5px"
      fontSize="8px"
      background="#ffffff"
      rounded="10px"
      boxShadow="0px 4px 10px rgba(252, 132, 45, 0.5)"
    >
      <div className={css.alert_title}>
        <AlertIcon m="0" />
        <AlertTitle lineHeight="10px" m="0">
          Input fields are empty!
        </AlertTitle>
      </div>

      <AlertDescription lineHeight="10px" fontSize="6px" textAlign="center">
        Enter your details and try again.
      </AlertDescription>
    </Alert>
  );
}
