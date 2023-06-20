import {
    Flex,
    Heading,
    Button,
    Box,
    Stack,
    StackDivider,
    CardHeader,
    Card,
    CardBody,
    Text,
    Grid,
    Wrap,
    GridItem,
    Center,
    HStack,
    CardFooter
  } from "@chakra-ui/react";
  import { Link} from "react-router-dom";
import { FcIdea } from "react-icons/fc";
  import Footer from '../Component/Footer'
  import NavBar2 from '../Component/NavBar2'

export default function ViewIdeas() {
  return (
    <>
 <NavBar2></NavBar2>
 <Center paddingTop='20px' bgColor='#fdfff0'>

        <Heading color="#8d622f" >All Idea   </Heading>
        <FcIdea bg="#D5C39B" size='50px'/>
        </Center>
 <Stack spacing='8' bgColor='#fdfff0' >
 <Center paddingTop='100px'  paddingBottom='400px' paddingLeft='20px' paddingRight='20px' gap={6}>
   <Card >
  <CardHeader bgColor='#fdfff0'>
    
    <Heading size='md' color="#8d622f">Idea Name</Heading>
  </CardHeader>

  <CardBody bgColor='#fdfff0'>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase' color="#8d622f">
        Instructions
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Instructions.
        </Text>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Input A
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Input A.
        </Text>
  
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Input B
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Input B.
        </Text>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Output A
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Output A.
        </Text>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Output B
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Output B.
        </Text>
       
      </Box>
    </Stack>
  </CardBody>
  <CardFooter bgColor='#fdfff0' gap={'10px'}>
  <Button  
  borderRadius={10}
   type="submit"
    variant="solid"
    bgColor="#D5C39B"
    color="#8d622f"
    w={"full"}
    _hover={{ bg: "#8d622f", color: " white" }}
   
>Edit </Button> <br/>
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
<Card >
  <CardHeader bgColor='#fdfff0'>
    
    <Heading size='md' color="#8d622f">Idea Name</Heading>
  </CardHeader>

  <CardBody bgColor='#fdfff0'>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase' color="#8d622f">
        Instructions
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Instructions.
        </Text>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Input A
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Input A.
        </Text>
  
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Input B
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Input B.
        </Text>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Output A
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Output A.
        </Text>
       
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'  color="#8d622f">
        Output B
        </Heading>
        <Text pt='2' fontSize='sm' color="#D5C39B">
        Output B.
        </Text>
       
      </Box>
    </Stack>
  </CardBody>
  <CardFooter bgColor='#fdfff0' gap={'10px'}>
  <Button      borderRadius={10}
   type="submit"
    variant="solid"
    bgColor="#D5C39B"
    color="#8d622f"
    w={"full"}
    _hover={{ bg: "#8d622f", color: " white" }}
>Edit </Button> <br/>
  <Button      borderRadius={10}
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
