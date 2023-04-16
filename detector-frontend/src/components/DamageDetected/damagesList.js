import React, { Component } from "react";
import styles from "./damageDetected.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import { FormControl, Table } from "@mui/material";
import { getDamageList } from "../../services/auth.service";
import {MenuItem} from '@mui/material';

class DamageListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    getDamageList()
      .then((res) => {
        console.log(res.data);
        const { data } = res.data;
        this.setState({ items: data });
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { items } = this.state;

    // if (!items) {
    //     return <div>Loading...</div>;
    //   }

    return (
      <div>
        <NavigationComponent></NavigationComponent>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>Damages List</h1>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid
                  container
                  // spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "10vh" }}
                >
                  {items &&
                    items.map((item) => (
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.imageUrl}</td>
                        <td>{item.damage_type}</td>
                        <td>{item.severity}</td>
                        <td>{item.recover_price}</td>
                      </tr>
                    ))}

                  <Grid item xs={3} sm={1} md={1} lg={1} xl={1}></Grid>

                  <Grid item xs={3} sm={1} md={1} lg={1} xl={1}></Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default DamageListComponent;
