// import React from 'react'
import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar2 from "../Component/NavBar2";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

// Components
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [flag, setFlag] = useState(false);
    // const [login, setLogin] = useState(localStorage.getItem("loged") === "true");
    const handleShowClick = () => setShowPassword(!showPassword);
    const Navigate = useNavigate();
    // const url = "https://codebox-0856.onrender.com/api/loginuser";
    const url = "http://localhost:8000/api/loginuser";

    function handleFormSubmit() {
        setEmailError("");
        setPasswordError("");
        setFlag(false);

        let hasError = true;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
            setEmailError("Email should be correct format");
            hasError = false;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(password)) {
            setPasswordError(
                "Password should be at least 8 characters 1 uppercase 1 lowercase and at least 1 number"
            );
            hasError = false;
        }

        if (hasError) {
            axios
                .post(
                    url,
                    {
                        email: email,
                        password: password,
                    },
                    { withCredentials: true }
                )
                .then((res) => {
                    console.log(res);
                    Navigate("/Home");
                })
                .catch((e) => {
                    console.log(e);
                });
            // setLogin(true);
        } else {
            setFlag(true);
        }
    }

    return (
        <div>
            <NavBar2></NavBar2>
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
                    <Avatar bg="#D5C39B" />
                    <Heading color="#8d622f">Welcome</Heading>
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
                                        children={
                                            <CFaUserAlt color="#8d622f" />
                                        }
                                    />
                                    <Input
                                        type="email"
                                        placeholder="email address"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </InputGroup>
                                <Box>
                                    {flag && (
                                        <Alert
                                            bg="#fee8e7"
                                            border={"1px"}
                                            borderColor={"#f44336"}
                                            borderRadius={"8px"}
                                            my={1}
                                        >
                                            <AlertIcon color="#f44336" />
                                            {emailError}
                                        </Alert>
                                    )}
                                </Box>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="#8d622f" />}
                                    />
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        _placeholder={{ color: "#212D28" }}
                                        focusBorderColor="#8d622f"
                                        isInvalid
                                        errorBorderColor="#D5C39B"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button
                                            h="1.75rem"
                                            size="sm"
                                            color="#8d622f"
                                            bgColor="#D5C39B"
                                            _hover={{
                                                bg: "#8d622f",
                                                color: " white",
                                            }}
                                            onClick={handleShowClick}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box>
                                    {flag && (
                                        <Alert
                                            bg="#fee8e7"
                                            border={"1px"}
                                            borderColor={"#f44336"}
                                            borderRadius={"8px"}
                                            my={1}
                                        >
                                            <AlertIcon color="#f44336" />
                                            {passwordError}
                                        </Alert>
                                    )}
                                </Box>
                                <FormHelperText textAlign="right">
                                    <Link to="/ResetPassword">
                                        forgot password?
                                    </Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                // colorScheme="teal"
                                bgColor="#D5C39B"
                                // _hover={bgColor=""}
                                color="#8d622f"
                                width="full"
                                _hover={{ bg: "#8d622f", color: " white" }}
                                onClick={() => {
                                    handleFormSubmit();
                                }}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
                <Box color="#212D28">
                    New to us?{" "}
                    <Link to="/SignUp2" color="teal.500" href="#">
                        Sign Up
                    </Link>
                </Box>
            </Flex>
            <Footer></Footer>
        </div>
    );
}
