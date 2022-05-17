import React from 'react';
import {
  Box,
  Icon,
  Img,
  Badge,
  Text,
  Flex,
  useStyleConfig,
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

import { IAdoptionItem } from '@root/types';

export interface AdoptionListItemProps {
  item: IAdoptionItem;
}

export const AdoptionListItem: React.FC<AdoptionListItemProps> = ({
  item = { title: 'foo' },
}) => {
  const styles = useStyleConfig('AdoptionListItem');
  const getRandomColor = () => {
    const colors = ['orange', 'purple', 'teal', 'red', 'green'];
    const randomIndex = Math.round(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="lg"
      w="full"
      p="2"
      borderWidth="1px"
      __css={styles}
      borderRadius="lg"
      overflow="hidden"
      title="adoption-list-item"
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

        <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight">
          {item.title}
        </Box>

        <Box>
          {item.age}
          <Box as="span" color="gray.600" fontSize="sm">
            / {item.ageType}
          </Box>
        </Box>

        <Flex gap={1} alignItems="center">
          <Icon as={MdLocationOn} h={'1rem'} w={'1rem'} />
          {item.location}
        </Flex>

        <Flex gap={1} alignItems="center">
          <Icon as={FaUsers} h={'1rem'} w={'1rem'} />
          {item.pretenders}
        </Flex>
      </Box>
    </Box>
  );
};
