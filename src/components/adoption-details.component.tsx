import React from 'react';
import {
  Container,
  Box,
  Icon,
  Img,
  Badge,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
  useStyleConfig,
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import {
  FaUsers,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPlus,
} from 'react-icons/fa';

import { mock_data } from '@root/data';
import { getRandomColor } from '@root/helpers';

export interface AdoptionDetailsProps {
  adoptionId: string;
}

export const AdoptionDetails: React.FC<AdoptionDetailsProps> = ({
  adoptionId = '',
}) => {
  const styles = useStyleConfig('AdoptionListItem');
  const item = mock_data[0];

  return (
    <Container maxW="xl" w="full" overflow="hidden" title="adoption-details">
      <Box
        w="full"
        p="2"
        borderWidth="1px"
        __css={styles}
        borderRadius="lg"
        overflow="hidden"
        title="adoption-list-item"
        cursor="pointer"
      >
        <Box h="30rem">
          <Img
            src={item.imageUrl}
            alt={item.title}
            boxSize="100%"
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>

        <Box p="6">
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 50%)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1}>
              {item.owner && (
                <Flex gap={2} alignItems="center" my="2">
                  <Img
                    borderRadius="full"
                    src={item.owner?.image}
                    alt={item.owner?.name}
                    boxSize="2rem"
                  />
                  <Text fontWeight="semibold"> {item.owner.name} </Text>
                </Flex>
              )}
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Flex
                gap={1}
                alignItems="center"
                w="full"
                justifyContent="flex-end"
              >
                <Icon as={FaWhatsapp} h={'2rem'} w={'2rem'} />
                <Icon as={FaInstagram} h={'2rem'} w={'2rem'} />
                <Icon as={FaEnvelope} h={'2rem'} w={'2rem'} />
              </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Box gap="2" display="flex" alignItems="baseline">
                {item.tags &&
                  item.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      id={tag}
                      borderRadius="full"
                      px="2"
                      colorScheme={getRandomColor()}
                    >
                      {tag}
                    </Badge>
                  ))}
              </Box>
            </GridItem>
            <GridItem rowSpan={3} colSpan={2}>
              <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight">
                {item.title}
              </Box>
              <Box
                mt="1"
                minHeight="3rem"
                fontWeight="normal"
                borderRadius="md"
                color="white"
                bg="brand.500"
                as="p"
                lineHeight="tight"
                p="2"
              >
                Cachorro fofinho que precisa de um lar.
              </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <Flex>
                <Text mr="1"> age: </Text>
                {item.age}
                <Box as="span" color="gray.600" fontSize="sm">
                  / {item.ageType}
                </Box>
              </Flex>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <Flex gap={1} alignItems="center">
                <Text mr="1"> location: </Text>
                <Icon as={MdLocationOn} h={'1rem'} w={'1rem'} />
                {item.location}
              </Flex>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
              <Flex gap={1} alignItems="center" fontSize="1.5rem">
                <Icon as={FaUsers} h={'2rem'} w={'2rem'} />
                {item.pretenders}
                <Button ml="2">
                  <Icon as={FaPlus} h={'2rem'} w={'2rem'} />
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
