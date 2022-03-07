/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default class Footer extends React.Component {
    render() {
        return (<>
            <footer style={{'marginTop': '200px','marginBottom': '1px'}}>
                <div className="footer-top footer-bg fix" data-background="img/bg/footer_bg.jpg"
                style={{'background-image': 'url("img/bg/footer_bg.jpg"'}}>
                    
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget mb-50">
                                    <div className="footer-logo mb-35">
                                        <a href="index.html"><img src="img/logo/SafeCrop1.png" alt=""></img></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>SafeCrop Farming of relse etras sheets connig passag.</p>
                                        <div className="footer-contact">
                                            <ul>
                                                <li><i className="fas fa-map-marker-alt"></i> <span>Address : </span>Sukkur IBA University, Sukkur, Sindh , Pakistan</li>
                                                <li><i className="fas fa-headphones"></i> <span>Phone : </span>+92 333 1234567</li>
                                                <li><i className="fas fa-envelope-open"></i><span>Email : </span><a href="https://themebeyond.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2c45424a436c495449415c4049024f4341">dheerajParkash36@gmail.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget mb-50">
                                    <div className="fw-title mb-35">
                                        <h5>Products</h5>
                                    </div>
                                    <div className="fw-link">
                                        <ul>
                                            <li><a href="#">Hydroponic (26)</a></li>
                                            <li><a href="#">Agriculture (11)</a></li>
                                            <li><a href="#">Foods (9)</a></li>
                                            <li><a href="#">Milking (3)</a></li>
                                            <li><a href="#">Nutrition (3)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget mb-50">
                                    <div className="fw-title mb-35">
                                        <h5>Need Help?</h5>
                                    </div>
                                    <div className="footer-blog-post">
                                        <ul>
                                            <li>
                                                <div className="f-blog-post-thumb">
                                                    <a href="#"><img src="img/blog/f_blog_thumb01.jpg" alt=""></img></a>
                                                </div>
                                                <div className="f-blog-post-content">
                                                    <h5><a href="#">Agriculture is the science and art of cultivating</a></h5>
                                                    <span>Tonoy Pueyo</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="f-blog-post-thumb">
                                                    <a href="#"><img src="img/blog/f_blog_thumb01.jpg" alt=""></img></a>
                                                </div>
                                                <div className="f-blog-post-content">
                                                    <h5><a href="#">Whereby farming doated species create</a></h5>
                                                    <span>Mark Wiens</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget mb-50">
                                    <div className="fw-title mb-35">
                                        <h5>Follow us</h5>
                                    </div>
                                    <div className="footer-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-widget mb-50">
                                    <div className="fw-title mb-30">
                                        <h5>newsletter sign up</h5>
                                    </div>
                                    <div className="footer-newsletter">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your email"></input>
                                                <button><i className="fas fa-rocket"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-shape fb-shape1 running"><img src="img/images/footer_vector01.png" alt=""></img></div>
                    <div className="footer-bottom-shape fb-shape2"><img src="img/images/footer_vector02.png" alt=""></img></div>
                    <div className="footer-bottom-shape fb-shape3"><img src="img/images/footer_vector03.png" className="rotateme" alt=""></img></div>
                </div>
                
            </footer>
        </>)
    }
}