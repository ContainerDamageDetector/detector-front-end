import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./imageUpload.module.css";
import NavComponent from "../navigation/navigation";


class ImageUploadComponent extends Component {
  state = {};
  render() {
    return (

      <div>
        <NavComponent></NavComponent>

        <p>Upload Images</p>
      </div>
      
    );
  }
}
export default withStyles(styles)(ImageUploadComponent);