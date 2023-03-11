import Categories from "@/components/Categories";
import MainBlock from "@/components/MainBlock";
import Trending from "@/components/Trending";
import { Box, useColorMode } from "@chakra-ui/react";

const index = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg="#212123" className="mainPage">
            <Categories />
            <MainBlock />
            <Trending />
        </Box>
    );
};

export default index;