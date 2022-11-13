import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    center: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
};

const RecentProjects = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="project-area pb-100">
			<div className="container-fluid">
				<div className="section-title">
					<h2>2022 оны технологийн тренд</h2>
					<p>Хорин нэгдүгээр зуун бол техник технологийн зуун гэгддэг бөгөөд өдрөөс өдөрт хурдацтай хөгжиж буй шинэ соёлыг бид хоцролгүй
                       даган явах нь цахим үндэстэн болох үндсэн суурь болох юм. Мэдээлэл бол анхдагч мэдлэг юм.</p>
				</div>
                        
				<div className="row">
                    {display ? <OwlCarousel 
                        className="solutions-wrap owl-carousel owl-theme"
                        {...options}
                    >
						<div className="single-solutions solutions-time-bg-7">
							<div className="solutions-content">
								<h3>Ransomware-н эсрэг дайн</h3>
								<p>Ransomware-ийн халдвараас урьдчилан сэргийлэх хариу арга хэмжээ авах төлөвлөгөөг бий болгон
                                    эрсдэлийг бууруулахын тулд холбогдох гадаад түншүүдтэй хамтран ажиллах</p>

                                <Link href="/#">
                                    <a className="read-more">Аюулгүй байдлын стратеги</a>
                                </Link>
							</div>
						</div>
					
						<div className="single-solutions solutions-time-bg-8">
							<div className="solutions-content">
								<h3>Carbon metrics in energy 4.0</h3>
								<p>Хүлэмжийн хийн ялгаруулалтад бизнесийн үйл явцын нөлөөллийн талаар ойлголт өгөхийн тулд эд зүйлсийн интернет болон 
                                    цахим хөгжлийн аудитын хяналтыг ашиглах</p>
								
                                <Link href="/#">
                                    <a className="read-more">Цахим бизнесийн хяналт</a>
                                </Link>
							</div>
						</div>
					
						<div className="single-solutions solutions-time-bg-9">
							<div className="solutions-content">
								<h3>Hybrid Collabration</h3>
								<p>Уян хатан, контексттэй, хоорондоо хамтран ажилладаг мэргэжлүүдийг цахим загварт оруулан нэгжээс ангид цахим ажилчдын 
                                    ажлын туршлагыг шалган ажлын орон тоо үүсгэх.</p>
								
                                <Link href="/#">
                                    <a className="read-more">Хүний нөөцийн менежмент    </a>
                                </Link>
							</div>
						</div>

                        <div className="single-solutions solutions-time-bg-10">
							<div className="solutions-content">
								<h3>Intangible value creation</h3>
								<p>Цахим зах зээлийн эргэн тойрон дахь дижитал валютын үр нөлөөг удирдах. Оюуны өмчийг 
                                    борлуулах боломжтой дижитал бүтээгдэхүүн болгохын тулд блокчейн технологийг ашиглах</p>
								
                                <Link href="/#">
                                    <a className="read-more">Цахим хөрөнгө оруулалт</a>
                                </Link>
							</div>
						</div>

                        <div className="single-solutions solutions-time-bg-11">
							<div className="solutions-content">
								<h3>Automation as a service</h3>
								<p>Машин болон роботын технологийг нэвтрүүлэн хүний өөрийн биеэр хийхэд хүнд болон эрүүл мэндэд
                                    сөргөөр нөлөөлөх мэргэжлүүдэд орлуулах.
                                </p>
								
                                <Link href="/#">
                                    <a className="read-more">Шинэ санаа, инноваци</a>
                                </Link>
							</div>
						</div>
                    </OwlCarousel> : ''}
				</div>
			</div>
		</section>
    )
}

export default RecentProjects;