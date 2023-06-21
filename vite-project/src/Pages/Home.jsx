import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Component/Footer";
import NavBar2 from "../Component/NavBar2";
import { Image, Center, Button, Flex, Grid, Box,} from "@chakra-ui/react";
import { inView } from "framer-motion";
// import Cookies from "universal-cookie";

export default function Home() {
    const [submit, setsubmit] = React.useState(false);
    // const cookie = new Cookies();
    const navigate = useNavigate();
    const hide = () => {
        console.log("user SignUp");
        navigate("/home");
        setsubmit("");
    };
    const Show = () => {
        // Cookies not finished yet
        navigate("/Box");
        setsubmit(true);
    };
    // if (!cookie.get("access_token")) {
    //     navigate("/");
    // } else
    return (
        <>
            <NavBar2></NavBar2>
            <Flex h={{base:'69vh',md:'90vh'}} bgColor="#fdfff0" direction={'column'}>
                <Grid templateColumns={{ base: "1fr", md: "0.35fr 0.45fr" }} marginTop='5em'>
                <Center bgColor="#fdfff0">
                    <Image
                        src="../public/close Box.png "
                        alt="Box"
                        width="200px"
                       boxShadow={9}
                    ></Image>
                   
                </Center>
                <Center bgColor="#fdfff0">
             <Box bgColor="#fdfff0">
                   
                <Image
                marginTop={2}
                        src="../public/instructions.png "
                        alt="instructions"
                        width="500px"
                        marginBottom={8}
                    ></Image>
                    </Box>
                    </Center>
              
                </Grid>
              
            
                    
                 
                    
            
         

            <Center>

                
            <Image 
                
                 src="../public/Button open.png "
                 alt="Box"
                 width="300px"
                 // height="80"
                 cursor='pointer'
                 onClick={Show}
                 ></Image> 
                
                 </Center>
            </Flex>
            <Footer/>    
            
        </>
    );
}
