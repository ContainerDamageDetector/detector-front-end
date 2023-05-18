import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";

class NavigationComponentL extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar sx={{ background: "#04549c" }}>
          <Toolbar>
            <Grid container>
              <Grid>
                <Tabs textColor="inherit">
                <Tab item xs={50} label="DETECTOR" style={{ fontSize: 20 }}></Tab>

                </Tabs>
              </Grid>

              <Button
                sx={{ marginLeft: "auto" }}
                item
                xs={2.5}
                variant="contained"
                href="/login"
              >
                Login
              </Button>
              {/* <Button
                sx={{ marginLeft: "10px" }}
                item
                xs={2.5}
                variant="contained"
                href="/createUser"
              >
                Create User
              </Button> */}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationComponentL;
