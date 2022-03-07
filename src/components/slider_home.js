/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default class SliderHome extends React.Component{
    render(){
        return(
        <section className="slider-area">
                <div className="slider-active">
                    <div className="single-slider slider-bg fix" data-background="img/slider/slider_bg01.jpg"
                    style={{'backgroundImage': 'url("img/slider/slider_bg01.jpg")', 'width': '1349px', 'position': 'relative', 
                            'left': '0px', 'top': '0px', 'z-index': '998', 'opacity': '0', 'transition': 'opacity 500ms ease 0s'}}   >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content text-center">
                                        <h2 data-animation="fadeInUp" data-delay=".3s">organic and natural</h2>
                                        <h6 data-animation="fadeInUp" data-delay=".6s">Agriculture is the science and art of cultivating plants and livestock</h6>
                                        <div className="slider-btn">
                                        <Link to='/shop' className="btn btn-danger" data-animation="fadeInLeft" data-delay=".9s"> Shop Now</Link>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape"><img src="img/slider/slider_shape01.png" data-animation="fadeInLeft" data-delay="1.1s" alt=""></img></div>
                        <div className="slider-shape shape-2"><img src="img/slider/slider_shape02.png" data-animation="fadeInRight" data-delay="1.1s" alt=""></img></div>
                    </div>
                    <div className="single-slider slider-bg fix" data-background="img/slider/slider_bg02.jpg"
                    style={{'backgroundImage': 'url("img/slider/slider_bg02.jpg")', 'width': '1349px', 'position': 'relative', 
                    'left': '0px', 'top': '0px', 'z-index': '998', 'opacity': '0', 'transition': 'opacity 500ms ease 0s'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content text-center">
                                        <h2 data-animation="fadeInUp" data-delay=".3s">organic and natural</h2>
                                        <h6 data-animation="fadeInUp" data-delay=".6s">Agriculture is the science and art of cultivating plants and livestock</h6>
                                        <div className="slider-btn">
                                        <Link to='/shop' className="btn btn-danger" data-animation="fadeInLeft" data-delay=".9s"> Shop Now</Link>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape"><img src="img/slider/slider_shape01.png" data-animation="fadeInLeft" data-delay="1.1s" alt=""></img></div>
                        <div className="slider-shape shape-2"><img src="img/slider/slider_shape02.png" data-animation="fadeInRight" data-delay="1.1s" alt=""></img></div>
                    </div>
                    <div className="single-slider slider-bg fix" data-background="img/slider/slider_bg03.jpg"
                    style={{'backgroundImage': 'url("img/slider/slider_bg03.jpg")', 'width': '1349px', 'position': 'relative', 
                    'left': '0px', 'top': '0px', 'z-index': '998', 'opacity': '0', 'transition': 'opacity 500ms ease 0s'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content text-center">
                                        <h2 data-animation="fadeInUp" data-delay=".3s">organic and natural</h2>
                                        <h6 data-animation="fadeInUp" data-delay=".6s">Agriculture is the science and art of cultivating plants and livestock</h6>
                                        <div className="slider-btn">
                                            <Link to='/shop' className="btn btn-danger" data-animation="fadeInLeft" data-delay=".9s"> Shop Now</Link>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape"><img src="img/slider/slider_shape01.png" data-animation="fadeInLeft" data-delay="1.1s" alt=""></img></div>
                        <div className="slider-shape shape-2"><img src="img/slider/slider_shape02.png" data-animation="fadeInRight" data-delay="1.1s" alt=""></img> </div>
                    </div>
                </div>
                <div className="slider-bottom-bg" data-background="img/slider/slider_bottom.png"></div>
                
           </section>            
        )
    }
}