// import React from 'react'
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link} from "react-router-dom";
import Footer from '../Component/Footer'
import NavBar2 from '../Component/NavBar2'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
  
  return (
    <div>
        <NavBar2 SIGNUP='Sign up'></NavBar2>
         <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      // backgroundColor="primary.800"
      bgColor='#fdfff0'
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        // color='primary.800'
      >
        <Avatar bg="#D5C39B" />
        <Heading color="#8d622f">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              // backgroundColor="whiteAlpha.900"
              bgColor='#fdfff0'
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#8d622f" />}
                  />
                  <Input type="email" placeholder="email address" 
                   _placeholder={{ color: '#212D28' }}
                   focusBorderColor='#8d622f'
                   isInvalid errorBorderColor='#D5C39B'
                   />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="#8d622f" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    _placeholder={{ color: '#212D28' }}
                    focusBorderColor='#8d622f'
                    isInvalid errorBorderColor='#D5C39B'
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" color='#8d622f' bgColor='#D5C39B'
                    _hover={{ bg: "#8d622f", color: " white" }}
                     onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                // colorScheme="teal"
                bgColor='#D5C39B'
                // _hover={bgColor=""}
                color='#8d622f'
                width="full"
                _hover={{ bg: "#8d622f", color: " white" }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box  color='#212D28'>
        New to us?{" "}
        <Link  to='/SignUp2' color="teal.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
    <Footer></Footer>
    </div>
  )
}


