import React from "react";
import './header.css';

const Header = () => {
    const gotoContact = ()=>{
        document.getElementById('footer').scrollIntoView({behavior:'smooth'})
    }
    const gotoProject = ()=>{
        document.getElementById('projects').scrollIntoView({behavior:'smooth'})
    }
    return (
        <header>
       
            <div className="Header_name_cont">
  

                <p className="Header_name">Portfolio</p>
 
            </div>
            
            <div className="Header_nav_cont">
                <p className="Header_nav">home</p>
                <p className="Header_nav" onClick={gotoProject}>project</p>
                <p className="Header_nav" onClick={gotoContact}>contact</p>
                <div className="HireMe_btn">
                    <p className="HireMe_btn_label">Hire Me</p>
                </div>
            </div>

 
        </header>
    );
}

export default Header;