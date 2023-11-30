
import React from "react";
import './home.css';
import ToolingItem from "../components/ToolingItem";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoJquery, BiLogoGithub } from "react-icons/bi";
import { SiRubyonrails, SiAdobephotoshop } from "react-icons/si";
 
const About = () => {
    return (
        <div className="page">
            {/* <div className="container mx-auto"> */}
                <div className="hero">
                    <div className="home-box px-4 sm:px-8 md:px-4 lg:px-24 xl:px-60">
                        <h1 className='text-red text-6xl md:text-7xl'>MADELINE PONIMAN</h1>
                        <h2 className='text-white text-4xl md:text-5xl font-medium'>FRONTEND ENGINEER</h2>
                    </div>
                </div>
            {/* </div> */}
            
            <div className="container m-auto px-10 py-20 sm:px-10 md:px-12 lg:px-24 xl:px-60 text-center">
                <div className="grid grid-cols-1 gap-8">
                    <h3 className="heading grid">TOOLING</h3>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-red p-4 rounded-md">
                        <ToolingItem faIcon={<FaReact />} tooling="React" />
                        <ToolingItem faIcon={<FaHtml5 />} tooling="HTML5" />
                        <ToolingItem faIcon={<FaCss3Alt />} tooling="CSS3" />
                        <ToolingItem faIcon={<BiLogoJavascript />} tooling="JavaScript" />
                        <ToolingItem faIcon={<BiLogoJquery />} tooling="jQuery" />
                        <ToolingItem faIcon={<SiRubyonrails />} tooling="Ruby on Rails" />
                        <ToolingItem faIcon={<SiAdobephotoshop />} tooling="Photoshop" />
                        <ToolingItem faIcon={<BiLogoGithub />} tooling="Git" />
                    </div>
                </div>
            </div>

            <div className="container m-auto px-10 pb-20 sm:px-10 md:px-12 lg:px-24 xl:px-60 text-center">
                <div className="grid grid-cols-1 gap-8">
                    <h3 className="heading grid">MY WORK</h3>

                    {/* <div className="grid grid-cols-4 gap-4 bg-red p-4 rounded-md">
                    </div> */}
                </div>
            </div>
        </div>
    );
};
 
export default About;