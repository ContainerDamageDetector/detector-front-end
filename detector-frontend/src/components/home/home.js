import React, { Component } from "react";
import styles from "./home.module.css";
import NavigationComponent from "../Navigation/navigation";


class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationComponent></NavigationComponent>
        <h1>HOME</h1>
        <body className={styles.bodyBg}>
          <p>TEST DSFGJKG</p>
        </body>
      </div>
    );
  }
}

export default HomeComponent;
