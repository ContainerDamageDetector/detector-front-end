import React, { Component } from "react";
import styles from "./recoverPrice.module.css";
import NavigationComponent from "../Navigation/navigation";

class RecoverPriceComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationComponent></NavigationComponent>

        <h1>Recover Price</h1>
        <body className={styles.bodyBg}>
          <p>TEST DSFGJKG</p>
        </body>
      </div>
    );
  }
}

export default RecoverPriceComponent;