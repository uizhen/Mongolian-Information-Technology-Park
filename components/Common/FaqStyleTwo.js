import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqStyleTwo = () => {
    return (
        <section className="faq-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>Түгээмэл асуултууд</h2>
					<p>Мэдээлэл технологийн үндэсний парк нь мэдээллийн технологийн чиглэлийн бүх төрлийн үйлчилгээг үзүүлдэг бөгөөд
                        манай байгууллагын холбогдо утсаар бүх мэдээллийг авах боломжтой.
                    </p>
				</div>

				<div className="row align-items-center">
                    <div className="col-lg-6">
						<div className="faq-img">
							<img src="/img/faq-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="faq-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											Танай байгууллага ямар сургалт явуулдаг вэ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Мэдээллийн аюулгүй байдал болон мэдээллийн технологийн салбарын хамгийн эрэлттэй мэргэжил болох хөгжүүлэлтийн
                                            анхан шатнаас ахисан түвшний сургалт болон хүүхдүүдэд чиглэсэн олон төрлийн сургалтыг явуулдаг.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											Сургалтуудын үнэ ханш хэдэн төгрөг вэ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Мэдээлэл холбооны үндэсний паркийн сургалтууд түвшин болон сургалтын зэрэглэлээс хамааран 250.000-350.000
                                            төгрөгний хооронд байдаг бөгөөд илүү дэлгэрэнгүй мэдээллийг зөвлөхөөс авах боломжтой.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											Мэдээллийн технологийн шалгалтыг хэн өгч болох вэ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Мэдээллийн технологитой холбоотой ажил хөдөлмөр эрхэлдэг болон энэ чиглэлээр суралцдаг хэн бүхэн мэдээллийн
                                            технологийн инженерийн шалгалт болон топсит шалгалтыг өгөх боломжтой. Харин өдөр тутмын хэрэглээндээ компьютер
                                            хэрэглэдэг хэн бүхэн ICDL шалгалтыг өгөх боломжтой.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											Мэдээллийн технологийн шалтгалтыг ямар хэлбэрээр авдаг вэ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Мэдээллийн технологийн инженерийн шалгалтыг Англи болон Монгол хэлээр зөвхөн танхимаар өгнө. Топсит шалгалтыг
                                            зөвхөн Англи хэл дээр танхимаар өгдөг бол ICDL шалгалтыг Англи хэл дээр танхимаас гадна цахимаар өгөх боломжтой.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											Танхим түрээслэхэд хөнгөлөлт байдаг уу?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Хамтын ажиллагааны гэрээтэй байгууллагуудад үйл ажиллагааны онцлогоос хамааран 20-30 хувиар, инкубатор компаниудад
                                            40-50 хувиар, 30-с дээш цагийн сургалт явуулах гэрээ байгуулсан байгууллагуудад нийт үнийн дүнгээс 20 хувиар хөнгөлөлт
                                            үзүүлдэг.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="f">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											Хэрхэн инкубатор компаниар элсэх вэ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Мэдээлэл технологийн үндэсний паркийн мэдээлэл технологийн инкубаторын үйл ажиллагааны журамтай танилцан өөрсдийн гаргаж
                                            буй шинэ санааг элсэлт авах өдөр хүлээлгэн өгснөөр хүсэлтийг хүлээн авч шийдвэрлэх болно.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default FaqStyleTwo;