import React from 'react';
import { List } from '@chakra-ui/react';
import DiaryProductItem from 'components/DiaryProductItem/DiaryProductItem';

export default function DiaryProductsList() {
  return (
    <List marginBottom={{ xs: '60px', md: '55px' }}>
      <DiaryProductItem product="Pizza" grams="100" kcal="200" />
    </List>
  );
}
