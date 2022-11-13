import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';

const InnovativeElectronicProtection = () => {
    return (
        <>
            <div className="home-control-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="home-control-content">
                                <h3>Innovative Electronic Protection Of Your Office And Home Control</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>

                                <div className="home-control-tab-wrap">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Intercom System</Tab>
                                            <Tab>CCTV</Tab>
                                            <Tab>GDPR</Tab>
                                            <Tab>Encryption</Tab>
                                            <Tab>Our Goal</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <p>Lorem ipsum dolor sit amet consecte adipi scing elit. Adipiscing eleifend poteder mattis viverra lorem ipsum dolor sit amet consecte adipisci ng elit adipiscingdiper eleifend dictum potenti mattis viverra.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link href="/about">
                                                <a className="default-btn">Learn About</a>
                                            </Link>
                                        </TabPanel>

                                        <TabPanel>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link href="/about">
                                                <a className="default-btn">Learn About</a>
                                            </Link>
                                        </TabPanel>

                                        <TabPanel>
                                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link href="/about">
                                                <a className="default-btn">Learn About</a>
                                            </Link>
                                        </TabPanel>

                                        <TabPanel>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link href="/about">
                                                <a className="default-btn">Learn About</a>
                                            </Link>
                                        </TabPanel>

                                        <TabPanel>
                                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link href="/about">
                                                <a className="default-btn">Learn About</a>
                                            </Link>
                                        </TabPanel>
                                    </Tabs> 
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="home-control-image">
                                <img src="/img/home-7-8-9/home-control/home-control.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnovativeElectronicProtection;