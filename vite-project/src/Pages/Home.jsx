import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Component/Footer";
import NavBar2 from "../Component/NavBar2";
import { Image, Center, Button, Flex } from "@chakra-ui/react";
// import Cookies from "js-cookie";

export default function Home() {
    const [submit, setsubmit] = React.useState(false);

    const navigate = useNavigate();
    const hide = () => {
        console.log("user SignUp");
        navigate("/home");
        setsubmit("");
    };
    const Show = () => {
        // Cookies not finished yet
        // console.log(Cookies.get("accesss_token"));
        navigate("/Box");
        setsubmit(true);
    };

    return (
        <>
            <NavBar2></NavBar2>
            <Flex bgColor="#fdfff0">
                <Center>
                    <Image
                        src="../public/Box22.png "
                        alt="Box"
                        width="300"
                        height="500"
                    ></Image>
                </Center>

                <Center>
                    {submit != false ? (
                        <Button onClick={hide}>Close</Button>
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
                </Center>
            </Flex>
            <Footer></Footer>
        </>
    );
}
