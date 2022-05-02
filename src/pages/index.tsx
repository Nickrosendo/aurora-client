import { Heading, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Header, AdoptionList } from '@root/components';
import { mock_data } from '@root/data';

const Home: NextPage = () => {
  return (
    <Box
      role="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Header />
      <AdoptionList items={mock_data} />
    </Box>
  );
};

export default Home;
