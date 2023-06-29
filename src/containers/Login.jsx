import { Button, Container, Grid } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";

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

  return (
    <>
      <Container sx={{ mt: 10 }}>
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
