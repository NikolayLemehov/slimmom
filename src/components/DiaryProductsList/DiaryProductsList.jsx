import React from 'react';
import { List } from '@chakra-ui/react';
import DiaryProductItem from 'components/DiaryProductItem/DiaryProductItem';

export default function DiaryProductsList() {
  return (
    <List>
      <DiaryProductItem product="Pizza" grams="100" kcal="200" />
    </List>
  );
}
