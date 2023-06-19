
// import React from 'react'
import { Link } from "react-router-dom"
// import PropTypes from "prop-types"
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  
} from "@chakra-ui/react"
import Footer from '../Component/Footer'
import NavBar2 from '../Component/NavBar2'
export default function LandingPage2() {
  return (
    <div>
         <NavBar2></NavBar2>
 

 <Flex
align="center"
justify={{ base: "center", md: "space-around", xl: "space-between" }}
direction={{ base: "column-reverse", md: "row" }}
wrap="no-wrap"
minH="70vh"
px={8}
// mb={16}
// mt={15}
bgColor='#fdfff0'
//  bgColor='#d9c9a5'
//   {...rest}
>
<Stack
spacing={4}
w={{ base: "80%", md: "40%" }}
align={["center", "center", "flex-start", "flex-start"]}
>
<Heading
  as="h1"
  size="xl"
  fontWeight="bold"
  color="#8d622f"
  textAlign={["center", "center", "left", "left"]}
>
<Text>codeBox game</Text>
</Heading>
<Heading
  as="h2"
  size="md"
  color="#212D28"
  opacity="0.8"
  fontWeight="normal"
  lineHeight={1.5}
  textAlign={["center", "center", "left", "left"]}
>
 <Text>Start improving your technology skills with codeBox game.</Text>
</Heading>
<Link to='/SignUp2'>
  <Button
    // colorScheme="primary"
    borderRadius="8px"
    py="4"
    px="4"
    lineHeight="1"
    size="md"
    // color='black'
    bgColor='#D5C39B'
        color='#8d622f'
        width="full"
  >
Sign up
  </Button>
</Link>
<Text
  fontSize="xs"
  mt={2}
  textAlign="center"
  color="#8d622f"
  opacity="0.6"
>
  codeBox team.
</Text>
</Stack>
<Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
<Image src='../public/Logo.png'></Image>
{/* <Image src='https://i.pinimg.com/564x/ef/af/f2/efaff2736a4c6f826bc8ba7c1469b071.jpg' size="100%" rounded="1rem" shadow="2xl" /> */}
</Box>
</Flex>
<Footer></Footer>
    </div>
  )
}
