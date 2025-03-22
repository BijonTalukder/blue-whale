"use client"
import Image from 'next/image';
import { useState } from 'react'

const tab_list = ["Description", "additional information", "Reviews (1)"]
const NavTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Handle tab click event
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9">
                <div className="product-desc-wrap">
                    <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                        {tab_list.map((tab, index) => (
                            <li key={index} className="nav-item" role="presentation">
                                <button onClick={() => handleTabClick(index)}
                                    className={activeTab === index ? 'nav-link active' : 'nav-link'}
                                    id={`tab-${index}`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content" id="myTabContentTwo">
                        <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
                            <div className="description-content">
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam aut officiis debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</p>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                            <div className="information-list">
                                <ul className="list-wrap">
                                    <li><span>Categories:</span> Uncategorized</li>
                                    <li><span>Tags:</span> charger, wireless</li>
                                    <li><span>Input:</span> 100-240V ~ 50/60Hz 0.7A</li>
                                    <li><span>Power profile:</span> Qi-certified with EPP</li>
                                    <li><span>Cable:</span> 5 ft (1.5 m)</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                            <div className="reviews-wrap">
                                <div className="reviews-title">
                                    <h3 className="title">Reviews (1)</h3>
                                </div>
                                <ul className="reviews-lists list-wrap">
                                    <li>
                                        <div className="review-author">
                                            <img src="assets/img/others/review_author.png" alt="img" />
                                            {/* <Image src="assets/img/others/review_author.png" alt="img" /> */}
                                        </div>
                                        <div className="review-text">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                            <h5 className="name">Maria Ramirez</h5>
                                            <span className="date">3 mar 2023</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="review-response-wrap">
                                <div className="reviews-title">
                                    <h3 className="title">Add Review</h3>
                                </div>
                                <form onSubmit={e => e.preventDefault()} className="comment-form">
                                    <div className="comment-form-rating">
                                        <span>Your Rating</span>
                                        <div className="rating">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default NavTabs;
