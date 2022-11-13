import React, { Component } from 'react'

export default class WhyChooseUs extends Component {
    
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("wcu_tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }


    render() {
        return (
            <div className="choose-us-six-area ptb-100 overflow-hidden">
                <div className="container">
                    <div className="section-title-six">
                        <span>Why Choose Us</span>
                        <h2>We Different From Others</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="choose-us-six-content">
                        <div className="tab">
                            <div className="row align-items-center">
                                <div className="col-lg-9">
                                    <div className="tab_content">
                                        <div id="wcu_tab1" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="choose-us-content">
                                                        <div className="choose-us">
                                                            <h3>Industry Experts</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                        </div>
                                                        <div className="shape-1">
                                                            <img src="/img/home-six/choose-us/shape-1.png" alt="Image" />
                                                        </div>
                                                        <div className="shape-3">
                                                            <img src="/img/home-six/choose-us/shape-3.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="choose-us-img">
                                                        <img src="/img/home-six/choose-us/choose-1.jpg" alt="Image" />

                                                        <div className="shape-2">
                                                            <img src="/img/home-six/choose-us/shape-2.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="wcu_tab2" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="choose-us-content">
                                                        <div className="choose-us">
                                                            <h3>Dedicated Team</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                        </div>
                                                        <div className="shape-1">
                                                            <img src="/img/home-six/choose-us/shape-1.png" alt="Image" />
                                                        </div>
                                                        <div className="shape-3">
                                                            <img src="/img/home-six/choose-us/shape-3.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="choose-us-img">
                                                        <img src="/img/home-six/choose-us/choose-1.jpg" alt="Image" />

                                                        <div className="shape-2">
                                                            <img src="/img/home-six/choose-us/shape-2.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="wcu_tab3" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="choose-us-content">
                                                        <div className="choose-us">
                                                            <h3>Outcome Focused</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                        </div>
                                                        <div className="shape-1">
                                                            <img src="/img/home-six/choose-us/shape-1.png" alt="Image" />
                                                        </div>
                                                        <div className="shape-3">
                                                            <img src="/img/home-six/choose-us/shape-3.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="choose-us-img">
                                                        <img src="/img/home-six/choose-us/choose-1.jpg" alt="Image" />

                                                        <div className="shape-2">
                                                            <img src="/img/home-six/choose-us/shape-2.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="wcu_tab4" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="choose-us-content">
                                                        <div className="choose-us">
                                                            <h3>High Quality Service</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                        </div>
                                                        <div className="shape-1">
                                                            <img src="/img/home-six/choose-us/shape-1.png" alt="Image" />
                                                        </div>
                                                        <div className="shape-3">
                                                            <img src="/img/home-six/choose-us/shape-3.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="choose-us-img">
                                                        <img src="/img/home-six/choose-us/choose-1.jpg" alt="Image" />

                                                        <div className="shape-2">
                                                            <img src="/img/home-six/choose-us/shape-2.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="wcu_tab5" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="choose-us-content">
                                                        <div className="choose-us">
                                                            <h3>Cyber Security Expert</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                        </div>
                                                        <div className="shape-1">
                                                            <img src="/img/home-six/choose-us/shape-1.png" alt="Image" />
                                                        </div>
                                                        <div className="shape-3">
                                                            <img src="/img/home-six/choose-us/shape-3.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="choose-us-img">
                                                        <img src="/img/home-six/choose-us/choose-1.jpg" alt="Image" />

                                                        <div className="shape-2">
                                                            <img src="/img/home-six/choose-us/shape-2.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab1')}
                                        >
                                            <i className="bx bx-chevron-left"></i>
                                            Industry Experts
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab2')}
                                        >
                                            <i className="bx bx-chevron-left"></i>
                                            Dedicated Team
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab3')}
                                        >
                                            <i className="bx bx-chevron-left"></i>
                                            Outcome Focused
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab4')}
                                        >
                                            <i className="bx bx-chevron-left"></i>
                                            High Quality Service
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab5')}
                                        >
                                            <i className="bx bx-chevron-left"></i>
                                            Cyber Security Expert
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
