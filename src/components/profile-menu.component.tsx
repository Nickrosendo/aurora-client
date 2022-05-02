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

export const ProfileMenu: React.FC = () => {
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
    </>
  );
};
