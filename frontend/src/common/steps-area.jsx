import Image from "next/image";

const steps_data = [
    {
        id: 1,
        image: { img: "/assets/img/others/steps_01.png", width: 266, height: 240 },
        title: "Choose Security Package",
        des: (<>Nam libero tempore soluta nobis eligendi optio cumque minus quod maxime</>),
        count: "step one",
    },
    {
        id: 2,
        image: { img: "/assets/img/others/steps_02.png", width: 264, height: 240 },
        title: "Prepare for Security Test",
        des: (<>Nam libero tempore soluta nobis eligendi optio cumque minus quod maxime</>),
        count: "step Two",
    },
    {
        id: 3,
        image: { img: "/assets/img/others/steps_03.png", width: 248, height: 240 },
        title: "Get the Result & Solutions",
        des: (<>Nam libero tempore soluta nobis eligendi optio cumque minus quod maxime</>),
        count: "step Three",
    },
]
const StepsArea = ({ style }) => {
    return (
        <section className={`${style ? "inner-steps-area" : "steps-area"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title text-center mb-55">
                            <h2 className="title">Become Totally Secured by Following 3 Steps</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {steps_data.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 col-sm-8">
                            <div className="steps-item text-center wow fadeInUp" data-wow-delay=".6s">
                                <div className="steps-img">
                                    <Image src={item.image.img} width={item.image.width} height={item.image.height} alt="img" />
                                </div>
                                <div className="steps-content">
                                    <h4 className="title">{item.title}</h4>
                                    <p>{item.des}</p>
                                    <span className="steps-count">{item.count}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StepsArea;
