import React, { Component } from "react";
import styles from "./home.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationComponent></NavigationComponent>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>
                About{" "}
                {/* <span className={styles.section1heading2}> (test) </span> */}
              </h1>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img
                    // src={AboutUsCover}
                    alt="How To Use - Profile"
                    className={styles.imgcover}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <p className={styles.section1subheading}>
                    The aim of the project is to design, develop and evaluate a
                    system that would generate prototype source code based on
                    the hand drawn wireframes. <br></br>
                    <br></br>
                    This project will provide a software solution to automate
                    the process of implementing GUIs after the hand-drawn
                    sketches/wireframes are done without the requirement of
                    coding for any user.<br></br>
                    <br></br>
                    Through the implementation of this project, it will be
                    capable to accurately detect and classify GUI-components in
                    a mock-up artifact, generate hierarchies that are similar to
                    those that a developer would create and to generate on
                    creation of apps that are visually similar to mock-up
                    artifacts. <br></br>
                    <br></br>A novel approach is aimed throughout this project
                    which the prototyping process can be automated to save time
                    on developing UI prototypes. Using this approach, the
                    application components can be developed from its sketches
                    and convert it into its corresponding UI which the
                    performance is affected by the training data sets which can
                    be improved by providing more labelled examples of sketches.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
