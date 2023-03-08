import { Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box className='header'>
            <div className="header__logo">
                <Image src="/logo.svg" width={100} height={30} />
            </div>
        </Box>
    );
};

export default Header;