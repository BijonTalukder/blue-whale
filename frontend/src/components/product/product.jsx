"use client";

import shop_data from "@/data/shop-data";
import { useGetProductQuery } from "@/redux/Api/feature/productApi";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Product = () => {
    const { data, isSuccess, isError } = useGetProductQuery();
    console.log(data);

    return (
        <section className="shop-area" 
        
        // style={{background:"#011529"}}
        
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop-top-wrap">
                            <div className="row">
{/* <div className="col-12 text-center text-white"><h2>Our Products</h2></div> */}
                                
                            </div>
                        </div>
                        <div className="cycure-shop-product-main">
                            {/* Swiper Slider */}
                            <Swiper
                            
                             className="mySwiper"
                                modules={[Navigation, Pagination]}
                                spaceBetween={20} // Space between slides
                                slidesPerView={4} // Number of slides per view
                                navigation // Enable navigation arrows
                                pagination={{ clickable: true }} // Enable pagination dots
                                breakpoints={{
                                    // Responsive breakpoints
                                    320: {
                                        slidesPerView: 1, // 1 slide on small screens
                                    },
                                    576: {
                                        slidesPerView: 2, // 2 slides on medium screens
                                    },
                                    768: {
                                        slidesPerView: 3, // 3 slides on tablets
                                    },
                                    992: {
                                        slidesPerView: 4, // 4 slides on desktops
                                    },
                                }}
                            >
                                {isSuccess && data?.data?.map((item) => {
                                    const imageArray = JSON.parse(item?.productImage);
                                    const imageUrl = imageArray && imageArray[0]?.imageUrl 
                                    ? `${imageArray[0]?.imageUrl}?height=370&width=320` 
                                    : "/default-image.jpg?height=100&width=120";
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <div className="shop-item">
                                                <div className="product-thumb">
                                                    <Link href="/shop-details">
                                                        <Image
                                                            src={imageUrl}
                                                            width={338}
                                                            height={375}
                                                            alt="img"
                                                        />
                                                    </Link>

                                                    {
                                                        item?.productPriceIsDisplayed &&  <div className="price-wrap">
                                                        <span className="amount text-white">${item.productPrice}.00</span>
                                                    </div>
                                                    }
                                                   
                                                </div>
                                                <div className="product-content">
                                                    <h4 className="title ">
                                                        <Link className="text-decoration-none" href="/shop-details">{item.productTitle}</Link>
                                                    </h4>
                                                    {/* <Link href="/shop-details" className="add-cart-btn">
                                                        {item.btn}
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;