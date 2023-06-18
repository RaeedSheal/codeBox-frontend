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
  FormControl,
  FormHelperText,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link} from "react-router-dom";
import Footer from '../Component/Footer'
import NavBar2 from '../Component/NavBar2'
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function SingnUp2() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <div>
 <NavBar2 SIGNUP='Sign up'></NavBar2>
         <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
    //   backgroundColor="primary.800"
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
        {/* <Avatar bg="#D5C39B" /> */}
        <Heading color="#8d622f"> Sign up</Heading>
        <Text fontSize={'lg'} color={'#D5C39B'}>
            to enjoy all of our cool features ✌️
          </Text>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
            //   backgroundColor="whiteAlpha.900"
            bgColor='#E1E3D9'
              boxShadow="md"
            >
                 <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#8d622f" />}
                  />
                  <Input type="email" placeholder="Name" 
                  _placeholder={{ color: '#212D28' }}
                  focusBorderColor='#D5C39B'
                isInvalid errorBorderColor='#FFFEFE'
                  />
                </InputGroup>
              </FormControl>
                 <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#8d622f" />}
                  />
                  <Input type="email" placeholder="User Name" 
                  _placeholder={{ color: '#212D28' }}
                  focusBorderColor='#D5C39B'
                  isInvalid errorBorderColor='#FFFEFE'
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#8d622f" />}
                  />
                  <Input type="email" placeholder="email address" 
                   _placeholder={{ color: '#212D28' }}
                   focusBorderColor='#D5C39B'
                   isInvalid errorBorderColor='#FFFEFE'
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
                    focusBorderColor='#D5C39B'
                    isInvalid errorBorderColor='#FFFEFE'
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm"   color='#8d622f'   bgColor='#D5C39B' onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right" color="#212D28">
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
              >
                SignUp
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color='#212D28'>
      Already a user?{" "}
        <Link  to='/Login' color="teal.500" href="#">
        Login
        </Link>
      </Box>
    </Flex>
    <Footer></Footer>
    </div>
  )
}
