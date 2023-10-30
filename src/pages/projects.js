import React from "react";
import ToDoList from '../assets/to-do-list.png';
import './project.css';
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <img src={ToDoList} alt="To Do List Desktop" className="w-96 m-auto md:m-0" />
                        <div className="text-center md:text-left">
                            <h2 className="project-title">To Do List</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Projects;