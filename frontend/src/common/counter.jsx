import Count from "@/common/count";

const counter_data = [
    {
        id: 1,
        counter: 164,
        plus: "+",
        text: <>Worldwide <br /> clients</>

    },
    {
        id: 2,
        counter: 120,
        plus: "+",
        text: <>Cyber Security <br /> Experts</>

    },
    {
        id: 3,
        counter: 95,
        percentage: "%",
        text: <>Retention <br /> rate</>

    },
]

const Counter = ({ style }) => {
    return (
        <section className={`${style ? "inner-fact-padding" : "fact-area"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    {counter_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="fact-item">
                                <h2 className="count">
                                    <span className="formatting-mark">{item.plus}</span>
                                    <Count number={item.counter} />
                                    <span className="formatting-mark">{item.percentage}</span>
                                </h2>
                                <span className="content">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Counter
