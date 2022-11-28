import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormLabel, Icon } from '@chakra-ui/react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_orange.css';
import { MdDateRange } from 'react-icons/md';

import { getCurrentDate } from 'redux/products/productsSlice';
import { getDate } from 'redux/dailyRate/dailyRateSlice';

import css from './DiaryDateCalendar.module.css';

export default function DiaryDateCalendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  // const formatDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  //   .toISOString()
  //   .substring(0, 10);

  useEffect(() => {
    const formatDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .substring(0, 10);

    dispatch(getCurrentDate(formatDate));
    dispatch(getDate(formatDate));
  }, [date, dispatch]);

  return (
    <FormLabel
      display="flex"
      alignItems="center"
      maxW={{ xs: '156px', md: '260px', lg: '280px' }}
      fontSize={{ xs: '18px', md: '34px' }}
      lineHeight={{ xs: '21px', md: '41px' }}
      color="#212121"
      cursor="pointer"
    >
      <Flatpickr
        options={{ dateFormat: 'd.m.Y', disableMobile: true }}
        className={css.field}
        value={date}
        onChange={([e]) => {
          setDate(e);
        }}
      />
      <Icon
        marginLeft={{
          xs: '-20px',
          md: '-20px',
          lg: '-37px',
        }}
        w="20px"
        h="20px"
        color="#9b9faa"
        as={MdDateRange}
      />
    </FormLabel>
  );
}
