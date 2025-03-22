"use client"
import VideoPopup from '@/components/modals/video-popup';
import Link from 'next/link'
import { useState } from 'react';

const VideoArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="video-area">
                <div className="video-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-play-icon">
                                <button onClick={() => setIsVideoOpen(true)} className=" video-play popup-video">
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"d8w5SICzzxc"}
            />
            {/* video modal end */}
        </>
    )
}

export default VideoArea
