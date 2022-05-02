import React from "react";
import { Box, VStack } from "@chakra-ui/react";

import { AdoptionListItem } from "./adoption-list-item.component";
import type { IAdoptionItem } from "@root/types";

export interface AdoptionListProps {
  items: Array<IAdoptionItem>;
}

export const AdoptionList: React.FC<AdoptionListProps> = ({ items = [] }) => {
  return (
    <VStack spacing="5" title="adoption-list-container" w="full" p="2">
      {items?.map((item: IAdoptionItem) => (
        <AdoptionListItem item={item} key={item.title} />
      ))}
    </VStack>
  );
};
