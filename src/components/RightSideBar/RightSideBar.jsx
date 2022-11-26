import { useSelector } from 'react-redux';
import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import {
  getNotAllowedProducts,
  getSummaries,
} from 'redux/dailyRate/dailyRateSelectors';
import {
  ListProducts,
  BottomGradient,
  TopGradient,
} from './RightSideBar.Styled';

const RightSideBar = () => {
  // Summary
  const date = useSelector(state => state.products.currentDate);
  const dateNewFormat = newDateFormat(date);
  const summaries = useSelector(getSummaries);
  const summariesCurrentDate = summaries.find(item => item.date === date);

  const dailyRate = summariesCurrentDate
    ? summariesCurrentDate.dailyRate
    : '000';
  const kcalLeft = summariesCurrentDate ? summariesCurrentDate.kcalLeft : '000';

  const kcalConsumed = summariesCurrentDate
    ? summariesCurrentDate.kcalConsumed
    : '000';

  const percentsOfDailyRate = summariesCurrentDate
    ? summariesCurrentDate.percentsOfDailyRate.toFixed(1)
    : '000';

  const currentDate = getCurrentDate();

  // Food not recommended
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const notAllowedProductsItems = notAllowedProducts.map((item, index) => (
    <li key={index}>
      {index + 1}. {item}
    </li>
  ));
  return (
    <Flex
      bgColor={{ xs: '#F0F1F3', md: 'transparent', lg: 'transparent' }}
      h="100%"
      py={{ xs: '40px', md: '80px', lg: '0px' }}
      flexDir={{ xs: 'column', md: 'row', lg: 'column' }}
      gap={{ xs: '40px', md: '97px', lg: '60px' }}
      justifyContent={{ xs: 'center', lg: 'start' }}
      alignItems={{ xs: 'center', md: 'baseline', lg: 'center' }}
    >
      <Box w={{ xs: '100%', md: '288px' }}>
        <Heading fontSize="14px" textAlign="center" mb="20px" color="#212121">
          Summary for {dateNewFormat ? dateNewFormat : currentDate}
        </Heading>
        <List color="#9B9FAA">
          <ListItem display="flex" justifyContent="space-between">
            <Text>Left</Text>
            <Text>{kcalLeft} kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Consumed</Text>
            <Text>{kcalConsumed} kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Daily rate</Text>
            <Text>{dailyRate} kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>n% of normal</Text>
            <Text>{percentsOfDailyRate} kcal</Text>
          </ListItem>
        </List>
      </Box>
      <Box w={{ xs: '100%', md: '288px' }}>
        <Heading
          as="h3"
          fontSize="14px"
          textAlign="center"
          justifyContent="space-between"
          mb="20px"
          color="#212121"
        >
          Food not recommended
        </Heading>

        <Box position="relative">
          {notAllowedProducts.length === 0 ? (
            <Text w="100%" textAlign="center" color="#9B9FAA">
              Your diet will be displayed here
            </Text>
          ) : (
            <>
              <TopGradient />
              <ListProducts>{notAllowedProductsItems}</ListProducts>
              <BottomGradient />
            </>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default RightSideBar;

function newDateFormat(date) {
  if (date) {
    const dateArray = date.split('-');
    const newDateArray = [];
    newDateArray[0] = dateArray[1];
    newDateArray[2] = dateArray[0];
    newDateArray[1] = dateArray[2];
    return newDateArray.join('/');
  }
  return null;
}

function getCurrentDate() {
  const currentDate = new Date().toLocaleString().split(',');
  const newCurrentDateFormat = currentDate[0].split('.');
  const newDateArray = [];
  newDateArray[0] = newCurrentDateFormat[1];
  newDateArray[1] = newCurrentDateFormat[0];
  newDateArray[2] = newCurrentDateFormat[2];
  return newDateArray.join('/');
}
