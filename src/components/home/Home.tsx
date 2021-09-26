import React from "react";
import {Container} from "@chakra-ui/layout";
import {Box} from "@chakra-ui/layout";
import {

    Text,

    Grid,

} from "@chakra-ui/layout";

const Home = () => {
    return (
        <Container
            maxW={'1200px'}
            width="100%"
            height={'100%'}
            minH={'100vh'}
            flexDirection="row"
            display={'grid'}
            placeItems={'center'}
            gridTemplateColumns={['1fr', null, null, null, '1fr 1fr']}
            // justifyContent="flex-start"
            // alignItems="center"
            // margin="0% 5%"
        >
            <Box display={['flex',null,null,null,'block']} justifyContent={'center'} alignItems={'center'} marginTop="6%" marginBottom="0px">
                <Box fontFamily={'Roboto Slab'} color={'brand.green'}>

                    <Text fontSize="4xl">
                        <b>Community-Drivern</b>
                    </Text>
                    <Text fontSize="4xl">
                        <b>Open Database of</b>
                    </Text>
                    <Text fontSize="4xl">
                        <b>Vulnerability</b>
                    </Text>
                    <Text fontSize="4xl">
                        <b>Eexplotiation</b>
                    </Text>
                    <Text
                        fontSize="4xl"
                        color="white"
                        fontWeight={'bold'}
                        // marginBottom="10px"
                        // borderBottom="2px solid green"
                        // borderWidth="10px"
                    >
                        inTheWild
                    </Text>
                    <Text
                        fontSize="12px"
                        marginTop="20px"
                        // border="inline"
                        width="100px"
                        border="1px solid green"
                        borderWidth="1px"
                        borderEnd="5px"
                        backgroundColor="green"
                    >
                        <span/>
                    </Text>
                </Box>
            </Box>
            <Box >
                <Grid
                    // h="150px"
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(1, 1fr)"
                    gap={5}
                    fontFamily={'ubuntu'}
                    placeItems={'center'}
                    mt={'2rem'}
                >
                    <Box
                        bg="#333333"
                        w="100%"
                        p={6}
                        color="white"
                        borderRadius="10px"
                        maxW="430px"
                    >
                        If you are here we don’t have to tell you triaging publicly disclosed vulnerabilities is hard.
                    </Box>

                    <Box
                        bg="#333333"
                        w="100%"
                        p={6}
                        color="white"
                        borderRadius="10px"
                        maxW="430px"
                        marginLeft="-100px"
                    >
                        One thing is easy though: if you know something is actively exploited inTheWild you have to move within hours.
                    </Box>
                    <Box
                        bg="#333333"
                        w="100%"
                        p={6}
                        color="white"
                        borderRadius="10px"
                        maxW="430px"
                    >
                        We believe that exploitation information is about safety and it should not be behind paywalls.
                    </Box>
                    <Box
                        bg="#333333"
                        w="100%"
                        p={6}
                        color="white"
                        borderRadius="10px"
                        maxW="430px"
                        marginLeft="-100px"
                    >
                        We created this service because we believe in order to move fast you need a source that is continously being updated.
                    </Box>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
