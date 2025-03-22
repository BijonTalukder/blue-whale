import Link from "next/link"

const Breadcrumb = ({ title, spyware, sm_title }) => {
    return (
        <section className="breadcrumb-area">
            <div className="breadcrumb-bg" style={{ backgroundImage: `url(assets/img/bg/breadcrumb_bg.png)` }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="breadcrumb-content text-center">
                            {spyware ? <h3 className="title">{spyware}</h3> : <h3 className="title">{title}</h3>}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    {spyware ? (<li className="breadcrumb-item"><Link href="/services">{sm_title}</Link></li>) :
                                        (<li className="breadcrumb-item active" aria-current="page">{sm_title}</li>)
                                    }
                                    {spyware && <li className="breadcrumb-item active" aria-current="page">{spyware}</li>}
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb
