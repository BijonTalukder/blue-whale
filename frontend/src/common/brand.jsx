"use client"
import Link from 'next/link'
import Image from "next/image";
import Slider from 'react-slick'

const brand_data = [
    {
        id: 1,
        img: "/assets/img/brand/brand_01.png",
        width: 165,
        height: 48,
    },
    {
        id: 2,
        img: "/assets/img/brand/brand_02.png",
        width: 75,
        height: 48,
    },
    {
        id: 3,
        img: "/assets/img/brand/brand_03.png",
        width: 174,
        height: 36,
    },
    {
        id: 4,
        img: "/assets/img/brand/brand_04.png",
        width: 121,
        height: 48,
    },
    {
        id: 5,
        img: "/assets/img/brand/brand_05.png",
        width: 174,
        height: 38,
    },
    {
        id: 6,
        img: "/assets/img/brand/brand_02.png",
        width: 75,
        height: 48,
    },
]

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}
const Brand = ({ style_2, style_3, }) => {
    return (
        <section className={`brand-area ${style_2 ? "brand-two-area" : "" || style_3 ? "brand-three-area" : ""}`}>
            <div className="container">
                <div className="brand-wrap">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="brand-title">Trusted by more than <span>+750</span> companies around the globe</h4>
                        </div>
                    </div>
                    <div className="row brand-active">
                        <Slider {...settings}>
                            {brand_data.map((item) => (
                                <div key={item.id} className="col-2">
                                    <div className="brand-item">
                                        <Link href="#">
                                            <Image src={item.img} width={item.width} height={item.height} alt="Brand Logo" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand
