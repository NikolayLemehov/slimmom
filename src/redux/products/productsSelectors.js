export const selectProductOfList = state => state.products.selectedProduct;
export const selectCurrentDate = state => state.products.currentDate;

export const selectEatenProductsByDate = state =>
  state.products.productsByDate.eatenProducts;

export const selectCurrentDayId = state => {
  return state.products.productsByDate.id;
};

export const selectShallGetInfoOfDay = state =>
  state.products.shallGetInfoOfDay;

export const selectIsLoading = state => state.products.isLoading;
