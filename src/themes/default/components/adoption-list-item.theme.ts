export const AdoptionListItem = {
  baseStyle: ({ colorMode }: any) => ({
    bg: colorMode === 'dark' ? 'gray.800' : 'whiteAlpha.100',
    color: colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.800',
    borderColor: colorMode === 'dark' ? 'gray.800' : 'whiteAlpha.800',
  }),
};
