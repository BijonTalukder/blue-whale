import Image from "next/image";
import Link from "next/link";

const details_content = {
    details_img: "/assets/img/others/services_details.jpg",
    title: "All Services Related to Spyware Protection Are Provided",
    des: (<>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</>),
    des_2: (<>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi laborum dolorum fuga harum quidem expedita distinctio</>),
    content_title: "Why Spyware Protection?",
    des_3: (<>Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas</>),
    about_list: [
        "Managed Web Application", "SIEM Threat Detection", "Website Security Services",
        "24/7 Hours services", "Instant Malware Removal", "Security Management"
    ],
    sidebar_lists: [
        "Fast Cloud Backup", "Database Security", "Transaction Security", "Spambot Shield",
        "A.I. Threat Learning", "Client Protection", "Scheduled Backups",
    ]
}
const { details_img, title, des, des_2, content_title, des_3, about_list, sidebar_lists } = details_content;

const ServicesDetailsArea = () => {
    return (
        <section className="services-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="services-details-wrap">
                            <div className="services-details-thumb">
                                <Image src={details_img} width={950} height={599} alt="img" />
                            </div>
                            <div className="services-details-content">
                                <h2 className="title">{title}</h2>
                                <p>{des}</p>
                                <p>{des_2}</p>
                                <h4 className="services-content-title">{content_title}</h4>
                                <p>{des_3}</p>
                                <ul className="about-list">
                                    {about_list.map((li, index) => (
                                        <li key={index}>{li}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="services-sidebar">
                            <div className="widget services-widget">
                                <ul className="sidebar-services-lists list-wrap">
                                    {sidebar_lists.map((li, i) => (
                                        <li key={i}><Link href="/services-details">{li}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesDetailsArea;
