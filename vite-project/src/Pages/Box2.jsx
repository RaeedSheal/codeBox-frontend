import React from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../Component/Footer'
import NavBar2 from '../Component/NavBar2'
import { Image,Center,Button,Textarea,Stack,Card,CardBody,Text,Heading,CardFooter} from '@chakra-ui/react'
export default function Box2() {

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
<Center>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='../public/Box1.png ' alt="Box"
    // alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The Idea</Heading>

      <Textarea py='2'>
      
      </Textarea>
    </CardBody>

    <CardFooter>
    {
        submit != false ?
        
         <Button 
       
         variant='solid'  type="submit"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" 
         onClick={hide}>Close</Button>
         :<Button  
         variant='solid'  type="submit"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" 
         
         onClick={Show}>Show Idea</Button>
     }
    </CardFooter>
  </Stack>
</Card>
</Center>
{/* <Center>
<Textarea></Textarea>
</Center> */}
{/* <Center>

<Image src='../public/Box1.png ' alt="Box"  width="300" height="500"></Image>
</Center> */}

<Center>
{/* {
        submit != false ?
        
         <Button 
       
         variant='solid'  type="submit"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" 
         onClick={hide}>Close</Button>
         :<Button  
         variant='solid'  type="submit"
         bgColor='#D5C39B'
         color='#8d622f'
         size="sm" 
         
         onClick={Show}>Show Idea</Button>
     } */}
     </Center>
<Footer></Footer>


    </>
  )
}
