"use client"
import { useGetFaqQuery } from "@/redux/Api/feature/faqApi";
import Link from "next/link";
import { useMemo, useState } from "react";

const FAQ = ({ style_3, inner_faq = true }) => {
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
        <section className={`faq-area faq-padding ${style_3 ? "faq-two-padding" : "" || inner_faq ? "inner-faq-padding" : ""}`}>
            <div className="container">
                <div className={`row justify-content-center ${inner_faq ? "" : "justify-content-xl-between"}`}>
                    <div className={`${inner_faq ? "d-none" : "col-xl-4 col-lg-8"}`}>
                        <div className="section-title text-center text-xl-start mb-40">
                            <h2  className="title text-gray">Here Are the Most Common Questions From Clients</h2>
                        </div>
                        <div className="faq-btn text-center text-xl-start">
                            <Link href="/contact" className="btn">
                                <span className="text">Ask question</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                    <div className={`${inner_faq ? "col-xxl-8 col-xl-9 col-lg-11" : "col-xl-7 col-lg-10"}`}>
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
        </section>
    );
};

export default FAQ;
