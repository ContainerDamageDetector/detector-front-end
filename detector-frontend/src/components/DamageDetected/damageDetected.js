import React, { Component } from "react";
import styles from "./damageDetected.module.css";
import NavigationComponent from "../Navigation/navigation";


class DamageDetectedComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationComponent></NavigationComponent>
        
        <h1>Damage Detected</h1>
        <body className={styles.bodyBg}>
          <p>TEST DSFGJKG</p>
        </body>
      </div>
    );
  }
}

export default DamageDetectedComponent;
