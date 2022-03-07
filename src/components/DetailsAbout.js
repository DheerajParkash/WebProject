import React from "react";

export default function DetailsAbout() {
    return (
        <>
            <section className="about-area position-relative fix pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-70">
                                <h6 className="sub-title">about myself</h6>
                                <h2 className="title"><span>Some</span> knowledge Things</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 order-1 col-md-6 col-sm-8">
                            <div className="about-info-list">
                                <ul>
                                    <li>
                                        <div className="about-info-icon">
                                            <i className="flaticon-null-1"></i>
                                        </div>
                                        <div className="about-info-content">
                                            <h6>Live A Healthier Life</h6>
                                            <p>Agriculture was the key development rise of sedentary human species.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-info-icon">
                                            <i className="flaticon-butterfly"></i>
                                        </div>
                                        <div className="about-info-content">
                                            <h6>Chilled Courier Service</h6>
                                            <p>Agriculture was the key development rise of sedentary human species.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 order-0 order-lg-2">
                            <div className="about-img">
                                <img src="img/images/about_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 order-3 col-md-6 col-sm-8">
                            <div className="about-info-list">
                                <ul>
                                    <li>
                                        <div className="about-info-icon">
                                            <i className="flaticon-grain"></i>
                                        </div>
                                        <div className="about-info-content">
                                            <h6>Fresh  Pesticide Free</h6>
                                            <p>Agriculture was the key development rise of sedentary human species.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-info-icon">
                                            <i className="flaticon-farmer"></i>
                                        </div>
                                        <div className="about-info-content">
                                            <h6>Home Grown Goodness</h6>
                                            <p>Agriculture was the key development rise of sedentary human species.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-overlay-text"><h2>Farming</h2></div>
            </section>
        </>
    )
}