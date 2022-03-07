import React from "react";

export default function BreadCrumbContacts(){
    return(
        <>
            <section className="breadcrumb-area breadcrumb-bg" data-background="img/bg/breadcrumb_bg02.jpg" 
            style={{'backgroundImage':"url(img/bg/breadcrumb_bg02.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2>Contact US</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}