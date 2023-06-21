import {
    Heading,
    Button,
    Box,
    Stack,
    StackDivider,
    CardHeader,
    Card,
    CardBody,
    Text,
    CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
const Cardidea = (props) => {
    const DeleteItem = () => {
        axios
            .delete(`http://localhost:8000/api/deleleidea/${props.id}`, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
            });
    };
    return (
        <>
            <Card>
                <CardHeader bgColor="#fdfff0">
                    <Heading size="md" color="#8d622f">
                        {props.name}
                    </Heading>
                </CardHeader>

                <CardBody bgColor="#fdfff0">
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <Heading
                                size="xs"
                                textTransform="uppercase"
                                color="#8d622f"
                            >
                                Instructions
                            </Heading>
                            <Text pt="2" fontSize="sm" color="#D5C39B">
                                {props.instructions}.
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                size="xs"
                                textTransform="uppercase"
                                color="#8d622f"
                            >
                                Input A
                            </Heading>
                            <Text pt="2" fontSize="sm" color="#D5C39B">
                                {props.InputA}.
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                size="xs"
                                textTransform="uppercase"
                                color="#8d622f"
                            >
                                Input B
                            </Heading>
                            <Text pt="2" fontSize="sm" color="#D5C39B">
                                {props.InputB}.
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                size="xs"
                                textTransform="uppercase"
                                color="#8d622f"
                            >
                                Output A
                            </Heading>
                            <Text pt="2" fontSize="sm" color="#D5C39B">
                                {props.OutputA}.
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                size="xs"
                                textTransform="uppercase"
                                color="#8d622f"
                            >
                                Output B
                            </Heading>
                            <Text pt="2" fontSize="sm" color="#D5C39B">
                                {props.OutputB}.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter bgColor="#fdfff0" gap={"10px"}>
                    <Link to={`/EditIdea/${props.id}`}>
                        <Button
                            borderRadius={10}
                            type="submit"
                            variant="solid"
                            bgColor="#D5C39B"
                            color="#8d622f"
                            w={"full"}
                            _hover={{ bg: "#8d622f", color: " white" }}
                        >
                            Edit{" "}
                        </Button>
                    </Link>
                    <br />
                    <Button
                        borderRadius={10}
                        type="submit"
                        variant="solid"
                        bgColor="#D5C39B"
                        color="#8d622f"
                        w={"full"}
                        _hover={{ bg: "#8d622f", color: " white" }}
                        onClick={() => {
                            DeleteItem();
                        }}
                    >
                        delete{" "}
                    </Button>{" "}
                    <br />
                </CardFooter>
            </Card>
        </>
    );
};

export default Cardidea;
