import React, { Component } from 'react';
import Link from 'next/link';

class ElectronicProtection extends Component {
	// Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
	}
	
	render() {
		return (
			<section className="electronic-area bg-color ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="electronic-content">
								<h2>Манай байгууллагын үндсэн чиглэл</h2>
								<div className="electronic-tab-wrap">
									<div className="tab electronic-tab">
										{/* Tabs Nav */}
										<ul className="tabs">
											<li
												className="current"
												onClick={(e) => this.openTabSection(e, 'tab1')}
											>
												Төлөвлөгөө
											</li>
											<li
												onClick={(e) => this.openTabSection(e, 'tab2')}
											>
												Хамтын ажиллагаа
											</li>
											<li
												onClick={(e) => this.openTabSection(e, 'tab3')}
											>
												Стандарт
											</li>
											<li
												onClick={(e) => this.openTabSection(e, 'tab4')}
											>
												Инкубатор
											</li>
											<li
												onClick={(e) => this.openTabSection(e, 'tab5')}
											>
												Технологи
											</li>
										</ul>

										{/* Tab Content */}
										<div className="tab_content">
											<div id="tab1" className="tabs_item">
												<p>Дундын болон урт хугацааны төлөвлөгөөг боловсруулж хэрэгжүүлэх</p>
												<p>Байгууллагын үйл ажиллагааг өргөжүүлэх, арга замыг боловсруулах хэрэгжүүлэх</p>
												
												<Link href="/about">
													<a className="default-btn">Дэлгэрэнгүй</a>
												</Link>
											</div>

											<div id="tab2" className="tabs_item">
												<p>Хамтрагч байгууллагуудын өмнө хүлээсэн үүргээ нэр төртэй биелүүлэх</p>

												<p>Хөдөлмөрийн бүтээмжийг сайжруулах, урт хугацааны үнэ цэнийг нэмэгдүүлэх</p>

												<Link href="/about">
													<a className="default-btn">Дэлгэрэнгүй</a>
												</Link>
											</div>

											<div id="tab3" className="tabs_item">
												<p>Олон улсын стандартад нийцсэн мэдээлэл, харилцаа холбооны технологийн суурь төв байх</p>
												
												<p>Монгол хүнд зориулсан мэдлэг, ур чадвар олгох бүх нийтийн сургалт, шалгалт, арга хэмжээ зохион байгуулах</p>
 
												<Link href="/about">
													<a className="default-btn">Дэлгэрэнгүй</a>
												</Link>
											</div>

											<div id="tab4" className="tabs_item">
												<p>Гарааны бизнес эрхлэх зорилгодоо хүрэхэд шаардлагатай орчин нөхцлийг бүрдүүлэх</p>

												<p>Бүтээлч санааг дэмжиж, гадаад дотоодын зах зээлд эзлэх байр суурийг бэхжүүлэх, дэмжих</p>
												<Link href="/about">
													<a className="default-btn">Дэлгэрэнгүй</a>
												</Link>
											</div>

											<div id="tab5" className="tabs_item">
												<p>Оюуны өмчийн бүтээгдэхүүн үйлдвэрлэлийг дэмжих, эдийн засгийн эргэлтэд оруулах</p>
												
												<p>Технологи ба инновацийг дэмжих төвтэй болох, үйл ажиллагааг өргөжүүлэх, соёлыг төлөвшүүлэх</p>
 
												<Link href="/about">
													<a className="default-btn">Дэлгэрэнгүй</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="electronic-img">
								<img src="/img/electronic-img.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ElectronicProtection;