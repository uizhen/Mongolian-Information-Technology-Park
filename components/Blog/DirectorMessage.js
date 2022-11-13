import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-11 col-md-12">
						<div className="blog-details-desc">
							<div className="article-content">
								<h3>Захирлын мэндчилгээ</h3>

								<div className="entry-meta">
									<ul>
										<li>
                                            <span>Posted On:</span> 
                                            <Link href="#">
                                                <a>Nov 11, 2021</a>
                                            </Link>
                                        </li>
										<li>
                                            <span>Posted By:</span> 
                                            <Link href="#">
                                                <a>Б.Ариунзаяа</a>
                                            </Link>
                                        </li>
									</ul>
								</div>

								<div className="article-image">
									<img src="/img/director.jpg" alt="image" />
								</div>

								<p>Манай цахим хуудсанд морилон саатаж буй эрхэм танд Мэдээлэл, технологийн үндэсний парк-ын хамт олон мэндчилж байна.</p>

								<p>Мэдээлэл, технологийн үндэсний парк нь Монгол улсын хэмжээнд төрийн зүгээс
									мэдээллийн технологи, инновацийг хөгжүүлэх эрхэм үүргийг хүлээсэн ААТҮГ
									юм. Манай үүд хаалга оюутан, сурагч, мэргэжилтэн, инженер, эрдэмтэн, бизнесмен,
									судлаач, Та бүхэнд үргэлж нээлттэй байх болно гэдгээ илэрхийлэхэд таатай байна.</p>

								<blockquote className="flaticon-quote">
									<p>Удирдагч болохын өмнө амжилт гэдэг бол зөвхөн өөрийгөө л хөгжүүлэх явдал байдаг.<br/> 
										Харин удирдагч болсны дараа амжилт гэдэг бол бусдыг хөгжүүлэхэд оршдог юм.</p>
								</blockquote>
								
								<p>Мэдээлэл, технологийн үндэсний парк нь дэлхийн өндөр хөгжилтэй улс гүрнүүдийн
									технологийн хөгжлийг гүйцэх, зэрэгцэн алхах зорилгоор үйл ажиллагаандаа
									бодлогын томоохон шинэчлэлийг хийж 21 аймаг 9 дүүргээ холбосон оюуны торгоны
									замыг бүтээн Монгол хүн бүрд энтрепренёр сэтгэлгээг таниулан нутагшуулах,
									инноваци нэвтрүүлэх, шинэ санаа, шилдэг шийдлийг бий болгох, гарааны
									бизнесийн эко системийг хөгжүүлэхээр бид зорин ажиллаж байна.Монгол улсын
									мэдээллийн технологийн хөгжил дэлхийн хэмжээнд мөн түүнээс илүү түвшинд
									хүрсэн байна гэдэгт бид итгэлтэй байна.Манай цахим хуудсаар зочилж өөрт
									хэрэгцээтэй мэдээллийг цаг алдалгүй авна гэдэгт найдаж байна.</p>

								<p>Хүндэтгэсэн: Э.Цогтгэрэл /Мэдээлэл холбооны үндэсний паркийн захирал/</p>
							</div>

							<div className="article-footer">
								<div className="article-tags">
									<span><i className='bx bx-share-alt'></i></span>

									<a href="#">Share</a>
								</div>

								<div className="article-share">
									<ul className="social">
										<li>
											<a href="https://facebook.com/" target="_blank">
												<i className='bx bxl-facebook'></i>
											</a>
										</li>
										<li>
											<a href="https://twitter.com/" target="_blank">
												<i className='bx bxl-twitter'></i>
											</a>
										</li>
										<li>
											<a href="https://linkedin.com/" target="_blank">
												<i className='bx bxl-linkedin'></i>
											</a>
										</li>
										<li>
											<a href="https://pinterest.com/" target="_blank">
												<i className='bx bxl-pinterest-alt'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default BlogDetailsContent;