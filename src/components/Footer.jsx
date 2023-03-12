import Image from "next/image";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__wrapper">
                <Image src={"/logo.svg"} width={70} height={35} />
                <p>Developed by <span>Tomkovich</span></p>
                <div className="footer__societies">
                    <div className="footer__societies-item">
                        <Image src={"/facebook.svg"} width={40} height={40} />
                    </div>
                    <div className="footer__societies-item">
                        <Image src={"/facebook.svg"} width={40} height={40} />
                    </div>
                    <div className="footer__societies-item">
                        <Image src={"/facebook.svg"} width={40} height={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;