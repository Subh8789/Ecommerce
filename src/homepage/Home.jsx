import React from "react";
import Products from "./Products";
import Navbar from "../components/Navbar";
import Banner from "../pages/Banner";


function Home(){
    return(
    <>
       <Navbar/>
     <Banner/>
       <Products/>
    </>
    )
}
export default Home;