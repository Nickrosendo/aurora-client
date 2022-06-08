import React from 'react';
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useEventListener,
  Container,
} from '@chakra-ui/react';

import { MdSearch } from 'react-icons/md';

import { KeyBindings } from '@root/components';

export interface SearchBarProps {
  searchKeys?: Array<string>;
  onSearch?: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchKeys = ['ctrl', 'k'],
  onSearch = () => null,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEventListener('keydown', (event) => {
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform);
    const hotkey = isMac ? 'metaKey' : 'ctrlKey';
    if (event?.key?.toLowerCase() === 'k' && event[hotkey]) {
      event.preventDefault();
      inputRef?.current?.focus();
    }
  });

  return (
    <Container title="search-bar">
      <InputGroup>
        <InputLeftElement pointerEvents="none" title="left-element">
          <Icon as={MdSearch} h={'1.5rem'} w={'1.5rem'} />
        </InputLeftElement>
        <Input
          ref={inputRef}
          title="search-bar-element"
          placeholder={'Search me'}
          onChange={onSearch}
          type="text"
        />
        <InputRightElement width="6rem" title="right-element">
          <KeyBindings keys={searchKeys} />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};
