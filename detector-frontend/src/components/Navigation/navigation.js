import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Grid, Tab, Tabs, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useCallback } from "react";
import axios from "../../services/api.service";

export default function NavigationComponent() {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    axios
      .get("/auth/logout")
      .then((res) => {
        navigate("/login");
        const newUser = { name: null, loggedIn: false };
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");
        
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <AppBar sx={{ background: "#04549c" }}>
        <Toolbar>
          <Grid container>
            <Grid>
              <Tabs textColor="inherit">
                {/* <Tab item xs={2.5} label="Login" href="/login"></Tab> */}
                <Tab item xs={2.5} label="About" href="/" />
                <Tab item xs={2.5} label="Image Upload" href="/imageUpload" />
                <Tab item xs={2.5} label="Damage List" href="/viewDamageList" />
                {/* <Tab item xs={2.5} label="Detect Damages" href="/viewDetectedDamages"></Tab> */}
                <Tab
                  item
                  xs={2.5}
                  label="Recover Price List"
                  href="/viewRecoverPriceList"
                />
                {/* <Tab item xs={2.5} label="Recover Price" href="/viewRecoverPrice"></Tab> */}
              </Tabs>
            </Grid>

            <Button
              sx={{ marginLeft: "auto" }}
              item
              xs={2.5}
              variant="contained"
              onClick={logout}
            >
              Logout
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
