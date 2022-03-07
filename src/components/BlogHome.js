/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function BlogHome(){
    return(
        <>
            <section className="blog-area blog-bg pt-120 pb-90" data-background="img/bg/blog_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-70">
                                <h6 className="sub-title">FROM THE BLOG</h6>
                                <h2 className="title"><span>Latest</span> News & Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post-item mb-30">
                                <div className="blog-post-thumb position-relative">
                                    <a href="blog-details.html"><img src="img/blog/blog_post_thumb01.jpg" alt=""/></a>
                                    <a href="#" class="blog-post-tag"><i class="fas fa-tag"></i>Rice Field</a>
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-meta">
                                        <ul>
                                            <li><i className="far fa-user"></i><a href="#">Admin</a></li>
                                            <li><i className="far fa-calendar-alt"></i>OCTOBER 23, 2020</li>
                                        </ul>
                                    </div>
                                    <h4><a href="blog-details.html">The Best Milk in the State</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was development.</p>
                                    <a href="#" className="arrow-btn">Read More <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post-item mb-30">
                                <div className="blog-post-thumb position-relative">
                                    <a href="blog-details.html"><img src="img/blog/blog_post_thumb02.jpg" alt=""/></a>
                                    <a href="#" className="blog-post-tag"><i className="fas fa-tag"></i>Rice Field</a>
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-meta">
                                        <ul>
                                            <li><i className="far fa-user"></i><a href="#">Admin</a></li>
                                            <li><i className="far fa-calendar-alt"></i>OCTOBER 23, 2020</li>
                                        </ul>
                                    </div>
                                    <h4><a href="blog-details.html">Poultry Farming Husbandry</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was development.</p>
                                    <a href="#" className="arrow-btn">Read More <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post-item mb-30">
                                <div className="blog-post-thumb position-relative">
                                    <a href="blog-details.html"><img src="img/blog/blog_post_thumb03.jpg" alt=""/></a>
                                    <a href="#" className="blog-post-tag"><i class="fas fa-tag"></i>Rice Field</a>
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-meta">
                                        <ul>
                                            <li><i className="far fa-user"></i><a href="#">Admin</a></li>
                                            <li><i className="far fa-calendar-alt"></i>OCTOBER 23, 2020</li>
                                        </ul>
                                    </div>
                                    <h4><a href="blog-details.html">Cultivating Plants Livestock</a></h4>
                                    <p>Agricultural mean crops livestock and livestock products Agriculture was development..</p>
                                    <a href="#" class="arrow-btn">Read More <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}