import React from 'react';
import {
  Icon,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContainer } from './auth-container.component';

export interface ProfileMenuProps {
  isAuth?: boolean;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ isAuth = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        aria-label="open menu"
        title="profile-menu"
        role="button"
        ref={iconBtnRef}
        icon={<Icon as={FaUserCircle} h={'1.5rem'} w={'1.5rem'} />}
        onClick={onOpen}
      />
      {isAuth ? (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={iconBtnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>foo</DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : (
        <AuthContainer isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};
