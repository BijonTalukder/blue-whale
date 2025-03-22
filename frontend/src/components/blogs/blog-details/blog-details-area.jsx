"use client"

import Image from "next/image"
import BlogSidebar from "../blog-standard/blog-sidebar"
import Link from "next/link"

const BlogDetailsArea = () => {
    return (
        <section className="standard-blog-area inner-blog-area blog-details-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="standard-blog-post">
                            <div className="standard-post-thumb">
                                <Image src="/assets/img/blog/standard_thumb01.jpg" width={950} height={599} alt="img" />
                            </div>
                            <div className="standard-post-content blog-details-content">
                                <h2 className="title">Five Strategies to Optimize Cloud Security in 2019</h2>
                                <ul className="standard-post-meta list-wrap">
                                    <li><i className="far fa-calendar-alt"></i> March 17, 2023</li>
                                    <li><i className="far fa-user"></i><a href="#">Amos Mack</a></li>
                                    <li><i className="far fa-bookmark"></i><a href="#">uncategorized</a></li>
                                </ul>
                                <div className="post-text">
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</p>
                                    <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi laborum dolorum fuga harum quidem expedita distinctio</p>
                                    <blockquote>
                                        <p>“Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae”</p>
                                    </blockquote>
                                    <p>Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi laborum dolorum fuga harum quidem expedita distinctio</p>
                                    <p>Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas est omnis dolor repellendus. Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur</p>
                                </div>
                                <div className="blog-details-bottom">
                                    <div className="post-share">
                                        <h5 className="share-title">Share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-avatar-wrap">
                            <div className="blog-post-avatar-img">
                                <Image src="/assets/img/blog/avatar_img.jpg" width={170} height={171} alt="img" />
                            </div>
                            <div className="blog-avatar-info">
                                <span className="designation">Author</span>
                                <h4 className="name"><a href="#">Morgan Cooper</a></h4>
                                <p>Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas est omnis dolor repellendus.</p>
                            </div>
                        </div>
                        <div className="comment-wrap">
                            <div className="comment-form-title">
                                <h4 className="title">Comments (1)</h4>
                            </div>
                            <div className="latest-comments">
                                <div className="comments-box">
                                    <div className="comments-avatar">
                                        <Image src="/assets/img/blog/comment_avatar01.jpg" width={110} height={110} alt="img" />
                                    </div>
                                    <div className="comment-text">
                                        <span className="date">3 mar 2023</span>
                                        <h5 className="name"><a href="#">Harry Peterson</a></h5>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                        <Link href="#" className="reply-link">Reply</Link>
                                    </div>
                                </div>
                                <div className="comments-box children">
                                    <div className="comments-avatar">
                                        <Image src="/assets/img/blog/comment_avatar02.jpg" width={110} height={110} alt="img" />
                                    </div>
                                    <div className="comment-text">
                                        <span className="date">3 mar 2023</span>
                                        <h5 className="name"><a href="#">Kiara Montesino</a></h5>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                        <Link href="#" className="reply-link">Reply</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-comment-form">
                            <div className="comment-respond">
                                <div className="comment-form-title">
                                    <h4 className="title">Leave a Reply</h4>
                                </div>
                                <form onSubmit={e => e.preventDefault()} className="comment-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="comment-field">
                                                <input type="text" placeholder="Your full name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="comment-field">
                                                <input type="email" placeholder="Your email address" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-field">
                                        <textarea name="message" placeholder="Write your review..."></textarea>
                                    </div>
                                    <button type="submit" className="btn">
                                        <span className="text">Send message</span>
                                        <span className="shape"></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsArea
