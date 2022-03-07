import React from "react";
import SliderHome from './slider_home'
import FeaturesHome from "./FeaturesHome";
import Faqhome from "./Faq_home";
import FarmingHome from "./FarmingHome";
import BlogHome from "./BlogHome";
export default function Home(){
        return(<>
        <SliderHome/>
        <FeaturesHome />
        <Faqhome/>
        <FarmingHome/>
        <BlogHome/>       
        </>);
    }