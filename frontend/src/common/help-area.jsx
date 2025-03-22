"use client"
import tabs_data from '@/data/tab-data';
import Image from 'next/image';
import { useState } from 'react';

const tab_title=["Banking", "Manufacturing", "Oil And Gas", "Insurance", "Healthcare"]

const HelpArea = ({ style_3 }) => {
    // Define state to keep track of the active tab
    const [activeTab, setActiveTab] = useState(0);

    // Handle tab click event
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section className={`cycure-help-area ${style_3 ? "cycure-help-two-area " : ""}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="cycure-help-img">
                            <Image className="wow fadeInLeft" data-wow-delay=".2s"
                                src="/assets/img/others/help_img.png" width={603} height={654} alt="img"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title mb-25">
                            <h2 className="title">Experts Help You to Enhance Your Cyber Defenses</h2>
                        </div>
                        <ul className="nav nav-tabs" id="helpTab" role="tablist">
                            {tab_title.map((tab, index) => (
                                <li key={index} className="nav-item" role="presentation">
                                    <button
                                        onClick={() => handleTabClick(index)}
                                        className={activeTab === index ? 'nav-link active' : 'nav-link'}
                                        id={`tab-${index}`}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="tab-content" id='helpTabContent'>
                            {tabs_data.map((item, index) => (
                                <div key={index}
                                    className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}  >
                                    <div className="help-content">
                                        <h4 className="title">{item.title}</h4>
                                        <p>{item.des} </p>
                                        <ul className="about-list">
                                            {item.list.map((li, i) => (
                                                <li key={i}>{li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HelpArea
