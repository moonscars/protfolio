import React, { useEffect, useState } from "react";
import './welcome.css'
import photo from '../../../images/coder.png'
const Welcome = () => {
    const [style,mystyle] = useState({
        opacity: 0,
        transition:" all 1s",
        transform: "rotateY(45deg)",
    })
    useEffect(()=>{
        

            mystyle(
                {
                    opacity: 1,
                    transition:" all 1s",
                    transform: "rotateY(0deg)"
                }
            )
         

    })
    return (
        <div className="wel_wrap" style={style} id ='welcome'>
            <div className="wel_left_sec">
                <p className="wel_txt1">    Hi! 👋   </p>
                <p className="wel_txt2">   I`m  <b style={{ 'color': '#fb0267' }}>Abhishek Singh</b>  </p>
                <p className="wel_txt3">
                     A passionate Full Stack Developer 🚀  having an
                    experience of building web and moblie
                    appicliation with some of the
                    latest and best tech stack .
                 </p>
                 <button className="download_btn">
                    <p className="download_btn_label>">
                    Download Resuma</p>
                    </button>
            </div>

            <div className="wel_right_sec">
                 <div className="wel_img_wrap">
                    <img src={photo} alt='img'/>
                 </div>
            </div>
        </div>
    );
}
export default Welcome;