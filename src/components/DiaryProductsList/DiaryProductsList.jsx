import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import DiaryProductItem from 'components/DiaryProductItem/DiaryProductItem';
import DeleteButton from 'components/Button/DeleteButton';

import {
  deleteProduct,
  getInfoForDay,
} from 'redux/products/productsOperations';

import {
  selectEatenProductsByDate,
  selectCurrentDayId,
  selectCurrentDate,
  selectShallGetInfoOfDay,
} from 'redux/products/productsSelectors';

import { authSelectors } from 'redux/auth/authSelectors';

import { List, BottomGradient } from './DiaryProductList.styled';

export default function DiaryProductsList() {
  const dispatch = useDispatch();
  const productsList = useSelector(selectEatenProductsByDate);
  const currendDayId = useSelector(selectCurrentDayId);
  const currentDate = useSelector(selectCurrentDate);
  const token = useSelector(authSelectors.accessToken);
  const isGetDayInfo = useSelector(selectShallGetInfoOfDay);

  useEffect(() => {
    if (currentDate === null) return;
    if (token === null) return;
    if (isGetDayInfo) {
      dispatch(getInfoForDay({ date: currentDate }));
    }
  }, [currentDate, dispatch, isGetDayInfo, token]);

  return (
    <Box
      marginBottom={{ xs: '60px', md: '55px' }}
      w={{ xs: '100%', md: '610px', lg: '623px' }}
      position="relative"
    >
      <List>
        {productsList &&
          productsList.length > 0 &&
          productsList.map(product => {
            return (
              <DiaryProductItem
                key={product.id}
                product={product.title}
                grams={product.weight}
                kcal={Math.floor(product.kcal)}
              >
                <DeleteButton
                  onClick={() => {
                    return dispatch(
                      deleteProduct({
                        dayId: currendDayId,
                        eatenProductId: product.id,
                      })
                    );
                  }}
                />
              </DiaryProductItem>
            );
          })}
      </List>
      {productsList && productsList.length > 5 && <BottomGradient />}
    </Box>
  );
}
