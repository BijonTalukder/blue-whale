import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This product exceeded my expectations! Highly recommended.",
    position: "CEO, TechCorp",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Amazing experience with this service. Customer support is great!",
    position: "Manager, XYZ Ltd.",
  },
  {
    id: 3,
    name: "Michael Lee",
    text: "I love the quality and attention to detail. Will buy again!",
    position: "Freelancer",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section py-5">
      <div className="container text-center">
        <h2 className="text-white mb-4">What Our Customers Say</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card p-4 mx-auto text-center">
                <i className="bi bi-quote quote-icon"></i> {/* Quote Icon */}
                <p className="lead fst-italic">"{testimonial.text}"</p>
                <h5 className="mt-3">{testimonial.name}</h5>
                <small>{testimonial.position}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .testimonial-section {
          background-color: #001f3f; /* Navy Blue */
          padding: 80px 0;
        }
        .testimonial-card {
          max-width: 600px;
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          margin: auto;
          position: relative;
          color: #333;
        }
        .quote-icon {
          font-size: 2.5rem;
          color: #ffcc00;
          position: absolute;
          top: -10px;
          left: 15px;
        }
        h2 {
          font-size: 2rem;
        }
        small {
          color: #ccc;
        }
      `}</style>
    </section>
  );
}
