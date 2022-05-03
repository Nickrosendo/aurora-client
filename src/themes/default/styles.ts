export const styles = {
  global: ({ colorMode }: any) => ({
    body: {
      fontFamily: "'Lato', sans-serif",
      color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      bg: colorMode === 'dark' ? 'brand.800' : 'brand.50',
      lineHeight: 'base',
    },
  }),
};
