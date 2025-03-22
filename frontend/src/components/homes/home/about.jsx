import Image from "next/image";

const about_content = {
    about_img: "/assets/img/others/security_img.png",
    title: "Welcome to Blue whale",
    des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat
        facere possimus assumenda omnis dolor repellendu sautem Temporibus quibusdam et aut officiis
        nam libero tempore</>),
        about_list:[]
    // about_list: [
    //     "Managed Web Application", "Free Delivery Services",
    //     "SIEM Threat Detection", "Provide Security Services",
    //     "Website Security Services", "Content Delivery Network",
    //     "24/7 Hours services", "Website Hack Repair",
    //     "Instant Malware Removal", "Security Management",
    //     "Database Security",
    // ]
}
const { about_img, title, des, about_list } = about_content;

const About = () => {
    return (
        <section className="about-area security-area">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="about-img">
                            <Image className="wow fadeInLeft" data-wow-delay=".2s" src={about_img} width={670} height={606} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 col-md-11">
                        <div className="about-content">
                            <h2 className="title">{title}</h2>
                            <p>{des}</p>
                            <ul className="about-list security-list">
                                {about_list.map((list, index) => (
                                    <li key={index}>{list}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
