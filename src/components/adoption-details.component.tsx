import React from 'react';
import { Container } from '@chakra-ui/react';

export interface AdoptionDetailsProps {
  adoptionId: string;
}

export const AdoptionDetails: React.FC<AdoptionDetailsProps> = ({
  adoptionId = '',
}) => {
  return (
    <Container
      maxW="lg"
      w="full"
      p="2"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      title="adoption-details"
    >
      {adoptionId}
    </Container>
  );
};
