import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const IntroVideo = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        
            <div className="video-area-six pb-100">
                <div className="container">
                    <div className="video-img-six">
                        <img src="/img/home-six/video-img.png" alt="Image" />

                        <div className="video-button">
                            <div
                                onClick={e => {e.preventDefault(); openModal()}}
                                className="video-btn popup-youtube"
                            > 
                                <i className="bx bx-play"></i>
                            </div>
                        </div>

                        <h3>Watch Video</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroVideo;