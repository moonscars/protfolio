import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import LandingPages from "../pages/landingPage/landing_page";
import HomePage from "../pages/homepage/home_page";

const UrlPatterns = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPages/>}/>
            <Route path='/home' element={<HomePage/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default UrlPatterns;