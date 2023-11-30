import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="container m-auto px-10 py-20 sm:px-10 md:px-12 lg:px-24 xl:px-60">
          <div className="flex flex-wrap">
            <img src={AboutImg} alt="Disney AI" />
            <div className="grid gap-4 ">
              <h1 className="title grid">About Me</h1>
              <p>
                Hey there, welcome to my little slice of the web! 🌟 I'm the
                Front End Engineer behind the scenes, turning design dreams into
                pixel-perfect websites that pop.
              </p>
              <p>
                I'm fluent in the web's languages: HTML, CSS, and JavaScript,
                and I've got a toolbox loaded with frameworks like React,
                Bootstrap, Tailwind, and jQuery to weave some serious web
                wonders.
              </p>
              <p>
                But hey, it's not just about the code for me. I'm all about
                creating experiences that make you grin from ear to ear. How do
                I do it? Clean code and a dash of collaboration.
              </p>
              <p>
                Staying ahead of the tech game is my thing. I'm always on the
                lookout for what's new and exciting because innovation is where
                the real fun happens!
              </p>
              <p>
                Take a spin through my portfolio and see how I mix creativity,
                functionality, and a whole lot of passion into every project.
                Thanks for swinging by, and let's spice up the web together!
              </p>
            </div>
            <div className="grid gap-4">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
