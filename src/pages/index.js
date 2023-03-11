import Categories from "@/components/Categories";
import MainBlock from "@/components/MainBlock";
import Trending from "@/components/Trending";
import WorthSeeing from "@/components/WorthSeeing";
import Sale from "@/components/Sale";
import { Box, useColorMode } from "@chakra-ui/react";

const index = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg="#212123" className="mainPage">
            <Categories />
            <MainBlock />
            <Trending />
            <WorthSeeing />
            <Sale />
        </Box>
    );
};

export default index;