import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

// This navbar is reponsive and has a hamburger menu for mobile view
function Navbar() {
  let navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.1rem",
              color: "#F05537",
              textDecoration: "none",
            }}
          >
            Event Wizard
          </Typography>

          <IconButton
            sx={{ display: { md: "none", xs: "block" } }}
            onClick={() => handleOpen(!open)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "block", md: "none" },
              color: "#F05537",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Event Wizard
          </Typography>
          <Box>
            <Menu
              open={open}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={() => setOpen(!open)}
              sx={{
                display: { md: "none", xs: "block" },
              }}
            >
              {user === null ? (
                <>
                  <MenuItem onClick={() => navigate("/login")}>
                    <Typography>Login</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/register")}>
                    <Typography>Register</Typography>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={() => navigate("/addEvent")}>
                    <Typography>Add Event</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/likedEvents")}>
                    <Typography>Liked Events</Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", flexDirection: "row" }}>
            {user === null ? (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  <Typography
                    sx={{ color: "#2E2D2D", textTransform: "none" }}
                    variant="content"
                  >
                    Login
                  </Typography>
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  <Typography
                    sx={{ color: "#2E2D2D", textTransform: "none" }}
                    variant="content"
                  >
                    Register
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/addEvent")}
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  <Typography
                    sx={{ color: "#2E2D2D", textTransform: "none" }}
                    variant="content"
                  >
                    Add Event
                  </Typography>
                </Button>
                <Button
                  onClick={() => navigate("/likedEvents")}
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  <Typography
                    sx={{ color: "#2E2D2D", textTransform: "none" }}
                    variant="content"
                  >
                    Liked Events
                  </Typography>
                </Button>
                <Grid item sx={{ textAlign: "center" }}>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      src="/static/images/avatar/2.jpg"
                      fontSize={"medium"}
                    />
                  </IconButton>
                  <Typography color={"black"} sx={{ fontSize: "small" }}>
                    Hi! {user?.name}
                  </Typography>
                </Grid>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
