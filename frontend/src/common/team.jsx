import team_data from "@/data/team-data"
import Image from "next/image"
import Link from "next/link"

const Team = ({ inner_team }) => {
    return (
        <section className={`${inner_team ? "inner-team-padding" : "team-area team-bg"}`}>
            <div className="container">
                <div className={`${inner_team ? "d-none" : "row justify-content-center"}`}>
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title text-center mb-55">
                            <h2 className="title">Expert Team Who Are Behind the Whole Security</h2>
                        </div>
                    </div>
                </div>
                <div className="team-wrapper">
                    <div className="row justify-content-center justify-content-lg-between">
                        {team_data.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Image src={item.img} width={170} height={171} alt="img" />
                                    </div>
                                    <div className="team-content">
                                        <h4 className="name">{item.name}</h4>
                                        <span className="designation">{item.designation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="team-btn text-center">
                            <Link href="/team" className="btn btn-style-two">
                                <span className="text">Join our team</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
