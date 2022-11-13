import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="widget-area" id="secondary">
            <div className="widget widget_search mt-0">
                <h3 className="widget-title">Search Now</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="widget widget-peru-posts-thumb">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="post-wrap">
                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span className="time">April 20, 2020</span>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Drughydrus Add Google Drive To Roughrobin Torjan</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span className="time">Jun 21, 2020</span>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>DHS Issues Emergency Directive To Prevent Hacking Attack</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span className="time">Jun  22, 2020</span>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Security In A Fragment World Of Workload</a> 
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Archives</h3>
                <div className="post-wrap">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>February <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>March <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>April <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>May <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>June <span>2020</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="post-wrap">
                    <div className="tagcloud">
                        <Link href="/blog-grid">
                            <a>Blockchain (3)</a>
                        </Link>

                        <Link href="/blog-grid">
                            <a>Cyber security (3)</a>
                        </Link>

                        <Link href="/blog-grid">
                            <a>Cybercrime (2)</a>
                        </Link>

                        <Link href="/blog-grid">
                            <a>Global news (2)</a>
                        </Link>

                        <Link href="/blog-grid">
                            <a>Ransomware (1)</a>
                        </Link>

                        <Link href="/blog-grid">
                            <a>Whitepapers (2)</a>
                        </Link>
                    </div>
                </div>
            </div>       
        </aside>
    )
}

export default Sidebar;