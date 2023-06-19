import React from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../Component/Footer'
import NavBar2 from '../Component/NavBar2'
import { Image,Center,Button,Textarea,Box,Wrap,WrapItem,Grid,Text,Heading} from '@chakra-ui/react'
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
<Grid  templateColumns='repeat(3, 1fr)' 
 bgColor='#fdfff0'
>
    {/* code writing area */}
<Box>
<Center>
<Image src='../public/Box1.png ' alt="Box"  width="300" height="500"></Image>
</Center>
</Box>
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
         
     </Wrap>
</Box>
</Center>

{/* code instructions */}
<Center>
    <Box p={5} shadow='md' borderWidth='1px'>
{/* <Textarea placeholder='Code' w='100' h='100' focusBorderColor='#D5C39B'></Textarea> */}
<Heading color="#8d622f">Idea Title </Heading>
<Text color="#8d622f">Idea content</Text>
<Text color="#8d622f">Hints</Text>
<Wrap spacing={4}> 
<Button borderRadius={10}
         type="submit"
         variant="solid"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" >Submit</Button>
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
     </Grid>
<Footer></Footer>
    </>
  )
}
