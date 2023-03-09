import { Box, useColorMode, InputGroup, InputLeftElement, Icon, Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from 'react-icons/ai'
// AiOutlineSearch
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box className='header'>
            <div className="header__logo">
                <Image src="/logo.svg" width={100} height={30} />
            </div>
            <div className="header__user">
                <div className="header__userimage-wrapper">
                    <Image src="/userPlaceholder.svg" width={30} height={30} className="header__userimage" />
                </div>
                <p className="header__username">header__username</p>
            </div>
            <div className="header__search">
                <InputGroup bg={"#191919"} className="header__inputGroup">
                    <InputLeftElement
                        className="header__inputEl"
                        pointerEvents='none'
                        children={<Icon as={AiOutlineSearch} />}
                    />
                    <Input type='text' className="header__input" placeholder='Search for anything...' />
                </InputGroup>
            </div>
            <nav className="header__nav">
                <Link href={"/liked"}><Image src={"/heart.svg"} width={40} height={40} /></Link>
                <Link href={"/cart"}><Image src={"/shopicon.svg"} width={40} height={40} /></Link>
            </nav>
        </Box>
    );
};

export default Header;