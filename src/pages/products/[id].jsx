import Categories from "@/components/Categories";
import Trending from "@/components/Trending";
import Item from "@/components/Item";

const Product = () => {
    return (
        <div className="productPage">
            <Categories />
            <Item />
            <Trending title={"Related products"} />
        </div>
    );
};

export default Product;