import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  IconButton,
  Container,
  Box,
  Heading,
  Textarea,
  Select,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { BiImageAdd } from 'react-icons/bi';

export const NewAdoptionForm: React.FC = () => {
  return (
    <Container>
      <Heading as="h1" textAlign="center" mb="2rem">
        {' '}
        Cadastro de adoção{' '}
      </Heading>
      <Box
        p="2"
        borderRadius="md"
        borderColor="white"
        bg="gray.800"
        color="white"
        title="new-adoption-form"
      >
        <FormControl>
          <FormLabel htmlFor="pet-image" textAlign="center">
            Imagens do Pet
          </FormLabel>

          <IconButton
            variant="solid"
            aria-label="open menu"
            width="50%"
            m="auto"
            height="5rem"
            icon={
              <Icon
                as={BiImageAdd}
                width="2rem"
                height="2rem"
                color="brand.500"
              />
            }
          />
        </FormControl>
        <FormControl my="2">
          <FormLabel htmlFor="name">Titulo</FormLabel>
          <Input id="name" placeholder="titulo" color="white" />
        </FormControl>
        <FormControl my="2">
          <FormLabel htmlFor="description">Descrição</FormLabel>
          <Textarea id="description" placeholder="descrição" color="white" />
        </FormControl>
        <FormControl my="2">
          <FormLabel htmlFor="age">Idade</FormLabel>
          <Flex>
            <Input
              width="5rem"
              mr="2"
              id="age"
              type="number"
              placeholder="idade"
              color="white"
            />
            <Select flex="1" placeholder="Selecione uma opção">
              <option style={{ color: 'black' }} value="option1">
                Semanas
              </option>
              <option style={{ color: 'black' }} value="option2">
                Meses
              </option>
              <option style={{ color: 'black' }} value="option3">
                anos
              </option>
            </Select>
          </Flex>
        </FormControl>
        <FormControl my="2">
          <FormLabel htmlFor="location">Localização</FormLabel>
          <Flex>
            <Input
              mr="2"
              id="location"
              placeholder="localização"
              color="white"
            />
          </Flex>
        </FormControl>

        <FormControl my="2">
          <FormLabel htmlFor="contact">Numero de Contato</FormLabel>
          <Flex>
            <Input
              mr="2"
              id="contact"
              placeholder="(11) 1111-1111"
              color="white"
            />
          </Flex>
        </FormControl>

        <Button mt={4} colorScheme="brand" type="submit">
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
};
