"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
// internal
import menu_data from "../../data/menu-data";

const MobileMenus=()=> {
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink) => {
        return currentRoute === subMenuLink;
    };


    //openMobileMenu
    const openMobileMenu = (menu) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <ul className="navigation">
            {menu_data.map((menu, i) => (
                <React.Fragment key={i}>
                    {menu.has_dropdown && (
                        <li className="menu-item-has-children">
                            <Link href={menu.link}
                             className={
                                (isMenuItemActive(menu.link) || 
                                (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link))))
                                    ? "active" : ""
                            }>
                                {menu.title}
                                <button
                                    className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                                    onClick={() => openMobileMenu(menu.title)} >
                                    <span className="fas fa-angle-down"></span>
                                </button>
                            </Link>
                            {menu.sub_menus && menu.sub_menus.length > 0 && (
                                <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                                    {menu.sub_menus.map((sub, index) => (
                                        <li key={index}>
                                            <Link href={sub.link} 
                                             className={
                                                sub.link && isSubMenuItemActive(sub.link)
                                                    ? "active"
                                                    : ""
                                            }>
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )}
                    {!menu.has_dropdown && (
                        <li>
                            <Link href={menu.link} className={`${currentRoute === menu.link ? "active" : ""}`}>
                                {menu.title}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}

export default MobileMenus;
