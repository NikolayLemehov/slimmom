import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import css from './CalculatorAddProductForm.module.css';

export default function CalculatorFormError() {
  return (
    <Alert
      status="error"
      className={css.alert_box}
      position="absolute"
      top={{ xs: 'calc(-100% - 30px)', md: 'calc(-100% - 10px)' }}
      left={{ xs: 'calc(100% - 30px)', md: 'calc(100% + 5px)' }}
      display="flex"
      flexDirection="column"
      gap="4px"
      w={{ xs: '100px', lg: '120px' }}
      p={{ xs: '5px', lg: '7px' }}
      fontSize={{ xs: '8px', lg: '10px' }}
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

      <AlertDescription lineHeight="10px" fontSize="8px" textAlign="center">
        Enter your details and try again.
      </AlertDescription>
    </Alert>
  );
}
