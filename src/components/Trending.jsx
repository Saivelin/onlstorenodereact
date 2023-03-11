import { useState } from "react";
import Image from "next/image";

const Trending = () => {
    const [trending, setTrending] = useState([
        {
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "99$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "99$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "99$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "99$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "99$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
    ])

    return (
        <div className='trending'>
            <div className="trending__header">Trending</div>
            <div className="trending__items">
                {trending.map((el) => {
                    return (
                        <div className="trending__item">
                            <Image className="trending__item-img" src={el.img} width={1000} height={1000} />
                            <div className="trending__item-about">
                                <p className="trending__item-header">{el.title}</p>
                                <p className="trending__item-category">{el.category}</p>
                                <div className="trending__item-footer">
                                    <div className="trending__item-prices">
                                        <p className="trending__item-price">{el.price}</p>
                                        <p className="trending__item-oldprice">{el.oldprice}</p>
                                    </div>
                                    <p className="trending__item-purchased">{el.purchased} people purchased</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Trending;