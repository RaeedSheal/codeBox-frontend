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
import { TbSquareLetterA, TbSquareLetterB } from "react-icons/tb";
import Footer from "../Component/Footer";
import Navbaradmin from "../Component/Navbaradmin";
import { useState } from "react";
import axios from "axios";

export default function CreateIdea() {
    const [name, setName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");
    const [outputA, setOutputA] = useState("");
    const [outputB, setOutputB] = useState("");
    // --- URL ---
    const url = "http://localhost:8000/api/createidea";
    // --- URL ---
    const handleFormSubmit = () => {
        axios
            .post(
                url,
                {
                    name: name,
                    instructions: instructions,
                    inputA: inputA,
                    inputB: inputB,
                    outputA: outputA,
                    outputB: outputB,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res);
                console.log("User Signed up");
            });
    };

    return (
        <>
            <Navbaradmin></Navbaradmin>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                // backgroundColor="primary.800"
                bgColor="#fdfff0"
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
                    <FcIdea bg="#D5C39B" size="50px" />
                    <Heading color="#8d622f">Create Idea </Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            // backgroundColor="whiteAlpha.900"
                            bgColor="#fdfff0"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BiRename color="#8d622f" />}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Idea Name"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <MdOutlineIntegrationInstructions color="#8d622f" />
                                        }
                                    />
                                    <Textarea
                                        type="text"
                                        placeholder="    Instructions"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setInstructions(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <TbSquareLetterA color="#8d622f" />
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Input A"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setInputA(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <TbSquareLetterB color="#8d622f" />
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Input B"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setInputB(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <TbSquareLetterA color="#8d622f" />
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Output A"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setOutputA(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <TbSquareLetterB color="#8d622f" />
                                        }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Output B"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setOutputB(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                bgColor="#D5C39B"
                                color="#8d622f"
                                width="full"
                                _hover={{ bg: "#8d622f", color: " white" }}
                                onClick={() => {
                                    handleFormSubmit();
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer></Footer>
        </>
    );
}
