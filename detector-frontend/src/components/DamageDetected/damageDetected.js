import React, { Component } from "react";
import styles from "./damageDetected.module.css";

class DamageDetectedComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Damage Detected</h1>
        <body className={styles.bodyBg}>
          <p>TEST DSFGJKG</p>
        </body>
      </div>
    );
  }
}

export default DamageDetectedComponent;
