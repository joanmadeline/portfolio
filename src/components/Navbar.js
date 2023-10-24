import React from "react";
import { Nav, NavLink, NavMenu,  Bars }
    from "./NavbarElements";
import logo from "../assets/logo.png";
 
const Navbar = () => {
    return (
        <>
        {/* <div className="container mx-auto px-4 py-20 sm:px-8 md:px-4 lg:px-24 xl:px-40"> */}
            <Nav className="mx-auto px-4 sm:px-8 md:px-4 lg:px-24 xl:px-40">
                
                <NavLink to="/"><img src={logo} className="app-logo" alt="logo" /></NavLink>
                <NavMenu>
                <   NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        My Projects
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Say Hi 👋
                    </NavLink>
                </NavMenu>
                {/* <Bars /> */}
            </Nav>
            {/* </div> */}
        </>
    );
};
 
export default Navbar;