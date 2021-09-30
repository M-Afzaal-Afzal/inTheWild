import React from "react";

import {Box} from "@chakra-ui/layout";
import {
    Flex,
    Text,
} from "@chakra-ui/layout";
import {ArrowDownIcon} from "@chakra-ui/icons";
import {FaHeart, FaLink} from 'react-icons/fa';
import {Container, IconButton} from "@chakra-ui/react";
import Image from 'next/image';

const Contribute = () => {
    return (
        <Container maxW={'1200px'} mx={'auto'}  color="green" flexDirection="column">

            <ArrowDownIcon w={50} h={58}/>

            <Box display={'grid'}
                 justifyContent={'space-between'}
                 gridTemplateColumns={['1fr', null, '1fr auto']}
                 gridGap={'1rem'}
                 color="green"
                 flexDirection="row"
            >

                <Flex
                    // width="50%"
                    marginTop={'5rem'}
                    justifyContent={'space-between'}
                    marginBottom="0px"
                    color="white"
                    flexDirection="column"
                    fontFamily={'Roboto Slab'}
                    fontSize={'44px'}
                >
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
                    <Text fontSize="4xl">
                        <b>Most Recently</b>
                    </Text>
                    <Text fontSize="4xl">
                        <b>as exploited</b>
                    </Text>
                    <Text fontSize="4xl">
                        <b>in the wild</b>
                    </Text>
                </Flex>
                <Flex justifyContent="flex-end" alignItems="flex-end">
                    <Text
                        fontSize="16px"
                        border="2px"
                        borderRadius="20px"
                        padding="6px 10px"
                        color="brand.green"
                        backgroundColor="transparent"
                        cursor={'pointer'}
                        transition={'all .3s linear'}
                        sx={{
                            '&:hover': {
                                color: '#fff',
                                background: "#19ae70"
                            }
                        }}
                    >
                        Vulnerability Feeds
                    </Text>
                </Flex>
            </Box>
            <Flex
                width="100%"
                flexDirection="row"
                marginTop="50px"
                justifyContent={['center',null,null,null,null,'space-between']}
                flexWrap={'wrap'}
            >
                <Box
                    bg="#333333"
                    minW={'300px'}
                    maxW={'350px'}
                    margin={4}
                    p={'1rem'}
                    color="white"
                    // padding="10px 15px"
                    borderRadius="25px"
                >
                    <Text fontFamily={'ubuntu'} fontSize="18px" color="brand.green" marginBottom="10px">
                        CVE 2021-2300
                    </Text>
                    <Flex width="100%" justifyContent="space-between" marginBottom="10px">
                        <Text fontFamily={'ubuntu'} color="brand.green" fontSize="16px">
                            Confidence
                        </Text>
                        <Text fontFamily={'ubuntu'} color="brand.green" fontSize="16px">
                            HIGH
                        </Text>
                    </Flex>

                    <Text fontFamily={'ubuntu'} fontSize="16px" color="white" width="100%" marginBottom="10px">
                        In affected versions of Confluence Server and Data Center, an OGNL injection vulnerability
                        exists that would allow an authenticated user, and in some instances an unauthenticated user, to
                        execute arbitrary code on a Confluence Server or Data Center instance. The ...
                    </Text>

                    <Flex justifyContent={'space-between'} width="100%" mt={'1rem'} flexDirection="row">
                        <Flex
                            width="50%"
                            flexDirection="column"
                            color="white"
                            textDecoration="underline"
                            fontSize="14px"
                            fontFamily={'ubuntu'}
                        >
                            <Text>
                                <a href=" "> Refrence:nvd</a>
                            </Text>
                            <Text>
                                <a href=" "> Credit:Microsoft</a>
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection="row"
                            // color="white"
                            alignItems="flex-end"
                            justifyContent="space-evenly"
                            color="grey.300"
                            //   margin="2%"
                            //   marginLeft="5%"
                            paddingLeft="40px"
                        >
                            <IconButton sx={{
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#19ae70',
                                }
                            }} background={'transparent'} aria-label={'heart'}>
                                <FaHeart size={'20'}/>
                            </IconButton>
                            <IconButton sx={{
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#19ae70',
                                }
                            }} background={'transparent'} aria-label={'link'}>
                                <FaLink size={'20'}/>
                            </IconButton>
                        </Flex>
                    </Flex>
                </Box>


                {/* 2nd box */}
                <Box
                    bg="#333333"
                    minW={'300px'}
                    maxW={'350px'}
                    margin={4}
                    p={'1rem'}
                    color="white"
                    // padding="10px 15px"
                    borderRadius="25px"
                >
                    <Text fontFamily={'ubuntu'} fontSize="18px" color="brand.green" marginBottom="10px">
                        CVE 2021-2300
                    </Text>
                    <Flex width="100%" justifyContent="space-between" marginBottom="10px">
                        <Text fontFamily={'ubuntu'} color="brand.green" fontSize="16px">
                            Confidence
                        </Text>
                        <Text fontFamily={'ubuntu'} color="brand.green" fontSize="16px">
                            HIGH
                        </Text>
                    </Flex>

                    <Text fontFamily={'ubuntu'} fontSize="16px" color="white" width="100%" marginBottom="10px">
                        In affected versions of Confluence Server and Data Center, an OGNL injection vulnerability
                        exists that would allow an authenticated user, and in some instances an unauthenticated user, to
                        execute arbitrary code on a Confluence Server or Data Center instance. The ...
                    </Text>

                    <Flex justifyContent={'space-between'} width="100%" mt={'1rem'} flexDirection="row">
                        <Flex
                            width="50%"
                            flexDirection="column"
                            color="white"
                            textDecoration="underline"
                            fontSize="14px"
                            fontFamily={'ubuntu'}
                        >
                            <Text>
                                <a href=" "> Refrence:nvd</a>
                            </Text>
                            <Text>
                                <a href=" "> Credit:Microsoft</a>
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection="row"
                            // color="white"
                            alignItems="flex-end"
                            justifyContent="space-evenly"
                            color="grey.300"
                            //   margin="2%"
                            //   marginLeft="5%"
                            paddingLeft="40px"
                        >
                            <IconButton sx={{
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#19ae70',
                                }
                            }} background={'transparent'} aria-label={'heart'}>
                                <FaHeart size={'20'}/>
                            </IconButton>
                            <IconButton sx={{
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#19ae70',
                                }
                            }} background={'transparent'} aria-label={'link'}>
                                <FaLink size={'20'}/>
                            </IconButton>
                        </Flex>
                    </Flex>
                </Box>

                {/* 3rd box */}
                <Box
                    bg="#333333"
                    minW={'300px'}
                    maxW={'350px'}
                    margin={4}
                    p={'1rem'}
                    color="white"
                    // padding="10px 15px"
                    borderRadius="25px"
                >
                    <Text fontFamily={'ubuntu'} fontSize="18px" color="brand.green" marginBottom="10px">
                        CVE 2021-2300
                    </Text>
                    <Flex width="100%" justifyContent="space-between" marginBottom="10px">
                        <Text fontFamily={'ubuntu'} color="brand.green" fontSize="16px">
                            Confidence
                        </Text>
                        <Text fontFamily={'ubuntu'} color="brand.green" fontSize="16px">
                            HIGH
                        </Text>
                    </Flex>

                    <Text fontFamily={'ubuntu'} fontSize="16px" color="white" width="100%" marginBottom="10px">
                        In affected versions of Confluence Server and Data Center, an OGNL injection vulnerability
                        exists that would allow an authenticated user, and in some instances an unauthenticated user, to
                        execute arbitrary code on a Confluence Server or Data Center instance. The ...
                    </Text>

                    <Flex justifyContent={'space-between'} width="100%" mt={'1rem'} flexDirection="row">
                        <Flex
                            width="50%"
                            flexDirection="column"
                            color="white"
                            textDecoration="underline"
                            fontSize="14px"
                            fontFamily={'ubuntu'}
                        >
                            <Text>
                                <a href=" "> Refrence:nvd</a>
                            </Text>
                            <Text>
                                <a href=" "> Credit:Microsoft</a>
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection="row"
                            // color="white"
                            alignItems="flex-end"
                            justifyContent="space-evenly"
                            color="grey.300"
                            //   margin="2%"
                            //   marginLeft="5%"
                            paddingLeft="40px"
                        >
                            <IconButton sx={{
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#19ae70',
                                }
                            }} background={'transparent'} aria-label={'heart'}>
                                <FaHeart size={'20'}/>
                            </IconButton>
                            <IconButton sx={{
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#19ae70',
                                }
                            }} background={'transparent'} aria-label={'link'}>
                                <FaLink size={'20'}/>
                            </IconButton>
                        </Flex>
                    </Flex>
                </Box>

            </Flex>

            {/* Brand Logos Section --- Google - Microsoft - Apple */}
            <Box display={'flex'}
                 pt={'1rem'}
                 pb={'3rem'}
                 px={'1rem'}
                width="100"
                 flexWrap={'wrap'}
                 alignItems={'center'}
                justifyContent="space-between"
                flexDirection="row"
                marginTop="30px"
                fontFamily={'ubuntu'}
                 position={'relative'}
            >
                <Text margin={'1rem'} fontSize={'18px'} color={'#fff'}>
                    Thanks for the exploitation <br/>
                    infromation!
                </Text>

                <Box margin={'1rem'}>
                    <Image src={'/home/google.png'} width={159} height={52}/>
                </Box>

                <Box margin={'1rem'}>
                    <Image src={'/home/microsoft.png'} width={212} height={46}/>
                </Box>

                <Box margin={'1rem'}>
                    <Image src={'/home/apple.png'} width={61} height={70}/>
                </Box>
            </Box>
        </Container>
    );
};

export default Contribute;
