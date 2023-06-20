// import React from 'react'
import Footer from './Footer'
import NavBar2 from './NavBar2'
import { Flex,Heading,Button,ButtonGroup} from '@chakra-ui/react'
import { Link} from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
export default function GitHubLink() {
  return (
    <>
<NavBar2></NavBar2>
<Flex
      flexDirection="column"
      width="100wh"
      height="60vh"
      bgColor='#fdfff0'
      justifyContent="center"
      alignItems="center"
    >
<AiFillGithub  size='50px' color="#8d622f"/>
<Heading color="#8d622f" py='10px'>GitHub codeBox team:</Heading>
<ButtonGroup gap='4'>
<Link to='https://github.com/Reema600'> <Button
rightIcon={<AiFillGithub />}
                borderRadius='50px'
                type="submit"
                variant="solid"
                bgColor='#D5C39B'
                color='#8d622f'
                width="full"
                _hover={{ bg: "#8d622f", color: " white" }}
              >
                Reema Abdulla
              </Button></Link>

<Link to='https://github.com/RaeedSheal'><Button
rightIcon={<AiFillGithub />}
                borderRadius='50px'
                type="submit"
                variant="solid"
                bgColor='#D5C39B'
                color='#8d622f'
                width="full"
                _hover={{ bg: "#8d622f", color: " white" }}
              >
                Raeed Sheal
              </Button></Link>
              </ButtonGroup>
        </Flex>
<Footer></Footer>
    </>
  )
}
