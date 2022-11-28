import React from 'react';
import { Text } from '@chakra-ui/react';
import { Item } from './DiaryProductItem.styled';

// VscChromeClose

export default function DiaryProductItem({ product, grams, kcal, children }) {
  return (
    <Item>
      <Text
        as="span"
        display="block"
        w={{ xs: '130px', md: '240px', lg: '240px' }}
        paddingBottom={{ xs: '8px', md: '20px' }}
        borderBottom="1px solid #E0E0E0"
        marginRight={{ xs: '8px', md: '22px', lg: '48px' }}
      >
        {product}
      </Text>
      <Text
        as="span"
        display="block"
        w={{ xs: '49px', md: '106px' }}
        paddingBottom={{ xs: '8px', md: '20px' }}
        borderBottom="1px solid #E0E0E0"
        marginRight={{ xs: '8px', md: '46px', lg: '32px' }}
        textAlign="right"
        height="inherit"
      >
        {grams} g
      </Text>
      <Text
        as="span"
        w={{ xs: '65px', md: '106px' }}
        paddingBottom={{ xs: '8px', md: '20px' }}
        borderBottom="1px solid #E0E0E0"
        marginRight={{ xs: '17px', md: '32px' }}
        textAlign="right"
      >
        {kcal}{' '}
        <Text as="span" fontSize={{ xs: '10px', md: '14px' }}>
          kcal
        </Text>{' '}
      </Text>
      {children}
    </Item>
  );
}
