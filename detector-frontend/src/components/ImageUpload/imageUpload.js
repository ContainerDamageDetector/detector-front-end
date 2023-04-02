import React, { Component } from "react";
import styles from "./imageUpload.module.css";
import NavigationComponent from "../Navigation/navigation";

class ImageUploadComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationComponent></NavigationComponent>

        <h1>Image Upload</h1>
        <body className={styles.bodyBg}>
          <p>TEST DSFGJKG</p>
        </body>
      </div>
    );
  }
}

export default ImageUploadComponent;
