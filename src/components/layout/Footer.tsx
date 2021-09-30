import React from "react";
import {FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {Box, Container, IconButton, Stack, Text} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bgColor={"#333333"}>

            <Container maxWidth={'1200px'}>
                <Box
                    fontFamily={"ubuntu"}
                    display={"grid"}
                    gridTemplateColumns={["1fr", null, null, "1fr auto"]}
                    justifyContent={"space-between"}
                    width="100%"
                    alignItems={"center"}
                    gridGap={'1rem'}
                    // height={"80px"}
                    color={'#fff'}
                    padding={'1rem'}
                    cursor={"pointer"}
                    placeItems={'center'}
                >
                    <Stack spacing={[4, null, null, 8]} alignItems={'center'} direction={["column", null, null, "row"]} fontSize={'15px'}>

                        <Stack spacing={[4, null, null, 8]} alignItems={'center'} direction={'row'}>

                            <Text>Vulnerability Feed</Text>
                            <Text>Contributors</Text>
                            <Text>About</Text>

                        </Stack>

                        <Text>

                            <Text as={'a'} color={"brand.green"}>@inTheWild </Text>
                            {' '} &copy;2021 | Privacy Policy
                        </Text>
                    </Stack>


                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton _hover={{
                            background: 'transparent',
                            color: '#19ae70'
                        }} background={'transparent'} aria-label={'twitter'}>
                            <FaTwitter size={'25'}/>
                        </IconButton>

                        <IconButton _hover={{
                            background: 'transparent',
                            color: '#19ae70'
                        }} background={'transparent'} aria-label={'linkedIn'}>
                            <FaLinkedinIn size={'25'}/>
                        </IconButton>
                    </Stack>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
