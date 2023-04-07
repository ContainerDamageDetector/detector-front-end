import React, { Component } from "react";
import styles from "./imageUpload.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import axios, { post } from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { uploadImage } from "../../services/auth.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

class ImageUploadComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  // onChange(e) {
  //   let files = e.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (e) => {
  //     console.warn("img data", e.target.result);
  //   };

  //   // console.warn("data files", files);
  // }

  render() {
    const uploadPicture = async () => {
      try {

        const imageData = await uploadImage({
          headers: { "Content-Type": "multipart/form-data" },
        });
        this.setState({ imageData, isLoading: false });
      } catch (e) {
        console.log(e);
        toast.error("Ooops! Something went wrong. Please Try Again", {});
      }
    };

    return (
      <div>
        <NavigationComponent></NavigationComponent>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>
                Please upload the image
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={2} columns={16} textAlign="center">
            <Grid item xs={8}>
              <div onSubmit={this.onFormSubmit}>
                <input
                  type="file"
                  name="file"
                  // accept="image/*"
                  // onChange={(e) => this.onChange(e)}
                  onChange={uploadPicture}
                />
              </div>
            </Grid>

            <Grid item xs={8}>
              <Card
                variant="outlined"
                sx={{ minWidth: -150, minHeight: 500 }}
              ></Card>
            </Grid>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        </div>
      </div>
    );
  }
}

export default ImageUploadComponent;
