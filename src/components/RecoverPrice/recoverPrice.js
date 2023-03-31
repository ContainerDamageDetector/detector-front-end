import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./recoverPrice.module.css";
import NavComponent from "../navigation/navigation";


class RecoverPriceComponent extends Component {
  state = {};
  render() {
    return (

      <div>
        <NavComponent></NavComponent>

        <p>View estimated price</p>
      </div>
      
    );
  }
}
export default withStyles(styles)(RecoverPriceComponent);