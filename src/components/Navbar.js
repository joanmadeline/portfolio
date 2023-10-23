import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
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
            </Nav>
        </>
    );
};
 
export default Navbar;