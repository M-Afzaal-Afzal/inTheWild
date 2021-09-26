import React from "react";
import { Container } from "@chakra-ui/layout";
import {
  Flex,

  Text,

} from "@chakra-ui/layout";

const Post = () => {
  return (
    <Container maxW={'1200px'} color="white" flexDirection="column">
      <Text
        fontSize="16px"
        marginTop="20px"
        width="50px"
        border="1px solid green"
        borderWidth="1px"
        borderEnd="5px"
        backgroundColor="green"
      >
        <span/>
      </Text>
      <Flex width="100%" flexDirection="column" fontSize="4xl">
        <Text>
          {" "}
          <b>How to </b>
        </Text>
        <Text>
          <b>Contribute</b>
        </Text>
      </Flex>
    </Container>
  );
};

export default Post;
