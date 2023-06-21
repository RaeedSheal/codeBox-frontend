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
import NavBar2 from "../Component/NavBar2";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function EditIdea() {
    const [ideaname, setIdeaname] = useState("");
    const [instructions, setInstructions] = useState("");
    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");
    const [outputA, setOutputA] = useState("");
    const [outputB, setOutputB] = useState("");
    let { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getideabyid/${id}`, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.error) return;
                else {
                    setIdeaname(res.data.idea.name);
                    setInstructions(res.data.idea.instructions);
                    setInputA(res.data.idea.inputA);
                    setInputB(res.data.idea.inputB);
                    setOutputA(res.data.idea.outputA);
                    setOutputB(res.data.idea.outputB);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const EditIdea = () => {
        axios
            .put(
                `http://localhost:8000/api/editidea/${id}`,
                {
                    name: ideaname,
                    instructions: instructions,
                    inputA: inputA,
                    inputB: inputB,
                    outputA: outputA,
                    outputB: outputB,
                },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                navigate("/ViewIdeas");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <>
            <NavBar2></NavBar2>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                bgColor="#fdfff0"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <FcIdea bg="#D5C39B" size="50px" />
                    <Heading color="#8d622f">Edit Idea </Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <Stack
                            spacing={4}
                            p="1rem"
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
                                            setIdeaname(e.target.value)
                                        }
                                        value={ideaname}
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
                                        value={instructions}
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
                                        value={inputA}
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
                                        value={inputB}
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
                                        value={outputA}
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
                                        value={outputB}
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
                                    EditIdea();
                                }}
                            >
                                Edit
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer></Footer>
        </>
    );
}
