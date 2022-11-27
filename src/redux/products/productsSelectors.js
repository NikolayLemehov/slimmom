export const selectProductOfList = state => state.products.selectedProduct;
export const selectCurrentDate = state => state.products.currentDate;

export const selectEatenProductsByDate = state =>
  state.products.productsByDate.eatenProducts;
export const selectCurrentDayId = state => {
  // console.log(state.products.productsByDate);
  return state.products.productsByDate.id;
};

// export const selectDayId = state => {
//   if (state.products.daySummary) {
//     return state.products.daySummary.id;
//   }
//   return null;
// };
