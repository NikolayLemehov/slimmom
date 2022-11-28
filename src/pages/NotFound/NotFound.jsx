import { Box } from '@chakra-ui/react';
import notFoundIcon from 'assets/notFound/notFound.svg';

import { NotFoundImg, Title, BgImg } from './NotFound.styled';

export default function NotFound() {
  return (
    <>
      <BgImg />
      <Box
        display={{ xs: 'flex' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={{ lg: '700px' }}
        h={{ xs: 'calc(100vh - 85px)', md: '100%', lg: 'calc(100vh - 160px)' }}
      >
        <NotFoundImg src={notFoundIcon} alt="Not found icon" width={500} />
        <Title>Opps... Page Not Found!</Title>
      </Box>
    </>
  );
}
