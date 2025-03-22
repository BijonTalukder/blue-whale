import Brand from '@/common/brand'
import Image from 'next/image'
import Link from 'next/link'

const banner_content = {
    img: "/assets/img/banner/banner_img01.png",
    title: (<>We Can Be Your Partner in <span>Reducing</span> Cyber Security Risk</>),
    des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque nihil impedit minus quod maxime
        placeat facere possimus quo assumenda omnis</>),
    btn: "Chat With Us"
}
const { img, title, des, btn } = banner_content
const Banner = () => {
    return (
        <div className="area-bg-wrap" style={{ backgroundImage: `url(assets/img/banner/banner_bg.jpg)` }}>
            <section className="banner-area banner-bg-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="banner-img text-center text-lg-end">
                                <Image src={img} width={624} height={612} alt="image" />
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
            <Brand />
        </div>
    )
}

export default Banner
