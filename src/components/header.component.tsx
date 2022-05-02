import React from 'react';

import { HStack, Box, useColorMode, Container } from '@chakra-ui/react';

import { Menu } from 'react-icons/fi';

import { MainMenu, ProfileMenu } from '@root/components';

export const Header: React.FC = () => {
  return (
    <Container maxW="container.lg" centerContent title="header">
      <Box w="100%" h="60px" p={2} mb="3rem" role="heading">
        <HStack
          spacing={2}
          align="center"
          justifyContent="space-between"
          h="100%"
        >
          <HStack
            spacing={2}
            align="center"
            justifyContent="space-between"
            h="100%"
            w="100%"
          >
            <MainMenu />
            <ProfileMenu />
          </HStack>
        </HStack>
      </Box>
    </Container>
  );
};
