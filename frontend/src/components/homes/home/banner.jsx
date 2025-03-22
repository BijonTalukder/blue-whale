import Link from "next/link";
import Counter from "@/common/counter";
import Image from "next/image";

const banner_content = {
    img: "/assets/img/banner/banner_img02.png",
    title: (<>Defend Your <span>Business</span> Against the Latest Cyber Threats</>),
    des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque nihil impedit minus quod
        maxime placeat facere possimus quo assumenda omnis</>),
    btn: "Chat With Us",
}
const { img, title, des, btn } = banner_content;

const Banner = () => {
    return (
        <div className="area-two-bg-wrap" style={{ backgroundImage: `url("/assets/img/banner/banner_bg02.jpg")` }}>            <section className="banner-area banner-two-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-two-img text-center text-lg-start">
                            <Image src={img} width={632} height={632} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h2 className="heading wow fadeInUp" data-wow-delay=".2s">{title}</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">{des}</p>
                            <Link href="/contact" className="btn wow fadeInUp" data-wow-delay=".6s">
                                <span className="text">{btn}</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <Counter />
        </div>
    )
}

export default Banner
