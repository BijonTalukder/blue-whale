import blog_data from "@/data/blog-data"
import Image from "next/image"
import Link from "next/link"

const BlogGridArea = () => {
    return (
        <section className="blog-area inner-blog-area">
            <div className="container">
                <div className="row justify-content-center">
                    {blog_data.map((item) => (
                        <div key={item.id} className="col-xl-3">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details">
                                        <Image src={item.img} width={338} height={296} alt="img" />
                                    </Link>
                                </div>
                                <div className="blog-post-content">
                                    <h3 className="title">
                                        <Link href="/blog-details">{item.title}</Link>
                                    </h3>
                                    <span className="post-date">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="Page navigation pagination-wrap">
                            <ul className="pagination">
                                <li className="page-item"><Link className="page-link current" href="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                <li className="page-item"><Link className="page-link next" href="#">Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogGridArea
