import React, { Component } from "react";
import styles from "./imageUpload.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import axios, { post } from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { uploadImage, getUploadImageUrl } from "../../services/auth.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

class ImageUploadComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      imageData: null,
      agree: false,
    };
  }

  render() {
    const { user } = this.context;

    const uploadPicture = (e) => {
      this.setState(
        {
          /* contains the preview, if you want to show the picture to the user
            you can access it with this.state.currentPicture
        */
          picturePreview: URL.createObjectURL(e.target.files[0]),
          /* this contains the file we want to send */
          pictureAsFile: e.target.files[0],
        },
        () => {
          setImageAction();
        }
      );
    };

    const setImageAction = async () => {
      try {
        this.setState({ isLoading: true });
        const getUploadImageRes = (await getUploadImageUrl({})).data;
        
        // const formData = new FormData();
        // formData.append(
        //     "file",
        //     this.state.pictureAsFile
        // );

        console.log(getUploadImageRes.signedUrl)
        await fetch(getUploadImageRes.signedUrl, {
          method: "put",
          headers: { "Content-Type": this.state.pictureAsFile.type },
          body: this.state.pictureAsFile,
        });

        const imageData = await uploadImage({
          title: "image",
          imageUrl: getUploadImageRes.imageUrl,
        });
        this.setState({ imageData, isLoading: false });
      } catch (e) {
        console.log(e);
        toast.error("Ooops! Something went wrong. Please Try Again", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
    const { imageData, isLoading } = this.state;

    return (
      <div>
        <NavigationComponent></NavigationComponent>

        <div className={styles.section1}>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <h1 className={styles.section1heading}>
                  Please upload the image
                </h1>
              </Grid>
            </Grid>

            <Grid container spacing={2} columns={16} textAlign="center">
              <form encType="multipart/form">
                <Grid item xs={8}>
                  <div>
                    <div>
                      <input
                        className={styles.uploadsketchfile}
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        name="image"
                        onChange={uploadPicture}
                      />
                      <br></br>
                      <label htmlFor="contained-button-file">
                        

                        <br></br>

                        <Button
                          className={styles.uploadsketchbutton}
                          variant="contained"
                          color="primary"
                          component="span"
                          disabled={!this.state.agree}
                        >
                          Browse
                        </Button>
                      </label>
                    </div>
                  </div>

                  {/* <Button onClick={uploadPicture}>Upload</Button> */}
                </Grid>
              </form>

              <Grid item xs={8}>
                <Card
                  variant="outlined"
                  sx={{ minWidth: -150, minHeight: 500 }}
                ></Card>
              </Grid>
            </Grid>

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ImageUploadComponent;
