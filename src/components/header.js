/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component{

   render(){
       return (<>
       <header>
            <div id="sticky-header" className="main-header menu-area transparent-header">
                <div className="container-fluid container-full">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                            <div className="menu-wrap">
                                <div className="header-bg" data-background="img/bg/header_bg.jpg"></div>
                                <nav className="menu-nav show">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo/SafeCrop1.png" alt="Logo"></img>
                                        </a>
                                    </div>
                                 
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active"><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/farming">Farming</Link></li>
                                            <li><Link to="/shop">Shop</Link>
                                            </li>
                                            <li className="dropdown"><a>Blog</a>  
                                                <ul className="submenu">
                                                    <li><Link to="/blog">Our Blog</Link></li>
                                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>


                                    <div className="header-action d-none d-md-block">
                                        <ul>
                                            <li className="header-shop-cart"><a href="#"><i
                                                        className="fas fa-shopping-basket"></i><span>2</span></a>
                                                <ul className="minicart">
                                                    <li className="d-flex align-items-start">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src="../../img/product/cart_p01.jpg" alt=""></img>
                                                            </a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h4>
                                                                <a href="#">Charity Nike Brand Yellow T-Shirt</a>
                                                            </h4>
                                                            <div className="cart-price">
                                                                <span className="new">$229.9</span>
                                                                <span>
                                                                    <del>$229.9</del>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt"></i>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-start">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src="../../img/product/cart_p02.jpg" alt=""></img>
                                                            </a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h4>
                                                                <a href="#">BackPack For School Student</a>
                                                            </h4>
                                                            <div className="cart-price">
                                                                <span className="new">$229.9</span>
                                                                <span>
                                                                    <del>$229.9</del>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt"></i>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="total-price">
                                                            <span className="f-left">Total:</span>
                                                            <span className="f-right">$239.9</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="checkout-link">
                                                            <a href="#">Shopping Cart</a>
                                                            <a className="red-color" href="#">Checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="header-btn"><a href="#" className="btn btn-danger">Sign IN</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            
        
                            {/* <!-- Mobile Menu  --> */}

                            <div className="mobile-menu">
                                <div className="menu-backdrop"></div>
                                <div className="close-btn"><i className="fas fa-times"></i></div>

                                <nav className="menu-box">
                                    <div className="nav-logo"><a href="index.html"><img src="img/logo/w_logo.png" alt="" title=""></img></a>
                                    </div>
                                    <div className="menu-outer">
                                        {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                            <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                            <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                            <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- End Mobile Menu --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        

       </>)
   }
}