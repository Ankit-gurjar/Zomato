import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import MyImages from "../components/mis/images";

const Imagepage = () => {
  return (
    <Container maxW="2xl">
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          // onClick={submitHandler}
          // isLoading={picLoading}
        >
          Upload Image
        </Button>
      </Box>
      <MyImages minW="2xl" />
    </Container>
  );
};

export default Imagepage;
