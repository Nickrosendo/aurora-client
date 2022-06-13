import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Button,
  ModalBody,
  ModalHeader,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { SignIn, SignUp } from '@root/components';

export interface AuthContainerProps {
  isOpen: boolean;
  onClose?: () => void;
  initialAuthType?: 0 | 1;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({
  isOpen = false,
  onClose = () => null,
  initialAuthType = 0,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent title="auth-container">
        <ModalHeader>Bem-vindo à Aurora!</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="4">
          <Tabs variant="enclosed" defaultIndex={initialAuthType}>
            <TabList>
              <Tab>Entrar</Tab>
              <Tab>Cadastrar</Tab>
            </TabList>
            <TabPanels>
              <TabPanel title="sign-in-tab">
                <SignIn />
              </TabPanel>
              <TabPanel title="sign-up-tab">
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
