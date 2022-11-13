import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqStyleOne = () => {
    return (
        <section className="faq-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>Frequently Asked Questions</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="faq-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											What's The Difference Between IDS And IBS?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											How Is Encryption Different From Hacking
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											What Is Firewall And Why It Is Used?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											What Steps Will You Take To Secure server
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											What Is Firewall And Why It Is Used?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

								<AccordionItem uuid="f">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
											What's The Difference Between IDS And IBS?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
										<p>Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
						</div>
					</div>
					
					<div className="col-lg-6">
						<div className="faq-img">
							<img src="/img/faq-img.jpg" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default FaqStyleOne;