import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="sidebar-pl-15">
            <aside className="widget-area" id="secondary">
                <div className="widget widget_search">
                    <h3 className="widget-title">Search Now</h3>
                    <div className="post-wrap">
                        <form className="search-form">
                            <label>
                                <input type="search" className="search-field" placeholder="Search..." />
                            </label>
                            <button type="submit"><i className='bx bx-search'></i></button>
                        </form>
                    </div>
                </div>
                
                <section className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    <div className="post-wrap">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>Blockchain <span>(10)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Cyber security <span>(20)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Cybercrime <span>(10)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Global news <span>(12)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Ransomware <span>(16)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Whitepapers <span>(17)</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>
                    <div className="post-wrap">
                        <div className="tagcloud">
                            <Link href="#">
                                <a>Blockchain (3)</a>
                            </Link>
                            <Link href="#">
                                <a>Cyber security (3)</a>
                            </Link>

                            <Link href="#">
                                <a>Cybercrime (2)</a>
                            </Link>

                            <Link href="#">
                                <a>Global news (2)</a>
                            </Link>

                            <Link href="#">
                                <a>Ransomware (1)</a>
                            </Link>

                            <Link href="#">
                                <a>Whitepapers (2)</a>
                            </Link>
                        </div>
                    </div>
                </section>       
            </aside>
        </div>
    )
}

export default Sidebar;