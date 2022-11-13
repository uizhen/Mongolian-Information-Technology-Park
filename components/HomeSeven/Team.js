import React from 'react';
import Link from 'next/link';

const Team = () => {
    return (
        <>
            <div className="expert-team-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="expert-team-content">
                                <h3>Meet Our Expert Team Who are Behind The Whole Security Management</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>

                                <Link href="/team">
                                    <a className="default-btn">View All Team Members</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="expert-team-image">
                                <img src="/img/home-7-8-9/expert-team/expert-team.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;