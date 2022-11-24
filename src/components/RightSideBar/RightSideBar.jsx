import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';

const RightSideBar = () => {
  return (
    <Box
      bgColor="#F0F1F3"
      w={{ base: '100%', lg: '517px' }}
      py={{ xs: '40px', md: '80px', lg: '166px' }}
      display="flex"
      flexDir={{ xs: 'column', md: 'row', lg: 'column' }}
      gap={{ xs: '40px', md: '97px', lg: '60px' }}
      justifyContent="center"
      alignItems={{ xs: 'center', md: 'baseline', lg: 'center' }}
      ml={{ lg: 'auto' }}
    >
      <Box w="288px">
        <Heading fontSize="14px" textAlign="center" mb="20px" color="#212121">
          Summary for 06/20/2020
        </Heading>
        <List color="#9B9FAA">
          <ListItem display="flex" justifyContent="space-between">
            <Text>Left</Text>
            <Text>000 kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Consumed</Text>
            <Text>000 kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Daily rate</Text>
            <Text>000 kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>n% of normal</Text>
            <Text>000 kcal</Text>
          </ListItem>
        </List>
      </Box>
      <Box w="288px">
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
        <List color="#9B9FAA">
          <ListItem display="flex" justifyContent="space-between">
            <Text>Your diet will be displayed here</Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightSideBar;
