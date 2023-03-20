import { useState } from "react";
import Image from "next/image";

const WorthSeeing = () => {
    const [worth, setWorth] = useState([{
        img: "/sneakers.png",
        cat: "sneakers"
    },
    {
        img: "/sneakers.png",
        cat: "sneakers"
    },
    {
        img: "/sneakers.png",
        cat: "sneakers"
    },
    {
        img: "/sneakers.png",
        cat: "sneakers"
    },
    {
        img: "/sneakers.png",
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
                            <Image className="WorthSeeing__item-img" src={el.img} width={400} height={300} />
                            <h4 className="WorthSeeing__item-header">{el.cat}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default WorthSeeing;