import { Box, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

const Categories = () => {

    const [categors, setCategors] = useState([
        {
            title: "Computers",
            id: 1,
        },
        {
            title: "Clothes",
            id: 2,
        },
        {
            title: "Shoes",
            id: 3,
        },
        {
            title: "Furniture",
            id: 4,
        },
        {
            title: "Cosmetics",
            id: 5,
        },
        {
            title: "Travel",
            id: 6,
        },
        {
            title: "Automotive",
            id: 7,
        },
    ])

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box className='categories'>
            <h3 className="categories__header">CATEGORIES</h3>
            <div className="categories__itemsWrapper">
                {categors.map((el) => {
                    return <Link className="categories__item" href={"/catagory=" + el.id}>{el.title}</Link>
                })}
            </div>
            <div className="categories__footer">
                <Link href={"/help"}>Help</Link>
                <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            </div>
        </Box>
    );
};

export default Categories;