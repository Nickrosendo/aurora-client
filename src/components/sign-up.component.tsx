import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

export const SignUp: React.FC = () => {
  return (
    <Box title="sign-up">
      <Flex alignItems="center" gap="2">
        <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </Flex>

      <FormControl my="2">
        <FormLabel htmlFor="email">e-mail</FormLabel>
        <Input id="email" type="email" placeholder="eu@domain.com" />
      </FormControl>

      <FormControl my="2">
        <FormLabel htmlFor="password">senha</FormLabel>
        <Input id="password" type="password" placeholder="xxxxxxxxx" />
      </FormControl>
      <FormControl my="2">
        <FormLabel htmlFor="confirm_password">confirmação de senha</FormLabel>
        <Input id="confirm_password" type="password" placeholder="xxxxxxxxx" />
      </FormControl>
      <Button mt={4} colorScheme="brand">
        Cadastrar
      </Button>
    </Box>
  );
};
