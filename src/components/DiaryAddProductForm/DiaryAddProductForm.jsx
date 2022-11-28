import { Box } from '@chakra-ui/react';

import AddButton from 'components/Button/AddButton';
import FormAddProduct from './FormAddProduct/FormAddProduct';

export default function DiaryAddProductForm() {
  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      <FormAddProduct
        display={{ xs: 'none', md: 'flex' }}
        gap={{ md: '22px', lg: '48px' }}
        productFieldW={{ md: '240px' }}
        gramsFieldW={{ md: '106px', lg: '107px' }}
        retreat={0}
      >
        <AddButton type="submit" />
      </FormAddProduct>
    </Box>
  );
}
