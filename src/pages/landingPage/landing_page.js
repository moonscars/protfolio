import React, { useState } from "react";
import './landing_page.css'
import { useNavigate } from "react-router-dom";

 

const LandingPages = () => {
    const nav = useNavigate()
    const [mainEffect, setmainEffect] = useState({})
    const [mainEffectone, setmainEffectone] = useState({})
    const visit = () => {
        setmainEffect({ 'transform': 'rotate(180deg)' })
        setmainEffectone({ 'transform': 'rotate(90deg)' })
        setTimeout(() => { nav('/home') }, 2000)
    }
    return (
        
        <div className="Landing_Container">
            <div className="Landing_Conic" style={mainEffect}></div>
            <div className="Landing_Middle">
            
                <p className="Landing_Page_Text">
                    Full-Stack
                </p>
                <p className="Landing_Page_Text_two">
                    Developer
                </p>
        

                <button className="Landing_Page_Visit_btn" onClick={visit}>
                    <p className="Landing_Page_Visit_btn_label">visit</p>
                </button>
            </div>
            <div className="Landing_Conic_one" style={mainEffectone}></div>

        </div>
    );
}

export default LandingPages;