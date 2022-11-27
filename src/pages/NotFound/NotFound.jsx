import { Box } from '@chakra-ui/react';
import notFoundIcon from 'assets/notFound/notFound.svg';

import { NotFoundImg, LinkStyled, Article } from './NotFound.styled';

export default function NotFound() {
  return (
    <>
      <NotFoundImg src={notFoundIcon} alt="Not found icon" width={500} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={30}
        pb={40}
      >
        <h1>We couldn't find this page.</h1>
        <Article>
          Click <LinkStyled to="/">here</LinkStyled> to get back to home page
        </Article>
      </Box>
    </>
  );
}
