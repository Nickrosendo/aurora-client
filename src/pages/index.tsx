import { Heading, Container } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Header, AdoptionList } from '@root/components';
import { mock_data } from '@root/data';

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg" centerContent role="main">
      <Header />
      <AdoptionList items={mock_data} />
    </Container>
  );
};

export default Home;
