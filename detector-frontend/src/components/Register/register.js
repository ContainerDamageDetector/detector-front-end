import React, { Component } from "react";
import NavigationComponent from "../Navigation/navigation";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { login } from "../../services/auth.service";
import { authentication } from "../../App.js";
import { toast } from 'react-toastify';


class RegisterComponent extends Component {
  state = {};

  render() {
    const initialValues = {
      username: "",
      password: "",
    };

    const onSubmit = (values, props) => {
      console.log(values);
      // console.log(JSON.stringify(values,null,2));

      // set input values and call login api
    //   login({
    //     username: values.userName,
    //     password: values.password,
    //   })
    //     .then((res) => {
    //       console.log(authentication.getLoginInStatus());
    //       const { data } = res.data;
    //       localStorage.setItem("accessToken", data.tokens.accessToken);
    //       const newUser = { name: data.user.username, loggedIn: true };
    //       localStorage.setItem("userData", JSON.stringify(newUser));
    //       this.props.history.push("/");
    //       // setUser(newUser);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       toast.error("Incorrect Username or Password", {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     });

      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);

      console.log(props);
    };

    return (
      <div>
        {/* <Grid item xs={1}></Grid> */}
        <Grid container>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <Container component="main" maxWidth="sm">
                <div>
                  <NavigationComponent></NavigationComponent>
                </div>
                <Box
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Create User
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="fullName"
                      label="Full Name"
                      name="fullName"
                      autoComplete="fullName"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
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
                      autoComplete="current-password"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="role"
                      label="Role"
                      type="role"
                      id="role"
                    />
                    
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onSubmit={onSubmit}
                    >
                      Create
                    </Button>
                    
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RegisterComponent;
