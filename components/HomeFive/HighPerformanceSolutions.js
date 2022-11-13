import React from 'react';
import Link from 'next/link';

const HighPerformanceSolutions = () => {
    return (
        <section className="performance-area bg-none pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Монголын мэдээлэл холбооны үндэсний парк</h2>
					<p>Та бүхэнтэй дараах байдлаар хамтран ажиллах боломжтой юм. Мэдлэг мэдээлэлд тулгуурлан асар хурдацтай хөгжиж буй энэ 
						зуунд бид та бүхний найдвартай хөтөч байх бөгөөд мэдээллийн технологийн салбарын ертөнцөөр хамтдаа аялцгаая.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-website"></i>
							<h3>Олон улсын шалгалт</h3>
							<p>Таньд гадаад болон дотоодын мэдээлэл технологийн байгууллагатай хамтран ажиллах, гэрээгээр ажиллах боломжийг нээнэ.</p>
								
                            <Link href="/service-details">
                                <a className="read-more">Дэлгэрэнгүй</a>
                            </Link>

							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Сургалтын төв</h3>
							<p>Мэдээллийн технологийн чадварлаг мэргэжилтэн бэлтгэх сургалт нь та бүхэнд ирээдүйн асар том боломжийг олгох юм.</p>

							<Link href="/service-details">
                                <a className="read-more">Дэлгэрэнгүй</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-content"></i>
							<h3>Танхим түрээс</h3>
							<p>Хүн бүртбаг хамт олноороо нийлж өөрсдийн санааг бодит болгох хямд, тохилог танхимыг бид санал болгож байна.</p>
	
							<Link href="/service-details">
                                <a className="read-more">Дэлгэрэнгүй</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>
					
					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-cyber"></i>
							<h3>Бизнес инкубатор</h3>
							<p>Шинэ санаагаа бизнес болгож буй залуу эрдэмтэн судлаачдад туршлагатай зөвлөх болон туслах үйлчилгээг бид хүргэнэ.</p>
	
							<Link href="/service-details">
                                <a className="read-more">Дэлгэрэнгүй</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Инновацийн дэлгүүр</h3>
							<p>Монгол инженерүүдийн тархинаас урган гарсан бүтээлүүдийг дэлхийн тавцанд гаргах нь бидний эрхэм зорилго.</p>
	
							<Link href="/service-details">
                                <a className="read-more">Дэлгэрэнгүй</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Ном, гарын авлага</h3>
							<p>Монголын мэдээлэл технологийн салбарын эрдэмтдийн бүтээлийг дэлхийн хэмжээний стандартад оруулах.</p>
	
							<Link href="/service-details">
                                <a className="read-more">Дэлгэрэнгүй</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default HighPerformanceSolutions;