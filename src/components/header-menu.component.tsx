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
import { MdMenu } from 'react-icons/md';

export const HeaderMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        aria-label="open menu"
        title="open-drawer-menu"
        role="button"
        ref={iconBtnRef}
        icon={<Icon as={MdMenu} h={'1.5rem'} w={'1.5rem'} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
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
