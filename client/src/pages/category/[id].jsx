import Categories from "@/components/Categories";
import MainBlock from "@/components/MainBlock";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`http://localhost:8080/api/products/category/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            nf: true
        }
    }

    return {
        props: { itemsFromServe: data }
    }
}

const ProductsToCat = ({ itemsFromServe }) => {

    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState([]);


    // const [items, setItems] = useState([
    //     {
    //         id: 2,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "29$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 3,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "39$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 4,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "49$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "59$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 1,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "69$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 2,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "79$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 3,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "89$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 4,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "99$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "109$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "19$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "52$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    //     {
    //         id: 5,
    //         title: "Nike ZoomX 2023",
    //         category: "Sneakers",
    //         price: "119$",
    //         oldprice: "79$",
    //         purchased: "19",
    //         img: "/nikeZoomX.png",
    //     },
    // ])

    const [items, setItems] = useState([
        {
            id: 2,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 3,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 4,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 2,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 3,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 4,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 2,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 3,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 4,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 2,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 3,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
        {
            id: 4,
            title: "Nike ZoomX 2023",
            category: "Sneakers",
            price: "29$",
            oldprice: "79$",
            purchased: "19",
            img: "/nikeZoomX.png",
        },
    ])

    const [itemsNow, setItemsNow] = useState([])

    useEffect((ev) => {
        setItems(itemsFromServe)
        let it = []
        let pageCoof = page;
        for (let i = (pageCoof + 1) * 10 - 10; i < (pageCoof + 1) * 10; i += 1) {
            console.log(i)
            if (items[i] === undefined) {
                break;
            }
            it.push(items[i])
        }
        console.log(it)
        setItemsNow(it)
    }, [page])

    useEffect((ev) => {
        setItems(itemsFromServe)
    }, [])

    useEffect((ev) => {
        let it = []
        for (let i = 0; i < items.length; i += 10) {
            it.push(i / 10)
        }
        setPageCount(it)

        let itms = []

        for (let i = 0; i < 10; i += 1) {
            itms.push(items[i])
        }

        setItemsNow(itms)
    }, [])

    return (
        <div className="productsToCat">
            <Categories />
            <MainBlock />
            <div className='trending'>
                <div className="trending__items">
                    {itemsNow.map((el) => {
                        return (
                            <div className="trending__item">
                                <Image className="trending__item-img" src={`/nikeZoomX.png`} width={1000} height={1000} />
                                <div className="trending__item-about">
                                    <Link href={"/products/" + el.id} className="trending__item-header">{el?.title}</Link>
                                    <p className="trending__item-category">{el?.category}</p>
                                    <div className="trending__item-footer">
                                        <div className="trending__item-prices">
                                            <p className="trending__item-price">{el?.price}</p>
                                            <p className="trending__item-oldprice">{el?.oldprice}</p>
                                        </div>
                                        <p className="trending__item-purchased">{el?.purchased} people purchased</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="productsToCat__pagesPagination">
                    {pageCount.map((el) => {
                        return <button onClick={(ev) => { setPage(el) }} className={page == el ? "productsToCat__pagesPagination-item productsToCat__pagesPagination-itemActive" : "productsToCat__pagesPagination-item"}>{el + 1}</button>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductsToCat;