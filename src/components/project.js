import React from "react";
import CTA from "./CTA";
import "./project.css";
import { BiLogoGithub } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";

const Project = (props) => {
  const screenshot = props.screenshot;
  const name = props.name;
  const url = props.url;
  const github = props.github;

  return (
    <div className="project grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
      <a href={url} target="blank">
        <img
          src={screenshot}
          alt="To Do List Desktop"
          className="w-96 m-auto md:m-0"
        />
      </a>
      <div className="text-center md:text-left">
        <h2 className="project-title">{name}</h2>
        <CTA url={url} icon={<TbWorldWww />} text="View Live Site" />
        <CTA url={github} icon={<BiLogoGithub />} text="View Code" />
      </div>
    </div>
  );
};

export default Project;
