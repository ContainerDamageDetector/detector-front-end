import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./home.module.css";
import NavComponent from "../navigation/navigation";


class HomeComponent extends Component {
  state = {};
  render() {
    return (

      <div>
        <NavComponent></NavComponent>
        <p>HOME PAGE</p>
      </div>

    );
  }
}
export default withStyles(styles)(HomeComponent);