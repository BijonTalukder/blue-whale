import Link from "next/link"
import BlogSidebar from "./blog-sidebar"
import Image from "next/image"

const post_content = [
    {
        id: 1,
        thumb: "/assets/img/blog/standard_thumb01.jpg",
        title: "Five Strategies to Optimize Cloud Security in 2019",
        meta: [
            { list: "March 17, 2023", icon: "far fa-calendar-alt" },
            { list: "Amos Mack", icon: "far fa-user", link: "#" },
            { list: "uncategorized", icon: "far fa-bookmark", link: "#" },
        ]
    },
    {
        id: 2,
        thumb: "/assets/img/blog/standard_thumb02.jpg",
        title: "The Challenge of Real-Time Cyber Protection",
        meta: [
            { list: "March 17, 2023", icon: "far fa-calendar-alt" },
            { list: "Amos Mack", icon: "far fa-user", link: "#" },
            { list: "uncategorized", icon: "far fa-bookmark", link: "#" },
        ]
    },
    {
        id: 3,
        thumb: "/assets/img/blog/standard_thumb03.jpg",
        title: "What You Don’t Know About Facebook’s Outage",
        meta: [
            { list: "March 17, 2023", icon: "far fa-calendar-alt" },
            { list: "Amos Mack", icon: "far fa-user", link: "#" },
            { list: "uncategorized", icon: "far fa-bookmark", link: "#" },
        ]
    },
    {
        id: 4,
        thumb: "/assets/img/blog/standard_thumb04.jpg",
        title: "How to Create an Effective Cybersecurity Policy",
        meta: [
            { list: "March 17, 2023", icon: "far fa-calendar-alt" },
            { list: "Amos Mack", icon: "far fa-user", link: "#" },
            { list: "uncategorized", icon: "far fa-bookmark", link: "#" },
        ]
    },
]
const BlogPost = () => {
    return (
        <section className="standard-blog-area inner-blog-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-7">
                        {post_content.map((item) => (
                            <div key={item.id} className="standard-blog-post">
                                <div className="standard-post-thumb">
                                    <Link href="/blog-details"><Image src={item.thumb} width={950} height={599} alt="img" /></Link>
                                </div>
                                <div className="standard-post-content">
                                    <h2 className="title"><Link href="/blog-details">{item.title}</Link></h2>
                                    <ul className="standard-post-meta list-wrap">
                                        {item.meta.map((li, i) => (
                                            li.link ? (<li key={i}><i className={li.icon}></i><Link href="#">{li.list}</Link></li>) :
                                                (<li key={i}><i className={li.icon}></i>{li.list}</li>)
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <nav aria-label="Page navigation pagination-wrap">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link current" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link next" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>
    )
}

export default BlogPost
