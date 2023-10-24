import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: none;
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
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
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  // @media screen and (max-width: 768px) {
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   transform: translate(-100%, 75%);
  //   font-size: 1.8rem;
  //   cursor: pointer;
  //   z-index: 999;
  // }
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
    // display: none;
  }
`;