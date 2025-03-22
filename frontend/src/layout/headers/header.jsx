"use client"
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./nav-menu";
import useSticky from "../../hooks/use-sticky";
import Sidebar from "@/common/sidebar";
import Offcanvas from "@/common/offcanvas";
import Image from "next/image";

const Header = ({ style }) => {

    const { sticky } = useSticky();
    const [isActive, setIsActive] = useState(false);
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    return (
        <>
            <header>
                <div className={`menu-area transparent-header header-style-two " ${sticky ? "sticky-menu" : "" || style ? "header-shop-cart-active" : ""}`} id="sticky-header">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <Image src="/assets/img/logo/logo.jpeg" width={129} height={50} alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <NavMenu />
                                        </div>
                                        {/* <div className="header-social">
                                            <ul>
                                                <li><Link href="#"><i className="flaticon-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="flaticon-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
                                            </ul>
                                        </div> */}
                                        {/* {style &&
                                            <div className="header-shop-cart-active header-cart">
                                                <Link href="/shop-details" className="mini-cart-link">
                                                    <Image src="/assets/img/icons/cart.svg" width={21} height={20} alt="icon" />
                                                    <span className="mini-cart-count">Cart (0)</span>
                                                </Link>
                                            </div>} */}
                                        <div className="offcanvas-btn">
                                            <button onClick={() => setOffcanvasOpen(true)} className="btn-area">
                                                <Image src="/assets/img/icons/dots.png" width={22} height={14} alt="Icon" />
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop"></div>
                                {/* End Mobile Menu  */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <Offcanvas offcanvasOpen={offcanvasOpen} setOffcanvasOpen={setOffcanvasOpen} />
        </>
    );
}

export default Header
