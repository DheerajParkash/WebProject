import React from "react";

export default function ContactDetails() {
    return (
        <>
            <section className="contact-area">
                <div className="contact-info-wrap pt-90 pb-60">
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-around">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="contact-info-box mb-30">
                                    <div className="contact-info-icon">
                                        <img src="img/icon/contact_icon01.png" alt="" />
                                    </div>
                                    <div className="contact-info-content">
                                        <h5>Phone Number</h5>
                                        <span>+92 333 1234567</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="contact-info-box mb-30">
                                    <div className="contact-info-icon">
                                        <img src="img/icon/contact_icon02.png" alt="" />
                                    </div>
                                    <div className="contact-info-content">
                                        <h5>Find Location</h5>
                                        <span>Sukkur IBA University, Sukkur, Sindh, Pakistan</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="contact-info-box mb-30">
                                    <div className="contact-info-icon">
                                        <img src="img/icon/contact_icon03.png" alt="" />
                                    </div>
                                    <div className="contact-info-content">
                                        <h5>Our Mail</h5>
                                        <span><a href="https://themebeyond.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="056c6b636a776864716c6a6b456c6b636a2b666a68">dheerajParkash@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-wrap pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-70">
                                    <h6 className="sub-title">Contact Us</h6>
                                    <h2 className="title"><span>How</span> Can We Help You?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-12">
                                <div className="contact-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Fast Name *" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Phone No" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder="Your Email *" />
                                            </div>
                                        </div>
                                        <textarea name="message" id="message" placeholder="Message"></textarea>
                                        <button className="btn gradient-btn">Send Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact-map"></div>
            </section>
        </>
    )
}