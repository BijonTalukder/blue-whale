import feature_data from "@/data/features-data"
import Link from "next/link"

const Feature = () => {
    return (
        <section className="features-area">
            <div className="container">
                <div className="row justify-content-center">
                    {feature_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                            <div className="features-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="features-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="features-content">
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.des}</p>
                                    <Link href="/contact" className="read-more">{item.btn}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature
