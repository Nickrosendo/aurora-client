import { Heading, Container } from '@chakra-ui/react';
import type { NextPage, NextPageContext } from 'next';

import { ThemeContainer, Header, NewAdoptionForm } from '@root/components';
import { DefaultPageTypes } from '@root/types';

const NewAdoption: NextPage<DefaultPageTypes> = ({ cookies = '' }) => {
  return (
    <ThemeContainer cookies={cookies}>
      <Container maxW="container.lg" centerContent role="main">
        <Header />
        <NewAdoptionForm />
      </Container>
    </ThemeContainer>
  );
};

export default NewAdoption;

export function getServerSideProps({ req }: NextPageContext) {
  return {
    props: {
      cookies: req?.headers?.cookie ?? '',
    },
  };
}
