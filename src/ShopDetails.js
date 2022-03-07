import React from "react";
import BreadCrumbShopDetails from './components/BreadCrumbShopDetails'
import ProductDetails from "./productDetails";

export default function ShopDetails(){
    return(
        <>
            <BreadCrumbShopDetails/>
            <ProductDetails/>
        </>
    )
}