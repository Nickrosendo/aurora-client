import { Heading, Container } from '@chakra-ui/react';

import type { NextPage, NextPageContext } from 'next';

import { ThemeContainer, Header, AdoptionList } from '@root/components';
import { DefaultPageTypes } from '@root/types';
import { mock_data } from '@root/data';

const Home: NextPage<DefaultPageTypes> = ({ cookies = '' }) => {
  return (
    <ThemeContainer cookies={cookies}>
      <Container maxW="container.lg" centerContent role="main">
        <Header />
        <AdoptionList items={mock_data} />
      </Container>
    </ThemeContainer>
  );
};

export default Home;

export function getServerSideProps({ req }: NextPageContext) {
  return {
    props: {
      cookies: req?.headers?.cookie ?? '',
    },
  };
}
