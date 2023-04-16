import React, { Component, useEffect } from "react";
import styles from "./home.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import axios from '../../services/api.service';

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
                    test <br></br>
                    <br></br>
                    sdfsfsfsfsfsfsfsf<br></br>
                    <br></br>
                    sdfsfsffcsvdfgdfgdgd <br></br>
                    <br></br>fgdfggdfgdgdgdfgdgdfgdgfdgvxc
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
