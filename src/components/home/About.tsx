import React from "react";
import {Container} from "@chakra-ui/layout";
import {Box} from "@chakra-ui/layout";
import {

    Text,

} from "@chakra-ui/layout";

import {Heading} from "@chakra-ui/react";
import Image from 'next/image';

const About = () => {
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
            <Text fontFamily={'Roboto Slab'} fontSize="4xl">
                <b>know</b>
            </Text>
            <Text fontFamily={'Roboto Slab'} fontSize="4xl">
                <b>When to panic</b>
            </Text>

            <Box
                display={'grid'}
                gridTemplateColumns={['1fr',null,null,null,'1fr 1fr']}
                gridGap={'1rem'}
                mt={'3rem'}
            >

                {/* First Box*/}
                <Box
                    bg="#333333"
                    display={'grid'}
                    gridTemplateColumns={['auto 1fr']}
                    gridGap={'1.5rem'}
                    p={6}
                    color="white"
                    borderRadius="6px"
                >
                    {/* Left Heading */}
                    <Box>
                        <Image src={'/home/warn.png'} width={50} height={51}/>
                    </Box>

                {/*    Right Heading and description section*/}
                    <Box>
                        <Heading color={'brand.green'} fontSize={'24px'} fontFamily={'ubuntu'}>
                            CVEs exploited in-the-wild
                        </Heading>

                        <Text mt={'1.5rem'} fontSize={'18px'} fontFamily={'ubuntu'}>
                            Find out if the CVEs you are looking have been exploited in-the-wild
                        </Text>
                    </Box>

                </Box>


                <Box
                    bg="#333333"
                    display={'grid'}
                    gridTemplateColumns={'auto 1fr'}
                    gridGap={'1rem'}
                    p={6}
                    color="white"
                    borderRadius="6px"
                >
                    {/* Left Heading */}
                    <Box>
                        <Image src={'/home/world.png'} width={50} height={51}/>
                    </Box>

                    {/*    Right Heading and description section*/}
                    <Box>
                        <Heading color={'brand.green'} fontSize={'24px'} fontFamily={'ubuntu'}>
                            CVEs exploited in-the-wild
                        </Heading>

                        <Text mt={'1.5rem'} fontSize={'18px'} fontFamily={'ubuntu'}>
                            Find out if the CVEs you are looking have been exploited in-the-wild
                        </Text>
                    </Box>

                </Box>

                {/* 3rd Box*/}
                <Box
                    bg="#333333"
                    display={'grid'}
                    gridTemplateColumns={'auto 1fr'}
                    gridGap={'1rem'}
                    p={6}
                    color="white"
                    borderRadius="6px"
                >
                    {/* Left Heading */}
                    <Box>
                        <Image src={'/home/dataExpert.png'} width={50} height={51}/>
                    </Box>

                    {/*    Right Heading and description section*/}
                    <Box>
                        <Heading color={'brand.green'} fontSize={'24px'} fontFamily={'ubuntu'}>
                            CVEs exploited in-the-wild
                        </Heading>

                        <Text mt={'1.5rem'} fontSize={'18px'} fontFamily={'ubuntu'}>
                            Find out if the CVEs you are looking have been exploited in-the-wild
                        </Text>
                    </Box>

                </Box>


                {/* 4th Box*/}
                <Box
                    bg="#333333"
                    display={'grid'}
                    gridTemplateColumns={'auto 1fr'}
                    gridGap={'1rem'}
                    p={6}
                    color="white"
                    borderRadius="6px"
                >
                    {/* Left Heading */}
                    <Box>
                        <Image src={'/home/heartWithCircle.png'} width={50} height={51}/>
                    </Box>

                    {/*    Right Heading and description section*/}
                    <Box>
                        <Heading color={'brand.green'} fontSize={'24px'} fontFamily={'ubuntu'}>
                            CVEs exploited in-the-wild
                        </Heading>

                        <Text mt={'1.5rem'} fontSize={'18px'} fontFamily={'ubuntu'}>
                            Find out if the CVEs you are looking have been exploited in-the-wild
                        </Text>
                    </Box>

                </Box>
            </Box>


            <Box
                padding={'2rem'}
                // minH={'240px'}
                // display="flex"
                // flexDirection="row"
                width="100%"
                // margin="0 10px"
                // justifyContent="flex-start"
                // alignItems="center"
                marginTop="100px"
                bgColor="brand.green"
            >
                <Box>

                    {/* Image with text*/}
                    <Box gridGap={'1.5rem'} display={'grid'}  gridTemplateColumns={['1fr',null,null,'auto auto']}
                        justifyContent={'center'}
                    >
                        {/* Left icon*/}
                        <Box>
                            <Image src={'/home/bannerIcon.png'} height={80} width={80} />
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            fontSize="44px"
                            alignItems="flex-start"
                            fontFamily={'Roboto Slab'}
                            maxW={'605px'}
                        >
                            <Text lineHeight={'60px'} letterSpacing={2}>
                                Help the Community Move Fast {' '}
                                <Box letterSpacing={2} fontWeight={'bold'}  as={'span'}>
                                    Contribute Now
                                </Box>
                            </Text>

                            <Box mt={'-2rem'} marginLeft={'auto'}>
                                <Box
                                    display={'inline-block'}
                                    component={'button'}
                                    fontSize="16px"
                                    border="2px"
                                    borderRadius="20px"
                                    padding="3px 10px"
                                    color="white"
                                    backgroundColor="transparent"
                                >
                                    Contribute
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    {/*<Box>*/}
                    {/*    <Box*/}
                    {/*        display={'inline-block'}*/}
                    {/*        component={'button'}*/}
                    {/*        fontSize="16px"*/}
                    {/*        border="2px"*/}
                    {/*        borderRadius="20px"*/}
                    {/*        padding="3px 10px"*/}
                    {/*        color="white"*/}
                    {/*        backgroundColor="transparent"*/}
                    {/*    >*/}
                    {/*        Contribute*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}

                </Box>

            </Box>
        </Container>
    );
};

export default About;
