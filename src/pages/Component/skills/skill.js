import React, { useState, useEffect } from "react";
import './skill.css';

import react from '../../../images/react.png';
import django from '../../../images/django.png';
import sql from '../../../images/sql.png';
import python from '../../../images/python.png';
import javascrit from '../../../images/javascript.png';
import html from '../../../images/html.png';
import css from '../../../images/css.png';

const Skill = () => {
   const [style, mystyle] = useState({
      opacity: 0,
      transition: " all 1s",
      transform: "rotateY(45deg)",
   })
   useEffect(() => {
      window.addEventListener('scroll',
         () => {
            
            if (window.scrollY >= document.getElementById('welcome').offsetHeight - 600) {

               mystyle(
                  {
                     opacity: 1,
                     transition: " all 1s",
                     transform: "rotateY(0deg)"
                  }
               )
            }              else{
               mystyle(
                   {
                      opacity: 0,
                      transition: " all 1s",
                      transform: "rotateY(45deg)"
                   }  )
             }

         }
      )


   })
   const skill_set =

      [
         {
            img: react,
            name: 'Reactjs - Frontend'
         },
         {
            img: django,
            name: 'django - backend'
         },
         {
            img: sql,
            name: 'sql - database'
         },
         {
            img: python,
            name: 'python'
         },
         {
            img: javascrit,
            name: 'javascript'
         },
         {
            img: react,
            name: 'react native  - mobile'
         },
         {
            img: html,
            name: 'html'
         },
         {
            img: css,
            name: 'css'
         },
      ];
   return (


      <div className="skill_wrap" id='skill' style={style}>

         <p className="skill_Title">My Skills</p>

         <div className="skill_set">


            {skill_set.map((skill, index) => {
               return (
                  <div className="skill_Card">
                     <div className="skill_img">
                        <img src={skill.img} alt='img' />
                     </div>
                     <p className="skill_name">{skill.name}</p>
                  </div>
               );
            })}

         </div>

      </div>

   );
}
export default Skill;