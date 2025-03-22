"use client"

import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";

const Wrapper = ({ children }) => {

    useEffect(() => {
        setTimeout(() => {
            animationCreate()
        }, 500);
    }, [])

    return (
        <>
            {children}
            <ScrollToTop />
        </>
    );
}

export default Wrapper