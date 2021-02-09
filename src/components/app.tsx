import * as React from "react";
import { Button, Heading, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import "./style.css";

export const App: React.FC = () => {
    return (
        <Container maxW="1200px" mt={4} my={4}>
            <Box my={6}>
                <Heading as="h1" color="gray.400">
                    React 2021
                </Heading>
            </Box>
            <Box my={6}>
                <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="solid">
                        Button
                    </Button>
                    <Button colorScheme="teal" variant="outline">
                        Button
                    </Button>
                    <Button colorScheme="teal" variant="ghost">
                        Button
                    </Button>
                    <Button colorScheme="teal" variant="link">
                        Button
                    </Button>
                </Stack>
            </Box>
            <Box my={6} p={4} boxShadow="lg" bg="white">
                <SkeletonCircle size="12" />
                <SkeletonText py={4} noOfLines={8} spacing="4" />
            </Box>
        </Container>
    );
};
