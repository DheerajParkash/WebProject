import React from "react";

export default function FaqAbout(){
    return(
        <>
            <section className="faq-area faq-bg pt-120 pb-120" data-background="img/bg/faq_bg02.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-image">
                                <img src="img/images/faq_img.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-wrap faq-style-two">
                                <div className="section-title mb-50">
                                    <h6 className="sub-title">asked questions</h6>
                                    <h2 className="title"><span>Answer</span> Particular Topic</h2>
                                </div>
                                <div id="accordion">
                                    <h3>What is farming in agriculture?</h3>
                                    <div className="accordion-content">
                                        <p>Farming is growing crops or keeping animals by people for food and raw materials. Farming is a part of agriculture.
                                        People probably started agriculture</p>
                                    </div>
                                    <h3>What is difference between farming and agriculture?</h3>
                                    <div className="accordion-content">
                                        <p>Farming is growing crops or keeping animals by people for food and raw materials. Farming is a part of agriculture.
                                        People probably started agriculture</p>
                                    </div>
                                    <h3>What is importance of farming?</h3>
                                    <div className="accordion-content">
                                        <p>Farming is growing crops or keeping animals by people for food and raw materials. Farming is a part of agriculture.
                                        People probably started agriculture</p>
                                    </div>
                                    <h3>What is agriculture and its importance?</h3>
                                    <div className="accordion-content">
                                        <p>Farming is growing crops or keeping animals by people for food and raw materials. Farming is a part of agriculture.
                                        People probably started agriculture</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}