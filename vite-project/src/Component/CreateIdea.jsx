import {
    Flex,
    Heading,
    Input,
    Button,
    Box,
    FormControl,
    Stack,
    Textarea,
    InputGroup,
    InputLeftElement,

  
  } from "@chakra-ui/react";
//   import { Link} from "react-router-dom";
import { FcIdea } from "react-icons/fc";
import { BiRename } from "react-icons/bi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbSquareLetterA,TbSquareLetterB } from "react-icons/tb";
  import Footer from '../Component/Footer'
  import NavBar2 from '../Component/NavBar2'
  

export default function CreateIdea() {
  return (
    <>
 <NavBar2></NavBar2>
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
        <FcIdea bg="#D5C39B" size='50px'/>
        <Heading color="#8d622f" >Create Idea </Heading>
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
                    children={<BiRename color="#8d622f" />}
                  />
                  <Input type="text" placeholder="Idea Name" 
                   _placeholder={{ color: '#212D28' }}
                   focusBorderColor='#8d622f'
                   isInvalid errorBorderColor='#D5C39B'
                //    onChange={(e)=>setEmail(e.target.value)}
                   />
               
               </InputGroup>
              </FormControl>
              <FormControl>
              <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineIntegrationInstructions  color="#8d622f" />}
                  />
                <Textarea type="text" placeholder="    Instructions" 
                 _placeholder={{ color: '#212D28' }}
                 focusBorderColor='#8d622f'
                 isInvalid errorBorderColor='#D5C39B'
              //    onChange={(e)=>setEmail(e.target.value)}
                 />
             
             </InputGroup>
            </FormControl>
            <FormControl>
            <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbSquareLetterA color="#8d622f" />}
                  />
                <Input type="text" placeholder="Input A" 
                 _placeholder={{ color: '#212D28' }}
                 focusBorderColor='#8d622f'
                 isInvalid errorBorderColor='#D5C39B'
              //    onChange={(e)=>setEmail(e.target.value)}
                 />
                 </InputGroup>
            </FormControl>
            <FormControl>
            <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbSquareLetterB color="#8d622f" />}
                  />
                <Input type="text" placeholder="Input B" 
                 _placeholder={{ color: '#212D28' }}
                 focusBorderColor='#8d622f'
                 isInvalid errorBorderColor='#D5C39B'
              //    onChange={(e)=>setEmail(e.target.value)}
                 />
                 </InputGroup>
            </FormControl>
            <FormControl>
            <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbSquareLetterA color="#8d622f" />}
                  />
                <Input type="text" placeholder="Output A" 
                 _placeholder={{ color: '#212D28' }}
                 focusBorderColor='#8d622f'
                 isInvalid errorBorderColor='#D5C39B'
              //    onChange={(e)=>setEmail(e.target.value)}
                 />
                 </InputGroup>
            </FormControl>
            <FormControl>
            <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbSquareLetterB color="#8d622f" />}
                  />
                <Input type="text" placeholder="Output B" 
                 _placeholder={{ color: '#212D28' }}
                 focusBorderColor='#8d622f'
                 isInvalid errorBorderColor='#D5C39B'
              //    onChange={(e)=>setEmail(e.target.value)}
                 />
                 </InputGroup>
            </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                bgColor='#D5C39B'
                color='#8d622f'
                width="full"
                _hover={{ bg: "#8d622f", color: " white" }}
                // onClick={()=>{handleFormSubmit()}}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    <Footer></Footer>
    </>
  )
}
