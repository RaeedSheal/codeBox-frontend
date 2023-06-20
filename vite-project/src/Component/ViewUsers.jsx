
import {
    Heading,
    Button,
    Box,
    Stack,
    StackDivider,
    CardHeader,
    Card,
    CardBody,
    Text,
    Center,
    CardFooter
  } from "@chakra-ui/react";
//   import { Link} from "react-router-dom";
// import { FcIdea } from "react-icons/fc";
  import Footer from '../Component/Footer'
  import NavBar2 from '../Component/NavBar2'
export default function ViewUsers() {
  return (
    <>
<NavBar2></NavBar2>
 <Center paddingTop='20px' bgColor='#fdfff0'>

        <Heading color="#8d622f" >All Users   </Heading>
        {/* <FcIdea bg="#D5C39B" size='50px'/> */}
        </Center>
 <Stack spacing='8' bgColor='#fdfff0' >
 <Center paddingTop='100px'  paddingBottom='400px' paddingLeft='20px' paddingRight='20px' gap={6}>
   <Card >
  <CardHeader bgColor='#fdfff0'>
    
    <Heading size='md' color="#8d622f">User</Heading>
  </CardHeader>

  <CardBody bgColor='#fdfff0'>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase' color="#8d622f">
        Name :
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        name
        </Text>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        User Name :
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        user name
        </Text>
  
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Email :
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        email
        </Text>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Password :
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        password
        </Text>
       
      </Box>
     
    </Stack>
  </CardBody>
  <CardFooter bgColor='#fdfff0' gap={'10px'}>

  <Button       borderRadius={10}
   type="submit"
    variant="solid"
    bgColor="#D5C39B"
    color="#8d622f"
    w={"full"}
    _hover={{ bg: "#8d622f", color: " white" }}
>delete </Button> <br/>
</CardFooter>
</Card>

</Center>

</Stack>
    <Footer></Footer>
    </>
  )
}
