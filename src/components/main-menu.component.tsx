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
  Button,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';

export const MainMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        aria-label="open menu"
        title="main-menu"
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
          <DrawerBody pt="4rem">
            <Link href="/">
              <Button variant="outline" w="full" justifyContent="left">
                Home
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
