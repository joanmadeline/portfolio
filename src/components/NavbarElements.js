import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: none;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
 
export const NavLink = styled(Link)`
  color: #ffffff;
  font-family: 'Jost';
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;
  &.active {
    color: #c32148;
  }
  &:hover {
    color: #c32148;
  }
  &:first-child {
    padding-left: 0;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 999;
  }
  // &.mobileMenu {
  //   display: none;
  // }
`;

export const MenuToggle = styled.div`
// display: inline-block;
border: 0;
background: none;
outline: 0;
padding: 0;
cursor: pointer;
border-bottom: 4px solid #ffffff;
width: 28px;
position: fixed;
right: 20px;
top: 30px;
height: auto;
z-index: 9;
transition: transform 0.4s ease-in-out;
display: none;
@media screen and (max-width: 768px) {
  display: block;
}
&:before {
  content: "";
  display: block;
  border-bottom: 4px solid #ffffff;
  width: 100%;
  margin-bottom: 5px;
  transition: transform 0.4s ease-in-out;
}
&:after {
  content: "";
  display: block;
  border-bottom: 4px solid #ffffff;
  width: 100%;
  margin-bottom: 5px;
}
&.mobileMenu {
  // border-bottom: 4px solid transparent;
  transform: rotate(405deg) translateY(-10px) translateX(0px);
}
&.mobileMenu:before {
  transform: rotate(90deg) translateY(0px) translateX(18px);
}
&.mobileMenu:after {
  border-bottom: 4px solid transparent;
}
`

export const MobileNav = styled.nav`
  background: none;
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileLink = styled(Link)`
  color: #ffffff;
  font-family: 'Jost';
  text-transform: uppercase;
  text-align: left;
  font-weight: 700;
  display: block;
  // align-items: center;
  text-decoration: none;
  padding: 1rem;
  // height: 100%;
  cursor: pointer;
  transition: 0.3s;
  &.active {
    color: #19110f;
  }
  &:hover {
    color: #19110f;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 20rem;
  max-width: 60%;
  background: #c32148;
  padding: 60px 15px;
  &.mobileMenu {
    display: block;
  }
  // @media screen and (max-width: 768px) {
  //   display: block;
  // }
`;