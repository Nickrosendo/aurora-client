import { Heading, Box } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      role="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      {" "}
      <Heading textAlign="center"> hello world </Heading>
    </Box>
  );
};

export default Home;
