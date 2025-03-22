"use client";
import MobileMenus from "@/layout/headers/mobile-menus";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isActive, setIsActive }) => {

    return (
        <div className={`${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                        <Link href="/">
                            <Image src="/assets/img/logo/logo.jpeg" width={129} height={39} alt="" title="" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <MobileMenus />
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar