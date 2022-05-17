import { Heading, Container } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { ThemeContainer, Header, AdoptionList } from '@root/components';
import { mock_data } from '@root/data';

const AdoptionDetail: NextPage = () => {
  return (
    <ThemeContainer>
      <Container maxW="container.lg" centerContent role="main">
        <Header />
        AdoptionDetail
      </Container>
    </ThemeContainer>
  );
};

export default AdoptionDetail;
