/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function FeaturesHome(){
        return (
            <div className="features-area gray-bg pt-80 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-70">
                                <h6 className="sub-title">WHAT WE DO</h6>
                                <h2 className="title"><span>Welcome to</span> Organic Farm</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="features-item text-center mb-30">
                                <div className="features-thumb">
                                    <img src="img/images/features_img01.png" alt="" />
                                    <div className="features-overlay">
                                        <i className="flaticon-cauliflower"></i>
                                    </div>
                                </div>
                                <div className="features-content">
                                    <h4><a href="#">Organic Farm</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="features-item text-center mb-30">
                                <div className="features-thumb">
                                    <img src="img/images/features_img02.png" alt="" />
                                    <div className="features-overlay">
                                        <i className="flaticon-cow-head"></i>
                                    </div>
                                </div>
                                <div className="features-content">
                                    <h4><a href="#">DAIRY PRODUCTS</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="features-item text-center mb-30">
                                <div className="features-thumb">
                                    <img src="img/images/features_img03.png" alt="" />
                                    <div className="features-overlay">
                                        <i className="flaticon-rooster"></i>
                                    </div>
                                </div>
                                <div className="features-content">
                                    <h4><a href="#">POULTRY PRODUCTS</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="features-item text-center mb-30">
                                <div className="features-thumb">
                                    <img src="img/images/features_img04.png" alt="" />
                                    <div className="features-overlay">
                                        <i className="flaticon-heavy-vehicle"></i>
                                    </div>
                                </div>
                                <div className="features-content">
                                    <h4><a href="#">crop harvester</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }