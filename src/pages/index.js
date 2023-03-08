import { Box, useColorMode } from "@chakra-ui/react";

const index = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg="primary">
            Hello world
        </Box>
    );
};

export default index;