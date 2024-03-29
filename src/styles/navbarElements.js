// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa"
import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
  border-radius: 10px;
  background: #e6f1f9;
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #6fa0c3;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  white-space: nowrap; /* Запрещаем перенос строк */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`

export const NavBtnLinkLogIn = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`
