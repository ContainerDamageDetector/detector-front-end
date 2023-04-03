import React, { Component } from "react";
import styles from "./imageUpload.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import axios, { post } from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

class ImageUploadComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("img data", e.target.result);
    };

    // console.warn("data files", files);
  }

  render() {
    return (
      <div>
        <NavigationComponent></NavigationComponent>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>
                Please upload the  image
              </h1>
            </Grid>
          </Grid>


          <Grid container spacing={2} columns={16} textAlign='center'>

            <Grid item xs={8}>
              <div onSubmit={this.onFormSubmit}>
                <input
                  type="file"
                  name="file"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Grid>

            <Grid item xs={8}>
              <Card variant="outlined" sx={{ minWidth: -150, minHeight: 500 }}>
                
              </Card>
            </Grid>
          </Grid>

          {/* <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            > */}
          {/* <Grid
                container
                spacing={2}
                columns={16}
                direction="row"
                justify="center"
                alignItems="center"
              > */}
          {/* <Grid item xs={8}> */}
          {/* <div onSubmit={this.onFormSubmit}> */}
          {/* <h1>React js File upload</h1> */}
          {/* <input
                      type="file"
                      name="file"
                      onChange={(e) => this.onChange(e)}
                    /> */}
          {/* </div> */}
          {/* </Grid> */}
          {/* <Grid item xs={8}>
                    xs=8
                  </Grid> */}
          {/* </Grid> */}
          {/* </Grid> */}
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        </div>
      </div>
    );
  }
}

export default ImageUploadComponent;