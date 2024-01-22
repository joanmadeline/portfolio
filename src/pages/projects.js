import React from "react";
import Project from "../components/project";
import ToDoList from "../assets/to-do-list.png";
import WeatherApp from "../assets/weather-app-coming-soon.png";

// import ToDoListMobile from '../assets/to-do-list-mobile.png';

const Projects = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="container m-auto px-10 py-20 sm:px-10 md:px-12 lg:px-24 xl:px-60">
          <div className="grid grid-cols-1 gap-8">
            <h1 className="title grid">My Works</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae tempus quam. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Mauris a diam maecenas sed enim ut sem. Euismod elementum nisi quis eleifend quam. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Potenti nullam ac tortor vitae purus faucibus ornare. Sagittis orci a scelerisque purus semper eget duis at tellus. Lacus sed viverra tellus in. Sagittis purus sit amet volutpat. Tempor orci dapibus ultrices in. Nisl purus in mollis nunc sed id. In massa tempor nec feugiat nisl pretium fusce. Tellus integer feugiat scelerisque varius. Vitae turpis massa sed elementum tempus egestas sed sed. Donec massa sapien faucibus et molestie ac feugiat. Non consectetur a erat nam at lectus urna duis. Semper risus in hendrerit gravida rutrum.</p>  */}
          </div>
        </div>

        <div className="container m-auto px-10 py-10 sm:px-10 md:px-12 lg:px-24 xl:px-60">
          <Project
            screenshot={WeatherApp}
            name="Weather App"
            url="#"
            github="https://github.com/joanmadeline/weather-app"
          />
          <Project
            screenshot={ToDoList}
            name="To Do List"
            url="https://to-do-list-madelineponiman.vercel.app/"
            github="https://github.com/joanmadeline/to-do-list"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
