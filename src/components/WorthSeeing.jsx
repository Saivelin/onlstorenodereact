import { useState } from "react";
import Image from "next/image";

const WorthSeeing = () => {
    const [worth, setWorth] = useState([{
        img: "/snekers.png",
        cat: "sneakers"
    },
    {
        img: "/snekers.png",
        cat: "sneakers"
    },
    {
        img: "/snekers.png",
        cat: "sneakers"
    },
    {
        img: "/snekers.png",
        cat: "sneakers"
    },
    {
        img: "/snekers.png",
        cat: "sneakers"
    },
    ])

    return (
        <div className='WorthSeeing'>
            <h2 className="WorthSeeing__header">Worth seeing</h2>
            <div className="WorthSeeing__items">
                {worth.map((el) => {
                    return (
                        <div className="WorthSeeing__item">
                            <Image src={el.img} />
                            <h4 className="WorthSeeing__item-header">{el.cat}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default WorthSeeing;