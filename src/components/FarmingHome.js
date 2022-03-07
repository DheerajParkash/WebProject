/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function FarmingHome(){
    return(
        <>
            <section className="farming-area farming-bg pt-120 pb-140" data-background="img/bg/farming_bg.jpg">
                <div className="container">
                    
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center">
                                <h6 className="sub-title">your dream gallery</h6>
                                <h2 className="title"><span>Benefits of</span> Organic Farming</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="organic-farm-item">
                                <div className="org-frm-icon">
                                    <i className="flaticon-cauliflower"></i>
                                    <img src="img/images/organic_item_shape01.png" alt="" class="org-frm-icon-shape"/>
                                </div>
                                <div className="org-frm-content">
                                    <h4><a href="#">Organic Agriculture</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                    <a href="#" className="btn green-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="organic-farm-item">
                                <div className="org-frm-icon">
                                    <i className="flaticon-cow-head"></i>
                                    <img src="img/images/organic_item_shape02.png" alt="" className="org-frm-icon-shape"/>
                                </div>
                                <div className="org-frm-content">
                                    <h4><a href="#">More Dairy Products</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                    <a href="#" className="btn green-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="organic-farm-item">
                                <div className="org-frm-icon">
                                    <i className="flaticon-null"></i>
                                    <img src="img/images/organic_item_shape03.png" alt="" className="org-frm-icon-shape"/>
                                </div>
                                <div className="org-frm-content">
                                    <h4><a href="#">Improved Symbiosis</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                    <a href="#" className="btn green-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="organic-farm-item">
                                <div className="org-frm-icon">
                                    <i class="flaticon-duck"></i>
                                    <img src="img/images/organic_item_shape04.png" alt="" className="org-frm-icon-shape"/>
                                </div>
                                <div className="org-frm-content">
                                    <h4><a href="#">Livestock Farming</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was key development.</p>
                                    <a href="#" className="btn green-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}