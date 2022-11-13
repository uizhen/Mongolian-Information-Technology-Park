import React from 'react';
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

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="client-area ptb-100">
            <div className="container">
                <div className="section-title white-title">
					<h2>Мэдээлэл технологийн паркийн талаар мэргэжилтнүүд</h2>
					<p>Завгүй өнгөрөөсөн 40 жилийн турш бидэнтэй хамтран ажилласан та бүхний сэтгэлийн ханамж бидний гол бахархал юм.</p>
				</div>

                {display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Нэгэн гэр бүл мэт найрсаг энэхүү байгууллагатай хамтран ажиллах хугацаанд хамт байсан сурах мэдэхийн мөрөөсөл болсон залуусын
                            ирээдүйн зам нь дардан байх болтугай.
                        </p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client.jpg" alt="Image" />
                            <h3>Ч.Урианхай</h3>
                            <span>Мэргэжил</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Ирээдүй болсон залуу судлаачдыг хөгжих суралцахад дэм болсон энэхүү байгууллагын үйл ажиллагааг дэмжин хамтран ажиллахад үнэхээр
                            таатай байлаа.
                        </p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client.jpg" alt="Image" />
                            <h3>Б.Гантулга</h3>
                            <span>Мэргэжил</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Шинжлэх ухаан хөгжихөд судалгаа шинжилгээ нэн тэргүүнд шаардагдана. Хөгжлийн энэ асар их өлсгөлөнг нөхөхчадварлаг инженерүүд бэлтгэхэд нь
							ажлын амжилт хүсье.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client.jpg" alt="Image" />
                            <h3>Ц.Цэлмэг</h3>
                            <span>Мэргэжил</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Мэдээллийн технологи бол шинэ залуусын тэргүүлэх салбар. Үүнийг дагах өндөр хэмжээний хариуцлага, ур чадварт хүрсэн ITPark-н залуусдаа
							энэ эрчээ алдахгүй байхыг зөвлөж байна.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>
                        
                        <div className="client-img">
                            <img src="/img/client-img/client.jpg" alt="Image" />
                            <h3>Б.Ган-Эрдэнэ</h3>
                            <span>Мэргэжил</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </section>
    )
}

export default Testimonials;