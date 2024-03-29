import * as React from "react"
import { styled, useTheme } from "@mui/material/styles"
import MuiAppBar from "@mui/material/AppBar"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import BookIcon from "@mui/icons-material/Book"
import {
  Box,
  Drawer,
  Toolbar,
  CssBaseline,
  Typography,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"

import { pagesDashboards } from "constants/constants"

import { Link } from "react-router-dom"
// import { useMainPage } from 'hooks'
import { FlexRowContainer } from "styles/styledComponents"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLinkLogIn,
} from "styles/navbarElements"

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}))

const MenuBarStyle = {
  "display": "none",
  "@media(max-width: 740px)": {
    display: "flex",
  },
}

//   styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `

export function MenuBar() {
  // const hrefMainPage = useMainPage()

  const hebrewDate = new Intl.DateTimeFormat("en-u-ca-hebrew", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date())

  const gregorianDate = new Date()
  const gregorianDateStr = gregorianDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleMenuItemClick = () => {
    handleDrawerClose()
  }
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  const FullscreenOverlayBox = styled(Box)({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	// backgroundColor: "rgba(0, 0, 0, 0.9)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 1000,
  });
  
  return (
    <>
      {!isAuthenticated && (
        <FullscreenOverlayBox>
			<FlexRowContainer>
			  <Typography sx={{ p: 1 }}>hello guest, please log in </Typography>
			  <NavBtnLinkLogIn to="/" onClick={() => loginWithRedirect()}>
				login
			  </NavBtnLinkLogIn>
			</FlexRowContainer>
		</FullscreenOverlayBox>
      )}

      {isAuthenticated && (
        <Box sx={MenuBarStyle}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/* <Typography variant='h6' noWrap sx={{ flexGrow: 1, textAlign: 'center' }} component='div'>
              {hrefMainPage.slice(1).toUpperCase()}
            </Typography> */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "200px",
                  height: "50px",
                  padding: "5px",
                  borderRadius: "10px",
                  border: "1px solid #d0d0d0",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              >
                <Typography
                  noWrap
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                  component="div"
                >
                  {hebrewDate}
                </Typography>
                <Typography
                  noWrap
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                  component="div"
                >
                  {gregorianDateStr}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ display: open ? "none" : "block" }}
                  // sx={{ ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <DrawerHeader />
          <Drawer
            sx={{
              "width": drawerWidth,
              "flexShrink": 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {/* <ChevronRightIcon />  */}
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>

            <Divider />
            <List>
              {/* list buttons============== */}
              {pagesDashboards.map(
                (pagesDashboard) =>
                  pagesDashboard.pageType === "up" && (
                    <Link
                      key={pagesDashboard.name}
                      onClick={handleDrawerClose}
                      to={pagesDashboard.href}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleMenuItemClick()}>
                          <ListItemIcon>
                            <BookIcon />
                          </ListItemIcon>
                          <ListItemText primary={pagesDashboard.name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  )
              )}
            </List>
            <Divider />
            <List>
              {pagesDashboards.map(
                (pagesDashboard) =>
                  pagesDashboard.pageType === "down" && (
                    <Link
                      key={pagesDashboard.name}
                      onClick={handleDrawerClose}
                      to={pagesDashboard.href}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleMenuItemClick()}>
                          <ListItemIcon>
                            <BookIcon />
                          </ListItemIcon>
                          <ListItemText primary={pagesDashboard.name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  )
              )}
            </List>
          </Drawer>
        </Box>
      )}
    </>
  )
}
