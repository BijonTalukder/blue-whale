import Image from "next/image";
import Link from "next/link";

const OffCanvas = ({ offcanvasOpen, setOffcanvasOpen }) => {
    return (
        <div className={` ${offcanvasOpen ? 'offcanvas-menu-visible' : ''}`}>
            <div className="offCanvas-wrap">
                <div onClick={() => setOffcanvasOpen(false)} className="offCanvas-toggle">
                    <Image src="/assets/img/icons/cross.svg" width={18} height={18} alt="icon" />
                </div>
                <div className="offCanvas-body">
                    <div className="offCanvas-content">
                        <h3 className="title">Digital safety <span>starts here</span> for both commercial and personal</h3>
                        <p>Nam libero tempore, cum soluta nobis eligendi cumque quod placeat facere possimus assumenda omnis dolor repellendu sautem temporibus officiis</p>
                    </div>
                    <div className="offcanvas-contact footer-contact-info">
                        <h4 className="number">+1 488 246 5357</h4>
                        <h4 className="email">cycure.agency@mail.com</h4>
                        <p>3828 Delmas Terrace, Culver City, <br /> CA, United States</p>
                        <ul className="footer-social list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="offCanvas-overlay"></div>
        </div>
    );
}

export default OffCanvas
