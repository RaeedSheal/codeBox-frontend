import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Component/Footer";
import NavBar2 from "../Component/NavBar2";
import {
    Image,
    Center,
    Button,
    Textarea,
    Box,
    Wrap,
    WrapItem,
    Grid,
    Text,
    Heading,
} from "@chakra-ui/react";
import axios from "axios";
export default function BoxIdea() {
    const [submit, setsubmit] = React.useState(true);
    const [name, setName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ideaId, setIdeaId] = useState("");

    const [result, setResult] = useState("");
    const [solution, setSolution] = useState(`def solution(a):
       return(a)`);
    // --- Urls
    // const url = "http://localhost:8000/api/randomIdea";
    // const submiturl = `http://localhost:8000/api/submitcode/${ideaId}`;
    const url = "https://codebox-0856.onrender.com/api/randomIdea";
    const submiturl = `https://codebox-0856.onrender.com/api/submitcode/${ideaId}`;
    // --- Urls
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then((res) => {
            setName(res.data.idea.name);
            setInstructions(res.data.idea.instructions);
            setIdeaId(res.data.idea._id);
        });
    }, []);
    const submitAnswer = () => {
        axios.post(submiturl, { code: solution }).then((res) => {
            setResult(res.data.results);
        });
    };
    const navigate = useNavigate();
    const hide = () => {
        navigate("/home");
        setsubmit("");
    };
    const Show = () => {
        console.log("user LogOut");
        navigate("/Box2");
        setsubmit(true);
    };
    return (
        <>
            <NavBar2></NavBar2>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                bgColor="#fdfff0"
            >
                {/* code writing area */}
                <Box>
                    <Center>
                        <Image
                            src="../public/Box1.png "
                            alt="Box"
                            width="300"
                            height="500"
                        ></Image>
                    </Center>
                </Box>
                <Center>
                    <Box p={5} shadow="md" borderWidth="1px">
                        <Textarea
                            placeholder="Code"
                            w="100"
                            h="100"
                            focusBorderColor="#D5C39B"
                            defaultValue="def solution(a): return(a)"
                            onChange={(e) => {
                                setSolution(e.target.value);
                            }}
                        ></Textarea>
                        <Wrap spacing={4}>
                            <WrapItem>
                                <Button
                                    borderRadius={10}
                                    onClick={() => {
                                        submitAnswer();
                                    }}
                                    variant="solid"
                                    bgColor="#D5C39B"
                                    color="#8d622f"
                                    size="sm"
                                >
                                    Submit
                                </Button>
                                <Text>{result}</Text>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Center>

                {/* code instructions */}
                <Center>
                    <Box p={5} shadow="md" borderWidth="1px">
                        <Heading color="#8d622f">{name} </Heading>
                        <Text color="#8d622f">{instructions}</Text>
                        {/* <Text color="#8d622f">Hints</Text> */}
                        <Wrap spacing={4}>
                            <Button
                                borderRadius={10}
                                variant="solid"
                                bgColor="#D5C39B"
                                color="#8d622f"
                                size="sm"
                            >
                                Submit
                            </Button>
                            <WrapItem>
                                {submit != false ? (
                                    <Button
                                        borderRadius={10}
                                        type="submit"
                                        variant="solid"
                                        bgColor="#D5C39B"
                                        color="#8d622f"
                                        size="sm"
                                        onClick={hide}
                                    >
                                        Close
                                    </Button>
                                ) : (
                                    <Button
                                        borderRadius={10}
                                        type="submit"
                                        variant="solid"
                                        bgColor="#D5C39B"
                                        color="#8d622f"
                                        size="sm"
                                        onClick={Show}
                                    >
                                        Show Idea
                                    </Button>
                                )}
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
    );
}
