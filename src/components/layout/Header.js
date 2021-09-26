import React from "react";

import { Box } from "@chakra-ui/layout";
import {
  Flex,

  Text,

} from "@chakra-ui/layout";

import {Stack} from "@chakra-ui/react";
const Header = () => {
  return (
    <Flex fontFamily={'ubuntu'} color="white" margin="2% 5%" justifyContent={'space-between'}>
      <Box width="30%" cursor="pointer">
        <Text>inTheWild</Text>
      </Box>
      <Stack
          display={['none',null,null,null,'flex']}
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        direction={'row'}
        spacing={12}
      >
        <Text fontSize="16px">Vulnerability feed</Text>

        <Text fontSize="16px">
          <a href="">Contributer</a>
        </Text>
        <Text fontSize="16px">About</Text>
        <Text color="brand.green" fontSize="16px">
          Sign In
        </Text>
        <Text
          fontSize="16px"
          border="2px soild #1b9c66"
          backgroundColor="brand.green"
          borderRadius="30px"
          padding="6px 10px"
        >
          Contributer
        </Text>
      </Stack>

    {/*   Mobile Nav Icon*/}
      <Box  display={['block',null,null,null,'none']}>
        icon
      </Box>

    </Flex>
  );
};

export default Header;
