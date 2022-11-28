import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, useDisclosure } from '@chakra-ui/react';

import { Wrapper, BgImg } from 'pages/CalculatorPage/CalculatorPage.styled';

import DiaryDateCalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Loader from 'components/Loader/Loader';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import AddButton from 'components/Button/AddButton';
import MobileModalForm from 'components/MobileModalForm/MobilyDiaryAddProductForm';

import {
  selectCurrentDate,
  selectIsLoading,
} from 'redux/products/productsSelectors';
import { authSelectors } from 'redux/auth/authSelectors';
import { getInfoForDay } from 'redux/products/productsOperations';

export default function DiaryPage() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentDate = useSelector(selectCurrentDate);
  const token = useSelector(authSelectors.accessToken);

  const handleClickAddButton = () => {
    onOpen();
  };

  useEffect(() => {
    if (currentDate === null) return;
    if (token === null) return;
    dispatch(getInfoForDay({ date: currentDate }));
  }, [currentDate, dispatch, token]);

  return (
    <Wrapper>
      <Box
        w={{ md: '610px', lg: '640px' }}
        minWidth={{ xs: '100%' }}
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        gap={{ xs: '32px', md: '60px' }}
        pt={{ xs: '80px', md: '100px', lg: '150px' }}
      >
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        {!isLoading ? (
          <>
            <DiaryProductsList />
            <Box display={{ xs: 'block', md: 'none' }}>
              <AddButton
                type="click"
                ml="auto"
                mr="auto"
                mt="-32px"
                mb="60px"
                onClick={handleClickAddButton}
              />
              <MobileModalForm isOpen={isOpen} onClose={onClose} />
            </Box>
          </>
        ) : (
          <Loader
            height="30px"
            width="30px"
            marginLeft={{ xs: '0px', lg: '-190px' }}
            marginTop={{ xs: '-90px' }}
          />
        )}
      </Box>
      <Box position="relative">
        <RightSideBar />
        <BgImg />
      </Box>
    </Wrapper>
  );
}
