import React, { Component } from "react";
import styles from "./recoverPrice.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import { Table } from "@mui/material";
import { getRecoverPriceList } from "../../services/auth.service";
import { Link } from "react-router-dom";

class RecoverPriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    getRecoverPriceList()
      .then((res) => {
        console.log(res.data);
        this.setState({ items: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <NavigationComponent></NavigationComponent>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>Recover Price List</h1>
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
                  <Table>
                    <tr>
                      <th>id</th>
                      <th>title</th>
                      {/* <th>imageUrl</th> */}
                      <th>recover_price</th>
                    </tr>
                    {items.map((item) => (
                      <tr>
                        {/* <a href="/">
                            <td>{item.title}</td>
                            </a> */}

                        <td>{item.id}</td>
                        <td>
                          <Link to={`/viewRecoverPrice/${item.id}`}>
                            {item.title}
                          </Link>
                        </td>

                        {/* <td>{item.imageUrl}</td> */}
                        <td>{item.recover_price}</td>
                      </tr>
                    ))}
                  </Table>

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

export default RecoverPriceComponent;
