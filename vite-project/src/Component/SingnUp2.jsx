// import React from 'react'
import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    InputLeftElement,
    chakra,
    Box,
    FormControl,
    InputRightElement,
    Text,
    Alert,
    AlertIcon,
    VStack,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar2 from "../Component/NavBar2";
import { BiUserPin } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CBiUserPin = chakra(BiUserPin);
const CMdEmail = chakra(MdEmail);
export default function SingnUp2() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [flagName, setFlagName] = useState(false);
    const [flagUsername, setFlagUsername] = useState(false);
    const [flagPassword, setFlagPassword] = useState(false);
    const [flagEmail, setFlagEmail] = useState(false);

    const [login, setLogin] = useState(
        localStorage.getItem("loged") === "true"
    );
    const handleShowClick = () => setShowPassword(!showPassword);
    const Navigate = useNavigate();
    // const url = "https://codebox-0856.onrender.com/api/createuser";
    const url = "http://localhost:8000/api/createuser";

    function handleFormSubmit() {
        setNameError("");
        setUserNameError("");
        setEmailError("");
        setPasswordError("");

        let hasError = true;

        if (name.length < 3) {
            setNameError("Name should be at least 3 characters");
            setFlagName(true);
            hasError = true;
        }
        if (userName.length < 3) {
            setUserNameError("Name should be at least 3 characters");
            setFlagUsername(true);
            hasError = true;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
            setEmailError("Email should be correct format");
            setFlagEmail(true);
            hasError = false;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(password)) {
            setPasswordError(
                "Password should be at least 8 characters 1 uppercase 1 lowercase and at least 1 number"
            );
            setFlagPassword(true);
            hasError = false;
        }

        if (hasError) {
            axios.post(url, {
                username: userName,
                name: name,
                email: email,
                password: password,
            });
            console.log("User Signed up");
            setLogin(true);
            Navigate("/Login");
        }
    }
    return (
        <div>
            <NavBar2 SIGNUP="Sign up"></NavBar2>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                bgColor="#fdfff0"
                justifyContent="center"
                alignItems="center"
            >
                <VStack
                    spacing={4}
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading color="#8d622f"> Sign up</Heading>
                    <Text fontSize={"lg"} color={"#D5C39B"}>
                        to enjoy all of our cool features ✌️
                    </Text>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form>
                            <VStack p="1rem" bgColor="#fdfff0" boxShadow="md">
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={
                                                <CFaUserAlt color="#8d622f" />
                                            }
                                        />
                                        <Input
                                            type="name"
                                            placeholder="Name"
                                            _placeholder={{ color: "#212D28" }}
                                            focusBorderColor="#8d622f"
                                            isInvalid
                                            errorBorderColor="#D5C39B"
                                            // background='#FFFEFE'
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </InputGroup>
                                    <Box>
                                        {flagName && (
                                            <Alert
                                                bg="#fee8e7"
                                                border={"1px"}
                                                borderColor={"#f44336"}
                                                borderRadius={"8px"}
                                                my={1}
                                            >
                                                <AlertIcon color="#f44336" />
                                                {nameError}
                                            </Alert>
                                        )}
                                    </Box>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={
                                                <CBiUserPin color="#8d622f" />
                                            }
                                        />
                                        <Input
                                            type="userName"
                                            placeholder="User Name"
                                            _placeholder={{ color: "#212D28" }}
                                            focusBorderColor="#8d622f"
                                            isInvalid
                                            errorBorderColor="#D5C39B"
                                            onChange={(e) =>
                                                setUserName(e.target.value)
                                            }
                                        />
                                    </InputGroup>
                                    <Box>
                                        {" "}
                                        {flagUsername && (
                                            <Alert
                                                bg="#fee8e7"
                                                border={"1px"}
                                                borderColor={"#f44336"}
                                                borderRadius={"8px"}
                                                my={1}
                                            >
                                                <AlertIcon color="#f44336" />
                                                {userNameError}
                                            </Alert>
                                        )}
                                    </Box>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={
                                                <CMdEmail color="#8d622f" />
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
                                        {flagEmail && (
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
                                            children={
                                                <CFaLock color="#8d622f" />
                                            }
                                        />
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
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

                                    {/* <FormHelperText textAlign="right" color="#212D28">
                  <Link>forgot password?</Link>
                </FormHelperText> */}
                                </FormControl>
                                <Box>
                                    {flagPassword && (
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

                                <Button
                                    borderRadius={0}
                                    variant="solid"
                                    bgColor="#D5C39B"
                                    color="#8d622f"
                                    width="full"
                                    _hover={{ bg: "#8d622f", color: " white" }}
                                    onClick={() => {
                                        handleFormSubmit();
                                    }}
                                >
                                    SignUp
                                </Button>
                            </VStack>
                            {/* {flag && (
              <Alert status="error">
                <AlertIcon />
                Please fill in all the required fields.
              </Alert>
            )} */}
                        </form>
                    </Box>
                </VStack>
                <Box color="#212D28">
                    Already a user?{" "}
                    <Link to="/Login" color="#212D28" href="#">
                        Login
                    </Link>
                </Box>
            </Flex>
            <Footer></Footer>
        </div>
    );
}
