import { Button, Container, Grid, TextField } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("RESULT", result);
        const userName = result.user.displayName;
        navigate("/home", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    if (email === "abcd@email.com" && password === "12345") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ height: "100vh" }}
        >
          <Grid item lg={12}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              // defaultValue="Hello World"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ height: "100vh" }}
        >
          <Grid item>
            <button
              onClick={onLoginClick}
              style={{
                height: "40px",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "25px",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GoogleIcon sx={{ mr: 5 }} />
              <span>Signin with Google</span>
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
