import Categories from "@/components/Categories";
import Trending from "@/components/Trending";
import Item from "@/components/Item";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`http://localhost:8080/api/products/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            nf: true
        }
    }

    return {
        props: { item: data }
    }
}

const Product = ({ item }) => {
    // const router = useRouter();
    // const { id } = router.query;
    // const [item, setItem] = useState({ title: "", description: "", price: 0 })

    // useEffect(() => {
    //     console.log(router)
    //     fetch(`/api/products/${id}`)
    //         .then((res) => { console.log(res) })
    //         .then((res) => { setItem(res) })
    // }, [])

    // useEffect(() => {
    //     console.log(item)
    // }, [item])

    return (
        <div className="productPage">
            <Categories />
            <Item item={item} />
            <Trending title={"Related products"} />
        </div>
    );
};

export default Product;