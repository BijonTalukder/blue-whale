"use client"
import Image from "next/image";
import blog_data from '@/data/blog-data'
import Link from 'next/link'
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    useTransform: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
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
const Blog = ({ style, style_2 }) => {
    const slicedBlog = blog_data.slice(0, 5);
    return (
        <section className={`blog-area ${style ? "about-page-blog" : "" || style_2 ? "blog-two-area" : ""}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section-title text-center mb-60">
                            <h2 className="title">Get the Latest Articles </h2>
                        </div>
                    </div>
                </div>
                <div className="row blog-active">
                    <Slider {...settings}>
                        {slicedBlog.map((item) => (
                            <div key={item.id} className="col-xl-3">
                                <div className="blog-post-item">
                                    <div className="blog-post-thumb">
                                        <Link href="/blog-details">
                                            <Image src={item.img} width={338} height={296} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="blog-post-content">
                                        <h3 className="title">
                                            <Link href="/blog-details">{item.title}</Link>
                                        </h3>
                                        <span className="post-date">{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Blog
