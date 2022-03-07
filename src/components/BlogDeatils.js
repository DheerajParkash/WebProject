import React from "react";
import BlogDeatilsDescription from "./BlogDetailsDescription";
import BreadCrumbBlogDetails from "./BreadCrumbBlogDetails";

export default function BlogDetails(){
    return(
        <>
            <BreadCrumbBlogDetails/>
            <BlogDeatilsDescription/>
        </>
    )
}