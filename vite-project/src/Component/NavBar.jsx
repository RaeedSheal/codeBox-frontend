import React from 'react'
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Image
  } from "@chakra-ui/react";
  import { AiOutlineMenu } from "react-icons/ai";
// import  logo from '../Component/Logo.png'
import { Link} from "react-router-dom";
export default function NavBar(props) {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    const [user , setUser] = React.useState(false)
    function login(){
      setUser(true)
    }
  return (
    <>
        <React.Fragment>
      <Box
        bg={bg}
        w="7xl"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        // bgColor='#dfc29f'
        // bgColor='#d9c9a5'
        // bgColor='#212d28'
        // background= "rgb(217,201,165)"
        background="linear-gradient(90deg, rgba(217,201,165,1) 24%, rgba(253,255,240,1) 85%)"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="codeBox Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <logo></logo> */}
            
          
            </chakra.a>
            {/* <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              codeBox
            </chakra.h1> */}
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="#D5C39B"
              
              display={{ base: "none", md: "inline-flex" }}
            >
              {/* <Button variant="ghost" color="#8d622f">Features</Button>
              <Button variant="ghost" color="#8d622f">Pricing</Button> */}
              <Button variant="ghost"  color="#8d622f">Home</Button>
              
              {/* <Link to='/SignUp'>
              <Button variant="ghost" color="#8d622f">Sign Up</Button>
              </Link> */}
             { user!=false?<Button variant="ghost" color="#8d622f"><Link to='/SignUp'>{props.SIGNUP}</Link></Button>:
              
              <Button variant="ghost" color="#8d622f" onClick={login}><Link to='/Login'>{props.LOGIN}</Link></Button>}
              
              {/* <Button colorScheme='whiteAlpha' color="#8d622f">WhiteAlpha</Button> */}
            </HStack>
            {/* <Image src='../public/logoBox2.png' h="100px" w='100px'></Image> */}
            <Image src='../public/logoBox3.png' h={"70px"} ></Image>
            {/* <Image src='https://i.pinimg.com/56"4x/ef/af/f2/efaff2736a4c6f826bc8ba7c1469b071.jpg' h="150px" w='150px' /> */}
            {/* <Button colorScheme="brand" size="sm">
              Get Started
            </Button> */}
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              {/* <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack> */}
            </Box>
          </HStack>
        </Flex>
      </Box>
    </React.Fragment>
    </>
  )
}
