import { Heading, Container } from '@chakra-ui/react';

import type { NextPage } from 'next';

import { ThemeContainer, Header, AdoptionList } from '@root/components';
import { mock_data } from '@root/data';
import { defaultTheme } from '@root/themes';

const Home: NextPage = ({ cookies = '' }) => {
  return (
    <ThemeContainer>
      <Container maxW="container.lg" centerContent role="main">
        <Header />
        <AdoptionList items={mock_data} />
      </Container>
    </ThemeContainer>
  );
};

export default Home;

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
