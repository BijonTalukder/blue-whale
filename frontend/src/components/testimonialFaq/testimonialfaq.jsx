"use client";

import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FAQ from "@/common/faq";
import { useGetFaqQuery } from "@/redux/Api/feature/faqApi";
import Link from "next/link";
import { useGetTestimonialQuery } from "@/redux/Api/feature/testimonialApi";

const TestimonialAndFAQ = ({inner_faq = true}) => {
  // Testimonial data
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     role: "CEO, Company A",
  //     comment:
  //       "This product has completely transformed our workflow. Highly recommended!",
  //     image: "https://via.placeholder.com/100",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     role: "Designer, Company B",
  //     comment:
  //       "Amazing service and support. The team is always ready to help!",
  //     image: "https://via.placeholder.com/100",
  //   },
  //   {
  //     id: 3,
  //     name: "Alice Johnson",
  //     role: "Developer, Company C",
  //     comment:
  //       "The best decision we made for our business. Incredible value!",
  //     image: "https://via.placeholder.com/100",
  //   },
  // ];

    const {data:testimonialData,isSuccess:testimonialSuccess}=useGetTestimonialQuery()


    const { data, isSuccess } = useGetFaqQuery();
      const [faqData, setFaqData] = useState([]);
  
      // Memoize FAQ data transformation and handle the initial `showAnswer` state
      useMemo(() => {
          if (isSuccess && data?.data) {
              const initialFaqData = data.data.map((faq, index) => ({
                  ...faq,
                  showAnswer: index === 0,  // Show answer for the first item initially
              }));
              setFaqData(initialFaqData);
          }
      }, [data, isSuccess]);
  
      // Toggle the answer display for the selected FAQ
      const toggleAnswer = (index) => {
          setFaqData(prevFaqData => {
              return prevFaqData.map((faq, i) => ({
                  ...faq,
                  showAnswer: i === index ? !faq.showAnswer : false,  // Toggle only the selected FAQ
              }));
          });
      };
  

  return (
    <section className="testimonial-faq-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Side: Testimonials Slider */}
          <div className="col-md-6">
            <h2 className="mb-4">What Our Clients Say</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20} // Space between slides
              slidesPerView={1} // Show one testimonial at a time
              navigation // Enable navigation arrows
              pagination={{ clickable: true }} // Enable pagination dots
              loop={true} // Infinite loop
            >
              {testimonialSuccess && testimonialData?.data?.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card">
                    <div className="d-flex align-items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                      style={{height:"80px",width:"80px"}}
                      />
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>

                        {/* <p className="text-muted mb-1">{testimonial.role}</p> */}
                      </div>
                    </div>
                    <p className="mt-3">{testimonial.message}</p>

                    <div className="testi-rating">
                                                    { Array(testimonial.rating).map((icon, index) => (
                                                        <i key={index} className={icon}></i>
                                                    ))}
                                                </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Middle Divider */}
          <div className="col-md-1 d-flex justify-content-center">
            <div className="divider"></div>
          </div>

          {/* Right Side: FAQ */}
          <div className="col-md-5">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              <div className={`row justify-content-center ${inner_faq ? "" : "justify-content-xl-between"}`}>
                               {/* <div className={`${inner_faq ? "d-none" : "col-xl-4 col-lg-8"}`}>
                                   <div className="section-title text-center text-xl-start mb-40">
                                       <h2  className="title text-gray">Here Are the Most Common Questions From Clients</h2>
                                   </div>
                                   <div className="faq-btn text-center text-xl-start">
                                       <Link href="/contact" className="btn">
                                           <span className="text">Ask question</span>
                                           <span className="shape"></span>
                                       </Link>
                                   </div>
                               </div> */}
                               <div className={ " col-12"}>
                                   <div className="accordion" id="accordionExample">
                                       {isSuccess && faqData?.map((faq, index) => (
                                           <div key={faq.id} className="accordion-item">
                                               <h2 className="accordion-header">
                                                   <button className={`accordion-button ${faq.showAnswer ? "active" : ""}`} onClick={() => toggleAnswer(index)}>
                                                       {index + 1 > 9 ? index + 1 : `0${index + 1 + "." + " " + faq.questionEnglish}`}
                                                       <span className="line"></span>
                                                   </button>
                                               </h2>
                                               {faq.showAnswer && (
                                                   <div className="accordion-body">
                                                       <p>{faq.answerEnglish}</p>
                                                   </div>
                                               )}
                                           </div>
                                       ))}
                                   </div>
                               </div>
                           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndFAQ;