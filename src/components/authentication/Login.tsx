import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { storeContext } from "src/components/provider/Provider";
import { authActions } from "src/store/reducers/auth-reducer";
import { layoutActions } from "src/store/reducers/layout-reducer";

const { REACT_APP_SITE_URL } = process.env;
const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies<string>(["auth"]);
  const { dispatch } = useContext(storeContext);

  const logUser = (token: { data: { token: string } }) => {
    setCookie("id", token.data.token, {
      path: "/",
      maxAge: 1209600
    });
    dispatch({
      type: authActions.AUTH_SET_ALL,
      payload: {
        isLoggedIn: true
      }
    });
    navigate("/");
  };

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement;
  }) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    axios
      .post(`${REACT_APP_SITE_URL}/api/v1/sign_in/`, data)
      .then((res) => {
        logUser(res);
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: false,
            signalMessage: "Logged in successfully!"
          }
        });
      })
      .catch(() => {
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: true,
            signalMessage:
              "Something went wrong! Please check your credentials and try again."
          }
        });
      });
  };

  useEffect(() => {
    if (cookies.id) {
      navigate("/");
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2" component={RouterLink}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
