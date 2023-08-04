import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error === "User already exists") {
      alert("User already exists");
      clearErrors();
    }
  });

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    }

    login({
      email,
      password,
    });
  };

  return (
    <Grid
      container
      sx={{
        marginTop: { md: "6%", xs: "20%" },
        height: "60vh",
        padding: "2%",
        display: "flex",
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Grid item md={6} sx={{ padding: "5%" }}>
        <Typography component="h1" variant="h3" sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            value={email}
            onChange={onChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={onChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            onClick={onSubmit}
            fullWidth
            sx={{
              bgcolor: "#D1410C",
              "&.MuiButtonBase-root:hover": { bgcolor: "#ed7115" },
              marginTop: "5%",
            }}
          >
            <Typography sx={{ color: "white" }}>Done</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item md={6} sx={{ display: { md: "block", xs: "none" } }}>
        <img src={require("../login_image.jpg")} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};
export default Login;
