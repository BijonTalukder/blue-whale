"use client"
import testi_data from '@/data/testi-data'
import { useGetTestimonialQuery } from '@/redux/Api/feature/testimonialApi'
import Image from 'next/image'
import Slider from 'react-slick'

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}
const Testimonial = ({ style }) => {

    const {data,isSuccess}=useGetTestimonialQuery()

    // console.log(data);
    
    return (
        <section className={`${style ? "testimonial-area " : "testimonial-two-area"}`}>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12"> <h2 className='text-white text-center mb-4'>Testimonial</h2> </div>
                    <div className="col-xl-8 col-lg-10">
                        <div className="testimonial-active">
                            <Slider {...settings}>
                                {isSuccess&&  data?.data?.map((item) => (
                                    <div key={item.id} className="testimonial-item text-center">
                                        <div className="testi-quote">
                                            <Image src="/assets/img/icons/quote.png" width={80} height={56} alt="icon" />
                                        </div>
                                        <p>{item.message}</p>
                                        <div className="testimonial-avatar">
                                            <div className="testi-avatar-img">
                                                <Image src={item.image} width={80} height={80} alt="img" />
                                            </div>
                                            <div className="testi-avatar-info">
                                                <h5 className="name">{item.name}</h5>
                                                <div className="testi-rating">
                                                    { Array(item.rating).map((icon, index) => (
                                                        <i key={index} className={icon}></i>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
