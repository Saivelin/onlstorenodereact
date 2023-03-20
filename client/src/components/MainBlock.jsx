import Image from "next/image";
import Link from "next/link";

const MainBlock = () => {
    return (
        <div className='mainBlock'>
            <p className="mainBlock__header">BIG SALE 20%</p>
            <div className="mainBlock__texts">
                <p className="mainBlock__texts-added">the bestseller of 2022</p>
                <h2 className="mainBlock__mainHeader">LENNON r2d2 <br /> with NVIDIA 5090 TI</h2>
                <Link href={"/"} className="mainBlock__btn">Shop Now</Link>
            </div>
            {/* <Image className="mainBlock__image" src={"/mainBlock.png"} width={400} height={300} /> */}
        </div>
    );
};

export default MainBlock;