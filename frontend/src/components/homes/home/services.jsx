import Link from "next/link"

const service_data = [
    {
        id: 1,
        title: "Increased & Evolving Threat",
        des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat</>),
        icon: "flaticon-blackmail",
        btn: "Learn More"
    },
    {
        id: 2,
        title: "Continuous Monitoring",
        des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat</>),
        icon: "flaticon-cyber-security",
        btn: "Learn More"
    },
    {
        id: 3,
        title: "Structural Weaknesses",
        des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat</>),
        icon: "flaticon-assignment",
        btn: "Learn More"
    },
    {
        id: 4,
        title: "Widening Attack Surface",
        des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat</>),
        icon: "flaticon-broken-shield",
        btn: "Learn More"
    },
]

const Service = () => {
    return (
        <section className="services-two-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title text-center mb-55">
                            <h2 className="title">Effective Approach for Your Cyber Security</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xxl-10">
                        <div className="services-two-items-wrap">
                            <div className="row g-0 justify-content-center">
                                {service_data.map((item) => (
                                    <div key={item.id} className="col-md-6 col-sm-8">
                                        <div className="services-two-item">
                                            <div className="services-two-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="services-two-content">
                                                <h3 className="title">
                                                    <Link href="/services-details">{item.title}</Link>
                                                </h3>
                                                <p>{item.des}</p>
                                                <Link href="/service-details" className="read-more">{item.btn}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="services-explore-btn text-center">
                            <Link href="services" className="btn">
                                <span className="text">Explore all</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
