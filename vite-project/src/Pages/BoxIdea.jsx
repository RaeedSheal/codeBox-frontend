import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbarlogged from "../Component/Navbarlogged";
import {
    Image,
    Center,
    Button,
    Textarea,
    Box,
    Grid,
    Text,
    Heading,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";
import { FcIdea } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
export default function BoxIdea() {
    const [submit, setsubmit] = React.useState(true);
    const [name, setName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ideaId, setIdeaId] = useState("");
    const [flag, setFlag] = useState(false);

    const [result, setResult] = useState("");
    const [solution, setSolution] = useState(`def solution(a):
       return(a)`);
    // --- Urls
    const url = "http://localhost:8000/api/randomIdea";
    const submiturl = `http://localhost:8000/api/submitcode/${ideaId}`;
    // const url = "https://codebox-0856.onrender.com/api/randomIdea";
    // const submiturl = `https://codebox-0856.onrender.com/api/submitcode/${ideaId}`;
    // --- Urls
    useEffect(() => {
        axios
            .get(url, { withCredentials: true })
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data.error);
                } else {
                    setName(res.data.idea.name);
                    setInstructions(res.data.idea.instructions);
                    setIdeaId(res.data.idea._id);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const submitAnswer = () => {
        axios.post(submiturl, { code: solution }).then((res) => {
            setResult(res.data.results);
        });
        setFlag(true);
    };
    const navigate = useNavigate();
    const hide = () => {
        navigate("/home");
        setsubmit("");
    };

    return (
        <>
            {/* Nav */}
            <Navbarlogged></Navbarlogged>
            {/*  */}
            <Grid
                templateColumns={{ base: "1fr", md: "3fr 5fr" }}
                bgColor="#fdfff0"
                h={"80vh"}
            >
                <Box>
                    <Center>
                        <Image
                            src="../public/Box1.png "
                            alt="Box"
                            height="700"
                        ></Image>
                    </Center>
                </Box>
                <Box m={5}>
                    {/* code instructions start */}
                    <Box p={5} shadow="md">
                        <Flex mb={2}>
                            <FcIdea bg="#D5C39B" size="40px" />
                            <Heading ml={2} color="#8d622f">
                                {" "}
                                {name}{" "}
                            </Heading>
                        </Flex>
                        <Text color="#8d622f" mb={2}>
                            {instructions}
                        </Text>
                        {/* Hint */}
                        <Accordion my={2} allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            color="#8d622f"
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Hint
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel color="#8d622f" pb={4}>
                                    Hint
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        {/* <Text color="#8d622f">Hints</Text> */}
                        <Flex justifyContent={"flex-end"} gap={2}>
                            <Button
                                borderRadius={10}
                                variant="solid"
                                bgColor="#D5C39B"
                                color="#8d622f"
                                size="sm"
                                _hover={{ bg: "#8d622f", color: " white" }}
                            >
                                Submit
                            </Button>

                            <Button
                                borderRadius={10}
                                type="submit"
                                variant="solid"
                                bgColor="#D5C39B"
                                color="#8d622f"
                                size="sm"
                                onClick={hide}
                                _hover={{
                                    bg: "#8d622f",
                                    color: " white",
                                }}
                            >
                                Close
                            </Button>
                        </Flex>
                    </Box>
                    {/* code instructions end */}

                    {/* code writing area start */}
                    <Box p={5} shadow="md" borderWidth="1px">
                        <Heading color="#8d622f" mb={2}>
                            Write your code and enjoy !{" "}
                        </Heading>
                        <Textarea
                            placeholder="Code"
                            h="300"
                            resize={"none"}
                            focusBorderColor="#D5C39B"
                            defaultValue="def solution(a): return(a)"
                            onChange={(e) => {
                                setSolution(e.target.value);
                            }}
                        ></Textarea>
                        <Flex justifyContent={"space-between"} mt={3}>
                            <Box>
                                {flag && (
                                    <Flex>
                                        <AiFillCheckCircle
                                            size={"25px"}
                                            color="green"
                                        />
                                        <Box ml={2}>{result} out of 2</Box>{" "}
                                    </Flex>
                                )}
                            </Box>

                            <Box>
                                <Button
                                    borderRadius={10}
                                    onClick={() => {
                                        submitAnswer();
                                    }}
                                    variant="solid"
                                    bgColor="#D5C39B"
                                    color="#8d622f"
                                    size="sm"
                                    _hover={{ bg: "#8d622f", color: " white" }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                    {/* code writing area end */}
                </Box>
            </Grid>
            <Footer></Footer>
        </>
    );
}
