import React, { useContext } from "react";
import NavigationComponentL from "../Navigation/navigationL";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";
import { authentication } from "../../App.js";
import { BrowserRouter, useNavigate } from "react-router-dom";

function LoginComponent() {
  // const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  //initiate empty values
  const initialValues = {
    userName: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    console.log(values);

    // set input values and call login api
    login({
      username: values.userName,
      password: values.password,
    })
      .then((res) => {
        toast.success("Successful Login");
        console.log("props", props);

        console.log(authentication.getLoginInStatus());
        console.log("data", res.data.tokens.accessToken);
        const { data } = res.data;
        localStorage.setItem("accessToken", res.data.tokens.accessToken);
        console.log(res.data.tokens.accessToken);
        const newUser = { name: res.data.user.username, loggedIn: true };
        localStorage.setItem("userData", JSON.stringify(newUser));
        console.log("TEST");
        navigate("/");

      })
      .catch((err) => {
        console.error(err);
        toast.error("Incorrect Username or Password");
      });

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    console.log(props);
  };

  //set validations for user input values
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
  });

  return (
    <div>
      <NavigationComponentL></NavigationComponentL>
      <body className={styles.bodyBg}>
        <Container className={styles.formWrapper}>
          <Grid container>
            <Grid item s={0} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className={styles.formContainer}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={6}
                  lg={5}
                  xl={5}
                  className={styles.inputFields}
                >
                  <div className={styles.titleLogin}>LOGIN</div>
                  <br></br> <br></br>
                  <Formik
                    //set initial values
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    //validate input values
                    validationSchema={validationSchema}
                  >
                    {(props) => (
                      <Form>
                        <Field
                          as={TextField}
                          className={styles.input}
                          required
                          id="filled-required"
                          label="Username"
                          variant="outlined"
                          placeholder=""
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            style: {
                              height: 38,
                              width: 300,
                            },
                          }}
                          name="userName"
                          helperText={<ErrorMessage name="userName" />}
                        />
                        <br></br><br></br>
                        <Field
                          as={TextField}
                          className={styles.input}
                          required
                          id="filled-required"
                          label="Password"
                          name="password"
                          type="password"
                          margin="normal"
                          variant="outlined"
                          placeholder="**************"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            style: {
                              height: 38,
                              width: 300,
                            },
                          }}
                          helperText={<ErrorMessage name="password" />}
                        />

                        <Button
                          className={styles.LoginButton}
                          type="submit"
                          color="primary"
                          disabled={props.isSubmitting}
                        >
                          {props.isSubmitting ? "Loading" : "Log In"}
                        </Button>
                        <div className={styles.freeSpace}></div>
                      </Form>
                    )}
                  </Formik>
                </Grid>
                <Grid item xs className={styles.inputbgimage}></Grid>
              </Grid>
            </Grid>
            <Grid item s={0} sm={0} md={1} lg={1} xl={1}></Grid>
          </Grid>
        </Container>
      </body>
    </div>
  );
}

export default LoginComponent;
