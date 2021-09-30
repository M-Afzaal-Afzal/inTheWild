import React from "react";
import {Container} from "@chakra-ui/layout";
import {Flex, Text, Stack, Box} from "@chakra-ui/layout";
import Image from "next/image";

const Post = () => {
    return (
        <Container
            pt={"2rem"}
            pb={"8rem"}
            maxW={"1200px"}
            color="white"
            flexDirection="column"
        >
            <Box py={'4rem'}>

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
                <Flex
                    fontFamily={"Roboto Slab"}
                    width="100%"
                    flexDirection="column"
                    fontSize="44px"
                >
                    <Text>
                        {" "}
                        <b>How to </b>
                    </Text>
                    <Text>
                        <b>Contribute</b>
                    </Text>
                </Flex>
            </Box>

            <Box
                display={"grid"}
                gridTemplateColumns={["1fr", null, null, null, "1fr 1fr"]}
                gridGap={"3rem"}
                placeItems={'center'}
            >

                <Box position={'relative'}>
                    <Box>

                        <Box width={'144px'} height={'120px'} position={'relative'}>
                            <Image layout={'fill'} src={'/home/twitter.png'} width={144} height={120}/>
                        </Box>

                        <Box zIndex={5} position={'relative'} mt={'-2.7rem'} fontFamily={'ubuntu'}>
                            <Text fontSize={'24px'}>
                                As simple as writing a tweet
                            </Text>

                            <Stack mt={'1rem'} spacing={1} fontSize={'18px'} direction={'column'}>
                                <Text>
                                    Add a {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        @inthewildio
                                    </Box> {' '}
                                    tag
                                </Text>

                                <Text>
                                    Add the {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        #cancreditme
                                    </Box> {' '}
                                    hashtag
                                </Text>

                                <Text>
                                    Add a vulnerabilityId (if any) {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        #cve_2020_17049
                                    </Box> {' '}

                                </Text>

                                <Text>
                                    Add a type {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        #exploitedinthewild
                                    </Box> {' '}
                                </Text>
                            </Stack>

                            <Box marginTop={'3rem'}>
                                <Image src={'/home/twitterMockup.png'} width={445} height={300}/>
                            </Box>


                        </Box>

                    </Box>
                </Box>

                {/* 2nd card */}

                <Box position={'relative'}>
                    <Box>

                        <Box width={'126px'} height={'120px'} position={'relative'}>
                            <Image layout={'fill'} src={'/home/linkedIn.png'} width={126} height={120}/>
                        </Box>

                        <Box zIndex={5} position={'relative'} mt={'-2.7rem'} fontFamily={'ubuntu'}>
                            <Text fontSize={'24px'}>
                                As simple as writing a tweet
                            </Text>

                            <Stack mt={'1rem'} spacing={1} fontSize={'18px'} direction={'column'}>
                                <Text>
                                    Add a {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        @inthewildio
                                    </Box> {' '}
                                    tag
                                </Text>

                                <Text>
                                    Add the {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        #cancreditme
                                    </Box> {' '}
                                    hashtag
                                </Text>

                                <Text>
                                    Add a vulnerabilityId (if any) {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        #cve_2020_17049
                                    </Box> {' '}

                                </Text>

                                <Text>
                                    Add a type {' '}
                                    <Box color={'brand.green'} href={'#'} as={'a'}>
                                        #exploitedinthewild
                                    </Box> {' '}
                                </Text>
                            </Stack>

                            <Box marginTop={'3rem'}>
                                <Image src={'/home/linkedInmockup.png'} width={445} height={300}/>
                            </Box>


                        </Box>

                    </Box>
                </Box>

                {/* ended */}
            </Box>
        </Container>
    );
};

export default Post;
