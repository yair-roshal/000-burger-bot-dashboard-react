// components/Navbar/index.js

import React from "react"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLinkLogIn,
} from "styles/navbarElements"

import { Typography, Box } from "@mui/material"

import { useAuth0 } from "@auth0/auth0-react"
import { IoSettingsSharp } from "react-icons/io5"
import { pagesDashboards } from "constants/constants"
import { FlexRowContainer } from "styles/styledComponents"

export const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  // const { loginWithRedirect, logout } = useAuth0();
  // const isAuthenticated = true;

  // const user = {
  // 	nickname: "cafecafe",
  // 	picture: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  // };

  return (
    <>
      {isAuthenticated && (
        <Nav>
          {isAuthenticated && (
            <NavMenu>
              {pagesDashboards.map((page, index) => (
                <NavBtnLink key={index} to={page.href}>
                  {page.name}
                </NavBtnLink>
              ))}

              {user?.picture && (
                <img
                  className="avatar_img"
                  style={{ width: "50px", margin: "10px 10px 10px 40px" }}
                  src={user?.picture}
                  alt={user?.nickname}
                />
              )}

              {isAuthenticated && (
                <FlexRowContainer>
                  <Typography sx={{ p: 1 }}>hello {user?.nickname} </Typography>

                  <NavBtnLinkLogIn to="/" onClick={() => logout()}>
                    logout
                  </NavBtnLinkLogIn>

                  <NavBtnLinkLogIn to="/settings">
                    <IoSettingsSharp
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginTop: "5px",
                      }}
                    />
                  </NavBtnLinkLogIn>
                </FlexRowContainer>
              )}
            </NavMenu>
          )}

          {/* Second Nav */}
        </Nav>
      )}
    </>
  )
}
