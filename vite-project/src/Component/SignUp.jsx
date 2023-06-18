// import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,

    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link} from "react-router-dom";
  import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

export default function SignUp() {
 
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
        <NavBar  LOGIN='Log in'></NavBar>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('primary.800', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color={'#8d622f'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'#D5C39B'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              {/* <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}
              <Box>
                <FormControl id="lastName">
                  <FormLabel> Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email"  isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Link to='/Login'>
            <Stack spacing={10} pt={2}>
              
              <Button
                loadingText="Submitting"
                size="lg"
                // bg={'blue.400'}
                // color={'white'}
                bgColor='#D5C39B'
                color='#8d622f'
                _hover={{
                  bg: 'blue.500',
                  
                }}>
                Sign up
              </Button>
             
            </Stack>
            </Link>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to='/Login' color={'#8d622f'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex> 
    <Footer></Footer>
    </div>
  )
}
