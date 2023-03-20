import Link from "next/link";
import Image from "next/image";

const Sale = () => {
    return (
        <div className='sale'>
            <div className="sale__left">
                <div className="sale__leftWrapper">
                    <div className="sale__header">
                        <p className="sale__light">NEW YEAR</p>
                        <p className="sale__big">SALE</p>
                    </div>

                    <Link className="sale__btn" href={"/"} >See more</Link>
                </div>
            </div>
            <Image src={"/newYear.png"} width={600} height={600} />
        </div>
    );
};

export default Sale;