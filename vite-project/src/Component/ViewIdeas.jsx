import { Heading, Stack, Center, Grid } from "@chakra-ui/react";
import { FcIdea } from "react-icons/fc";
import Footer from "../Component/Footer";
import Navbaradmin from "../Component/Navbaradmin";
import { useEffect, useState } from "react";
import axios from "axios";
import Cardidea from "./Cardidea";

export default function ViewIdeas() {
    const [ideas, setIdeas] = useState([]);
    const url = "http://localhost:8000/api/ideas";
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then((res) => {
            if (res.data.error) return;
            else setIdeas(res.data.ideas);
        });
    }, []);
    return (
        <>
            <Navbaradmin></Navbaradmin>
            <Center paddingTop="20px" bgColor="#fdfff0">
                <Heading color="#8d622f">All Idea </Heading>
                <FcIdea bg="#D5C39B" size="50px" />
            </Center>
            <Stack spacing="8" bgColor="#fdfff0">
                <Center
                    paddingTop="100px"
                    paddingBottom="400px"
                    paddingLeft="20px"
                    paddingRight="20px"
                    gap={6}
                >
                    <Grid
                        gap={4}
                        templateColumns={{ base: "1fr", md: "repeat(4,1fr)" }}
                        m={4}
                    >
                        {ideas.map((idea) => {
                            return (
                                <Cardidea
                                    key={idea._id}
                                    id={idea._id}
                                    name={idea.name}
                                    instructions={idea.instructions}
                                    InputA={idea.inputA}
                                    InputB={idea.inputB}
                                    OutputA={idea.outputA}
                                    OutputB={idea.outputB}
                                />
                            );
                        })}
                    </Grid>
                </Center>
            </Stack>
            <Footer></Footer>
        </>
    );
}
