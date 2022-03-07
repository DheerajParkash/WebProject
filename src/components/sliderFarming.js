import React from "react";

export default function SliderFarming() {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg" data-background="img/bg/breadcrumb_bg03.jpg"
            style={{'backgroundImage':'url(img/bg/breadcrumb_bg03.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2>Farming <span>Strategy</span></h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Farming Strategy</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="breadcrumb-shape"><img src="img/images/breadcrumb_shape01.png" alt=""/></div>
                <div class="breadcrumb-shape"><img src="img/images/breadcrumb_shape02.png" alt=""/></div>
            </section>
        </>
    )
}