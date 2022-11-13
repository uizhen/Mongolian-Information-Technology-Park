import React, { useState } from "react";
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import Link from '../../utils/ActiveLink';
import TopHeaderTwo from './TopHeaderTwo';

const NavbarThree = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <header className="header-area-six fixed-top">
                {/* TopHeader */}
                <TopHeaderTwo />

                <div className="nav-area-six">
                    <div id="navbar" className="navbar-area">
                        <div className="main-nav">
                            <div className="container-fluid">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link href="/">
                                        <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                            <img src="/img/logo-black.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" 
                                        aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation" 
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Home <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index2" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Two</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index3" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Three</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index4" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Four</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/index5" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Five</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index6" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Six</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index7" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Seven</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index8" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Eight</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index9" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Home Nine</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">About</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Pages <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/pricing" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Pricing</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/testimonials" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Testimonials</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/team" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Team</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/faq" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">FAQ</a>
                                                        </Link>
                                                    </li>
 
                                                    <li className="nav-item">
                                                        <Link href="/#">
                                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                                User <i className='bx bx-chevron-down'></i>
                                                            </a>
                                                        </Link>

                                                        <ul className="dropdown-menu">
                                                            <li className="nav-item">
                                                                <Link href="/sign-in" activeClassName="active">
                                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Sign In</a>
                                                                </Link>
                                                            </li>

                                                            <li className="nav-item">
                                                                <Link href="/sign-up" activeClassName="active">
                                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Sign Up</a>
                                                                </Link>
                                                            </li>

                                                            <li className="nav-item">
                                                                <Link href="/forgot-password" activeClassName="active">
                                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Forgot Password</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/coming-soon" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Coming Soon</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/404" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">404 Error Page</a>
                                                        </Link>
                                                    </li>
 
                                                    <li className="nav-item">
                                                        <Link href="/privacy-policy" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Privacy Policy</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/terms-conditions" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Terms & Conditions</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Services <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>
                                                
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/services-one" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Services Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/services-two" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Services Style Two</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/services-three" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Services Style Three</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service-details" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Service Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
  
                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Blog <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/blog-grid" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Blog Grid</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-left-sidebar" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Blog Left Sidebar</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-right-sidebar" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Blog Right Sidebar</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-details" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Blog Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Contact</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="others-option">
                                        <div className="sidebar-menu">
                                            <div className="burger-menu" onClick={handleToggleSearchModal}>
                                                <i className="bx bx-menu-alt-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar Modal */}
            <div className={`sidebar-modal ${isActiveSearchModal ? "" : "active"}`}>
                <div className="sidebar-modal-inner">
                    <div className="sidebar-header">
                        <div className="sidebar-logo">
                            <img src="/img/logo-black.png" alt="Image" />
                        </div>
                        
                        <span className="close-btn sidebar-modal-close-btn" onClick={handleToggleSearchModal}>
                            <i className="bx bx-x"></i>
                        </span>
                    </div>

                    <div className="sidebar-about">
                        <div className="title">
                            <p>Pisa is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
                        </div>
                    </div>

                    <div className="contact-us">
                        <h3>Contact Us</h3>

                        <ul>
                            <li>
                                <i className="bx bx-location-plus"></i>
                                2750 Quadra Street Victoria,
                            </li>
                            <li>
                                <i className="bx bx-envelope"></i>
                                <a href="mailto:hello@pisa.com">hello@pisa.com</a>
                                <a href="mailto:info@pisa.com">info@pisa.com</a>
                                
                            </li>
                            <li>
                                <i className="bx bx-phone-call"></i>
                                <a href="tel:+44-458-895-456">+44 458 895 456</a>
                                <a href="tel:+44-458-895-455">+44 458 895 455</a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-follow-us">
                        <h3>Sidebar Follow</h3>

                        <ul className="social-wrap">
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="bx bxl-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarThree;
