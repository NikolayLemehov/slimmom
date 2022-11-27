import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import DiaryProductItem from 'components/DiaryProductItem/DiaryProductItem';
import {
  selectEatenProductsByDate,
  selectCurrentDayId,
} from 'redux/products/productsSelectors';
import { deleteProduct } from 'redux/products/productsOperations';
import DeleteButton from 'components/Button/DeleteButton';
import { List, BottomGradient } from './DiaryProductList.styled';

export default function DiaryProductsList() {
  const dispatch = useDispatch();
  const productsList = useSelector(selectEatenProductsByDate);
  const currendDayId = useSelector(selectCurrentDayId);

  return (
    <Box
      // marginBottom={{ xs: '60px', md: '55px' }}
      w={{ lg: '623px' }}
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
