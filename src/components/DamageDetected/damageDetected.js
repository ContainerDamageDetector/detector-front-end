import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./damageDetected.module.css";
import NavComponent from "../navigation/navigation";


class DamageDetectedComponent extends Component {
  state = {};
  render() {
    return (

      <div>
        <NavComponent></NavComponent>

        <p>View Detected Damages</p>
      </div>
      
    );
  }
}
export default withStyles(styles)(DamageDetectedComponent);