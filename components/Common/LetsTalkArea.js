import React from 'react';
import Link from 'next/link';

const LetsTalkArea = () => {
    return (
        <div className="lats-talk-area ptb-100">
			<div className="container">
				<div className="lats-talk-content">
					<h2>Ready to get started? we're here to help</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <Link href="/contact">
                        <a className="default-btn six">
                            <i className="bx bx-file"></i>
                            Let’s Talk
                        </a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default LetsTalkArea;