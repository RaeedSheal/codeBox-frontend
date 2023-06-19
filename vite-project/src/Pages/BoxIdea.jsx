import React from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../Component/Footer'
import NavBar2 from '../Component/NavBar2'
import { Image,Center,Button,Flex,Textarea,Box,Wrap,WrapItem} from '@chakra-ui/react'
export default function BoxIdea() {
    const [submit , setsubmit] = React.useState(true)

    const navigate = useNavigate()
        const hide = ()=>{
            console.log("user SignUp");
            navigate("/home")
            setsubmit("")
    
        }
        const Show = ()=>{
            console.log("user LogOut");
            navigate("/Box2") 
            setsubmit(true)
    
        }
  return (
    <>
<NavBar2></NavBar2>
<Flex
 bgColor='#fdfff0'
>
<Center>
<Image src='../public/Box1.png ' alt="Box"  width="300" height="500"></Image>
</Center>
<Center>
    <Box p={5} shadow='md' borderWidth='1px'>
<Textarea placeholder='Code' w='100' h='100' focusBorderColor='#D5C39B'></Textarea>
<Wrap spacing={4}> 
<WrapItem>
<Button borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" >Submit</Button>
         </WrapItem>
         <WrapItem>
{
        submit != false ?
        
         <Button   borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm"  onClick={hide}>Close</Button>
         :<Button  
          borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" 
         
         onClick={Show}>Show Idea</Button>
     }
     </WrapItem>
     </Wrap>
</Box>
</Center>
<Center>
    <Box p={5} shadow='md' borderWidth='1px'>
<Textarea placeholder='Code' w='100' h='100' focusBorderColor='#D5C39B'></Textarea>
<Wrap spacing={4}> 
<WrapItem>
<Button borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" >Submit</Button>
         </WrapItem>
         <WrapItem>

     </WrapItem>
     </Wrap>
</Box>
</Center>
{/* <Center >
{
        submit != false ?
        
         <Button   borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm"  onClick={hide}>Close</Button>
         :<Button  
          borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" 
         
         onClick={Show}>Show Idea</Button>
     }
     </Center> */}
     </Flex>
<Footer></Footer>
    </>
  )
}
