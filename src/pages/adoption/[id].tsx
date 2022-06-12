import { Heading, Container } from '@chakra-ui/react';
import type { NextPage, NextPageContext } from 'next';

import {
  ThemeContainer,
  Header,
  AdoptionList,
  AdoptionDetails,
} from '@root/components';
import { DefaultPageTypes } from '@root/types';

const AdoptionDetail: NextPage<DefaultPageTypes> = ({
  cookies = '',
  query = {},
}) => {
  const { id } = query;
  return (
    <ThemeContainer cookies={cookies}>
      <Container maxW="container.lg" centerContent role="main">
        <Header />
        <AdoptionDetails adoptionId={id} />
      </Container>
    </ThemeContainer>
  );
};

export default AdoptionDetail;

export function getServerSideProps({ req, query }: NextPageContext) {
  return {
    props: {
      query,
      cookies: req?.headers?.cookie ?? '',
    },
  };
}
