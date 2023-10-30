import { React, useEffect, useState} from "react";
import { Nav, NavLink, NavMenu, MobileNav, MobileLink, MobileMenu, MenuToggle }from "./NavbarElements";
import logo from "../assets/logo.png";
 
const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleMobile = () => {
        setIsActive(current => !current);
    }

    useEffect(() => {
        if (isActive) {
            document.body.classList.add("overflow-hidden");
        }
        else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isActive]);

    return (
        <>
        {/* <div className="container mx-auto px-4 py-20 sm:px-8 md:px-4 lg:px-24 xl:px-60"> */}
            <Nav className="container mx-auto px-10 sm:px-10 md:px-12 lg:px-24 xl:px-60">
                <NavLink to="/"><img src={logo} className="app-logo" alt="logo" /></NavLink>
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/about" >
                        About Me
                    </NavLink>
                    <NavLink to="/projects" >
                        My Projects
                    </NavLink>
                    <NavLink to="/contact" >
                        Say Hi 👋
                    </NavLink>
                </NavMenu>
            </Nav>
            <MobileNav className="container mx-auto px-10 sm:px-10 md:px-12 lg:px-24 xl:px-60">
                <NavLink to="/"><img src={logo} className="app-logo" alt="logo" /></NavLink>
                <MenuToggle onClick={handleMobile} className={isActive ? 'mobileMenu' : ''} />
                <MobileMenu className={isActive ? 'mobileMenu' : ''}>
                    <MobileLink to="/" >
                        Home
                    </MobileLink>
                    <MobileLink to="/about" >
                        About Me
                    </MobileLink>
                    <MobileLink to="/projects" >
                        My Projects
                    </MobileLink>
                    <MobileLink to="/contact" >
                        Say Hi 👋
                    </MobileLink>
                </MobileMenu>
            </MobileNav>
            {/* </div> */}
        </>
    );
};
 
export default Navbar;