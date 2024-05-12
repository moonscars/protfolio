import React from 'react';
import Header from '../Component/header/header';
import Welcome from '../Component/welcome/welcome';
import Skill from '../Component/skills/skill';
import Projects from '../Component/projects/projects';
import Footer from '../Component/footer/footer';

const HomePage = () => {
    return (
        <>
        <Header />
        <Welcome/>
        <Skill/>
         
        <Projects/>
        <Footer/>
        </>
    );
}
export default HomePage;