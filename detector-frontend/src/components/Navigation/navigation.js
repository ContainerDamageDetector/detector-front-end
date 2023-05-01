import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";

class NavigationComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar sx={{ background: "#04549c" }}>
          <Toolbar>
            <Grid container>
              <Grid>
                <Tabs textColor="inherit">
                  {/* <Tab item xs={2.5} label="Login" href="/login"></Tab> */}
                  <Tab item xs={2.5} label="About" href="/"></Tab>
                  <Tab item xs={2.5} label="Image Upload" href="/imageUpload"></Tab>
                  <Tab item xs={2.5} label="Damage List" href="/viewDamageList"></Tab>
                  {/* <Tab item xs={2.5} label="Detect Damages" href="/viewDetectedDamages"></Tab> */}
                  <Tab item xs={2.5} label="Recover Price List" href="/viewRecoverPriceList"></Tab>
                  {/* <Tab item xs={2.5} label="Recover Price" href="/viewRecoverPrice"></Tab> */}

                </Tabs>
              </Grid>

              <Button
                sx={{ marginLeft: "auto" }}
                item
                xs={2.5}
                variant="contained"
                href="/login"
              >
                Logout
              </Button>
              <Button
                sx={{ marginLeft: "10px" }}
                item
                xs={2.5}
                variant="contained"
                href="/createUser"
              >
                Create User
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationComponent;
