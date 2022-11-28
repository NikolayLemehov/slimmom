import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import css from '../DiaryAddProductForm.module.css';

export default function DiaryFormError() {
  return (
    <Alert
      status="error"
      className={css.alert_box}
      position="absolute"
      top={{ xs: '111px', md: '0px' }}
      left={{ xs: '0px', md: '520px', lg: '510px' }}
      display="flex"
      flexDirection="column"
      gap="4px"
      w={{ md: '100px', lg: '120px' }}
      p={{ md: '5px', lg: '7px' }}
      fontSize={{ xs: '6px', md: '8px', lg: '10px' }}
      background="#ffffff"
      rounded="10px"
      boxShadow="0px 4px 10px rgba(252, 132, 45, 0.5)"
    >
      <div className={css.alert_title}>
        <AlertIcon m="0" />
        <AlertTitle lineHeight={{ xs: '5px', md: '10px' }} m="0">
          Input fields are empty!
        </AlertTitle>
      </div>

      <AlertDescription
        lineHeight={{ xs: '5px', md: '10px' }}
        fontSize="6px"
        textAlign="center"
      >
        Enter your details and try again.
      </AlertDescription>
    </Alert>
  );
}
