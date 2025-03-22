"use client"
import Image from "next/image"
import Link from "next/link"

const sidebar_list = [
    { text: "Design", number: 12 },
    { text: "Finance", number: 14 },
    { text: "inTech", number: 18 },
    { text: "Marketing", number: 26 },
    { text: "News", number: 19 },
    { text: "Office", number: <>08</> },
]

const rc_post = [
    {
        id: 1,
        img: "/assets/img/blog/rc_thumb01.jpg",
        title: "Five Strategies to Optimize Cloud Security in 2019",
        icon: "far fa-calendar-alt",
        date: "March 17, 2023"
    },
    {
        id: 2,
        img: "/assets/img/blog/rc_thumb02.jpg",
        title: "Technology Takeover: How to Secure IoT Environments",
        icon: "far fa-calendar-alt",
        date: "March 17, 2023"
    },
    {
        id: 3,
        img: "/assets/img/blog/rc_thumb03.jpg",
        title: "The Challenge of Real-Time Cyber Protection",
        icon: "far fa-calendar-alt",
        date: "March 17, 2023"
    },
    {
        id: 4,
        img: "/assets/img/blog/rc_thumb04.jpg",
        title: "Cybersecurity Attacks & the Transportation Industry",
        icon: "far fa-calendar-alt",
        date: "March 17, 2023"
    },
]

const tag = ["uncategorized", "security", "Cyber", "Development", "Digital", "Marketing", "Innovation",]

const BlogSidebar = () => {
    return (
        <div className="col-xl-4 col-lg-5 col-md-10">
            <aside className="blog-sidebar">
                <div className="widget">
                    <div className="sidebar-search-form position-relative">
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Search here..." />
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="widget">
                    <h4 className="widget-title">Explore Categories</h4>
                    <ul className="list-wrap">
                        {sidebar_list.map((li, i) => (
                            <li key={i}><Link href="#">{li.text}</Link><span className="float-right">{li.number}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="widget">
                    <h4 className="widget-title">Recent Posts</h4>
                    {rc_post.map((item) => (
                        <div key={item.id} className="rc-post">
                            <div className="rc-post-thumb">
                                <Link href="/blog-details">
                                    <Image src={item.img} width={90} height={90} alt="img" />
                                </Link>
                            </div>
                            <div className="rc-post-content">
                                <h4 className="title"><Link href="/blog-details">{item.title}</Link></h4>
                                <div className="rc-post-date">
                                    <i className={item.icon}></i> {item.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="widget">
                    <h4 className="widget-title">Popular Tags</h4>
                    <div className="tagcloud">
                        {tag.map((tag, index) => (
                            <Link key={index} href="#">{tag}</Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default BlogSidebar
