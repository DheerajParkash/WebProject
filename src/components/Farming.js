import React from "react";
import FaqAbout from "./faqAbout";
import FeaturesAbout from "./featureAbout";
import Plating from "./planting";
import SliderFarming from "./sliderFarming";

export default function Farming(){
    return(
        <>
            <SliderFarming/>
            <FeaturesAbout/>
            <Plating/>
            <FaqAbout/>
        </>
    )
}