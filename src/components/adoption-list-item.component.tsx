import React from "react";
import { Box } from "@chakra-ui/react";

import { IAdoptionItem } from "@root/types";

export interface AdoptionListItemProps {
  item: IAdoptionItem;
}

export const AdoptionListItem: React.FC<AdoptionListItemProps> = ({
  item = { title: "foo" },
}) => {
  return (
    <Box
      w="full"
      p="2"
      border="1px solid"
      borderColor="brand.500"
      borderRadius="md"
      title="adoption-list-item"
    >
      {item?.title}
    </Box>
  );
};
