import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Item = ({ item }) => {

    const [sizes, setSizes] = useState([4.5, 5, 5.5])
    const [size, setSize] = useState(sizes[0])

    return (
        <div className="item">
            <div className="item__galery">
                <Image loader={(e) => { return "http://localhost:8080/images/" + item?.img }} src={item?.img} width={1000} height={1000} />
            </div>
            <div className="item__about">
                <h1 className="item__about-header">{item?.title}</h1>
                <p className="item__about-price">{item?.price}$</p>
                <div className="item__about-color">
                    <p className="item__about-color-text">Color: </p>
                    <p className="item__about-color-color">Blanc</p>
                </div>
                <div className="item__about-size">
                    <p className="item__about-size-text">Sizes: </p>
                    <div className="item__about-size-items">
                        {sizes.map((el) => {
                            return <button className={size == el ? "item__about-size-item item__about-size-item-active" : "item__about-size-item"} onClick={() => { setSize(el) }}>{el}</button>
                        })}
                    </div>
                </div>
                <p className="item__about-text">
                    {item?.description}
                </p>
                <div className="item__about-btns">
                    <button className="item__about-toCart">Add to cart</button>
                    <button className="item__about-toFavorites">Add to favorites</button>
                </div>
                <div className="item__about-footer">
                    <p className="item__about-footer-purchased">19 people purchased</p>
                    <Link href={"/"} className="item__about-footer-find">Find in a store</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;