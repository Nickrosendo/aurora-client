export const styles = {
  global: ({ colorMode }) => ({
    body: {
      fontFamily: "'Lato', sans-serif",
      color: colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      bg: colorMode === "dark" ? "gray.500" : "whiteAlpha.500",
      lineHeight: "base",
    },
  }),
};
