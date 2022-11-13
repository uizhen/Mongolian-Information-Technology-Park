import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const options = {
    loop:true,
	margin:0,
	nav:true,
	mouseDrag: true,
	items:1,
	dots: false,
	autoplay: true,
	smartSpeed:800,
	autoplayHoverPause: true,
	navText: [
		"<i class='bx bx-chevrons-left'></i>",
		"<i class='bx bx-chevrons-right'></i>",
	],
};

const MainBanner = () => {
	// Slider
	const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
	}, [])

	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
	
    return (
		<div className="hero-slider-area">
			{/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

			{display ? <OwlCarousel 
				className="hero-slider-wrap owl-carousel owl-theme"
				{...options}
			> 
				<div className="slider-item slider-item-bg-1">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-9">
										<div className="slider-text one">
											<h1>Cyber Security & IT Management</h1>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
		
											<div className="slider-btn">
												<Link href="/contact">
													<a className="default-btn">
														Contact Us
													</a>
												</Link>
												<Link href="/about">
													<a className="default-btn active">
														Learn More
													</a>
												</Link>
											</div>
										</div>
									</div>
									
									<div className="col-lg-3">
										<div className="video-btn-animat one">
											<div
												onClick={e => {e.preventDefault(); openModal()}}
												className="video-btn popup-youtube"
											> 
												<i className="bx bx-play"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="slider-item slider-item-bg-2">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-9">
										<div className="slider-text two">
											<h1>Cyber Security Is Not Optional</h1>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
											
											<div className="slider-btn">
												<Link href="/contact">
													<a className="default-btn">
														Contact Us
													</a>
												</Link>
												<Link href="/about">
													<a className="default-btn active">
														Learn More
													</a>
												</Link>
											</div>
										</div>
									</div>

									<div className="col-lg-3">
										<div className="video-btn-animat two">
											<div
												onClick={e => {e.preventDefault(); openModal()}}
												className="video-btn popup-youtube"
											> 
												<i className="bx bx-play"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</OwlCarousel> : ''}
		</div>
    )
}

export default MainBanner;