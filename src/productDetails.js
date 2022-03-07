/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function ProductDetails(){
    return(
        <>
            <section className="shop-details-area shop-bg pb-120" data-background="img/bg/shop_details_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shop-details-wrap">
                                <div className="row align-items-xl-center">
                                    <div className="col-lg-6">
                                        <div className="shop-details-active">
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img01.jpg" alt=""/>
                                            </div>
                                            {/* <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img02.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img03.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img04.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-img">
                                                <img src="img/shop/shop_details_img03.jpg" alt=""/>
                                            </div> */}
                                        </div>
                                        <div className="shop-details-nav">
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom01.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom02.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom03.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom04.jpg" alt=""/>
                                            </div>
                                            <div className="shop-details-nav-item">
                                                <img src="img/shop/sd_bottom03.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shop-details-content">
                                            <h4>Fresh Trange.</h4>
                                            <div className="shop-details-price">
                                                <h4>€35</h4>
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <span>- 3 Reviews</span>
                                            </div>
                                            <p>Organic farming is an alternative agricultural system which originated early
                                            20th century in reaction to changing farming practices.</p>
                                            <div className="shop-details-info">
                                                <h5>Stock Information</h5>
                                                <ul>
                                                    <li><i className="fas fa-caret-right"></i>In Stock Available</li>
                                                    <li><i className="fas fa-caret-right"></i>Free Delivery Available</li>
                                                    <li><i className="fas fa-caret-right"></i>Sale 30% Off Use Code: Zhy213</li>
                                                </ul>
                                            </div>
                                            <div className="product-weight">
                                                <h4><i className="fas fa-weight-hanging"></i><span>Size Guide :</span></h4>
                                                <ul>
                                                    <li>1kg</li>
                                                    <li className="active">3kg</li>
                                                    <li>5kg</li>
                                                </ul>
                                            </div>
                                            <div className="perched-info">
                                                <div className="cart-plus">
                                                    <form action="#">
                                                        <div className="cart-plus-minus">
                                                            <input type="text" value="1"/>
                                                        </div>
                                                    </form>
                                                </div>
                                                <a href="#" className="btn green-btn add-card-btn">ADD TO CART</a>
                                            </div>
                                            <div className="shop-details-bottom">
                                                <h5><a href="#"><i className="far fa-heart"></i> Add To Wishlist</a></h5>
                                                <ul>
                                                    <li>
                                                        <span>Tag: </span>
                                                        <a href="#">clothing</a>
                                                    </li>
                                                    <li>
                                                        <span>CATEGORIES :</span>
                                                        <a href="#">Avocado,</a>
                                                        <a href="#">Trange,</a>
                                                        <a href="#">apple,</a>
                                                        <a href="#">snack fruit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product-desc-wrap">
                                <ul className="nav nav-tabs mb-50" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="desc-tab" data-toggle="tab" href="#desc" role="tab" aria-controls="desc"
                                            aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info"
                                            aria-selected="false">Additional information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab"
                                            aria-controls="review" aria-selected="false">Reviews (1)</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade  show active" id="desc" role="tabpanel" aria-labelledby="desc-tab">
                                        <h5 className="desc-title">Product Information</h5>
                                        <p className="desc-content">Donec orci enim, bibendu augue aliquet cursus quam. Pellnteue pulvin condimtum dictusapien nibh auctor tortoris
                                        vulputate sapien There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing of Lorem Ipsum, you need</p>
                                    </div>
                                    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <h5 className="desc-title">Product Information</h5>
                                        <p className="desc-content">Donec orci enim, bibendu augue aliquet cursus quam. Pellnteue pulvin condimtum dictusapien nibh auctor tortoris
                                        vulputate sapien There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing of Lorem Ipsum, you need</p>
                                    </div>
                                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        <h5 className="desc-title">Product Information</h5>
                                        <p className="desc-content">Donec orci enim, bibendu augue aliquet cursus quam. Pellnteue pulvin condimtum dictusapien nibh
                                            auctor tortoris
                                            vulputate sapien There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing of Lorem Ipsum, you need</p>
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