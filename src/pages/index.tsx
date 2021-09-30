import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import Header from "../components/layout/Header";
import Home from "../components/home/Home";
import Contribute from "../components/home/Contribute";
import About from "../components/home/About";
import Post from "../components/home/Post";
const Index = () => (
  <Box bg={"#222222"}>
    {/* This is the hero section. */}
    <Box pb={"8rem"} display={"grid"} pos={"relative"} minH={"100vh"}>
      {/* We're using this to set the background images. --- Here we're setting the background image */}

      <Box gridColumn={"1/-1"} gridRow={"1/-1"} width={"100%"} height={"100%"}>
        <Image src={"/home/heroBg.png"} layout={"fill"} objectFit={"cover"} />
      </Box>

      <Box zIndex={5} height={"100%"} gridColumn={"1/-1"} gridRow={"1/-1"}>
        <Container maxWidth={"xxl"} height={"100%"} zIndex={10}>
          <Header />
          <Home />
        </Container>
      </Box>
    </Box>

    {/*  Other sections after header*/}
    <Box width={"100%"}>
      <Contribute />
      <About />
      <Post />
    </Box>
  </Box>
);

export default Index;
