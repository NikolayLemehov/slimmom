import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';

import { Wrapper, BgImg } from 'pages/CalculatorPage/CalculatorPage.styled';

// import { BgImg, Wrapper } from './CalculatorPage.styled';
import DiaryDateCalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import AddButton from 'components/Button/AddButton';

import { selectCurrentDate } from 'redux/products/productsSelectors';
import { authSelectors } from 'redux/auth/authSelectors';
import { getInfoForDay } from 'redux/products/productsOperations';

export default function DiaryPage() {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const token = useSelector(authSelectors.accessToken);

  useEffect(() => {
    if (currentDate === null) return;
    if (token === null) return;
    dispatch(getInfoForDay({ date: currentDate }));
  }, [currentDate, dispatch, token]);

  return (
    <Wrapper>
      {/* <Flex h="100%" flexDirection={{ xs: 'column', lg: 'row' }}> */}
      <Box
        w="100%"
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        gap={{ xs: '32px', md: '60px' }}
        pt={{ xs: '160px', md: '180px', lg: '50px' }}
        // padding={{
        //   xs: '40px 20px',
        //   md: '100px 126px 55px 32px',
        //   lg: '158px 107px 56px 16px',
        // }}
      >
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
        <Box display={{ xs: 'block', md: 'none' }}>
          <AddButton />
        </Box>
      </Box>
      <Box position="relative">
        <RightSideBar />
        <BgImg />
      </Box>
      {/* </Flex> */}
    </Wrapper>
  );
}
