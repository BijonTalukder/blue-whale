import price_data from "@/data/price-data"
import Link from "next/link"

const PriceArea = ({ style, inner_pricing }) => {
    return (
        <section className={`pricing-area ${style ? "pricing-padding-two" : "" || inner_pricing ? "inner-pricing-padding" : ""}`}>
            <div className="container">
                <div className={`${inner_pricing ? "d-none" : "row justify-content-center"}`}>
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section-title text-center mb-60">
                            <h2 className="title">The Simplest Pricing Plan to Secure Your Data</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {price_data.map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="pricing-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="pricing-head">
                                    <span className="package-duration">{item.duration}</span>
                                    <h2 className="price">${item.price}</h2>
                                    <p>{item.des}</p>
                                    <Link href="/contact" className="btn">
                                        <span className="text">{item.btn}</span>
                                        <span className="shape"></span>
                                    </Link>
                                </div>
                                <div className="pricing-item-list">
                                    <h4 className="package-name">{item.package_name}</h4>
                                    <ul className="list-wrap">
                                        {item.list.map((list, index) => (
                                            <li key={index}>{list}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PriceArea
