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
import NavBar from '../Component/NavBar'
export default function LandingPage() {
  return (
    <div>
      <NavBar></NavBar>
         <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      mt={15}
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
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
        <Text>React landing page with Chakra UI</Text>
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
         <Text>This is the subheader section where you describe the basic benefits of your product</Text>
        </Heading>
        <Link to='/SignUp'>
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
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src='https://i.pinimg.com/564x/ef/af/f2/efaff2736a4c6f826bc8ba7c1469b071.jpg' size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
<Footer></Footer>
    </div>
  )
}

// Hero.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
//   ctaText: PropTypes.string,
//   ctaLink: PropTypes.string,
// }

// Hero.defaultProps = {
//   title: "React landing page with Chakra UI",
//   subtitle:
//     "This is the subheader section where you describe the basic benefits of your product",
//   image: "<https://source.unsplash.com/collection/404339/800x600>",
//   ctaText: "Create your account now",
//   ctaLink: "/signup",
// }