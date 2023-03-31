import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./navigation.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from "../../logo.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

class NavigationComponent extends Component {
    state = {};
    render() {
        return (
            //   <div>
            //     <p>Navigation Component</p>
            //   </div>
            // <div>
            //     <AppBar className={styles.navbg} position="static">
            //         <Toolbar>
            //             <Grid container>
            //                 <Grid item xs={1}></Grid>
            //                 <Grid item xs={8} className={styles.menuListLeft}>
            //                     <Link to="/" >
            //                         <img src={Logo} alt="CODEMYSKETCH Logo" ></img>{" "}
            //                     </Link>
            //                     <ul>
            //                         <Link to="/howToUse" className={styles.listItem} >
            //                             <li className={styles.listItem}>Let's Code</li>
            //                         </Link>
            //                         <Link to="/myAccount" className={styles.listItem}>
            //                             <li className={styles.listItem}>My Account </li>
            //                         </Link>
            //                         <Link to="/aboutUs" className={styles.listItem}>
            //                             <li className={styles.listItem}>About Us</li>
            //                         </Link>
            //                     </ul>
            //                 </Grid>
            //                 <Grid item xs={2.5} className={styles.menuListRight}>
            //                     <ul>
            //                         {/* {user.name ? */}
            //                             (
            //                                 <Link to="/login" className={styles.menuLink} onClick={() => {
            //                                     // call logout
            //                                     // const newUser = { name: null, loggedIn: false }
            //                                     // localStorage.removeItem('accessToken')
            //                                     // localStorage.removeItem("userData");
            //                                     // setUser(newUser);
            //                                 }}>
            //                                     <li className={styles.listItem}>Logout</li>{" "}
            //                                 </Link>
            //                             ) :
            //                             (<Link to="/login" className={styles.menuLink}>
            //                                 <li className={styles.listItem}>Login</li>{" "}
            //                             </Link>)
            //                         {/* } */}
            //                         {/* { */}
            //                             {/* user.name ? */}
            //                                 (
            //                                     <li className={styles.listItem}>{`Hi,  `}&#129312;</li>) :
            //                                 (
            //                                     <Link to="/" className={styles.menuLink}>
            //                                         {" "}
            //                                         <li className={styles.listItem}>
            //                                             <Button className={styles.SignUpBtn}>Sign Up</Button>
            //                                         </li>
            //                                     </Link>
            //                                 )
            //                         {/* } */}
            //                     </ul>
            //                 </Grid>
            //                 <Grid item xs={1}></Grid>
            //             </Grid>
            //         </Toolbar>
            //     </AppBar>
            // </div>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            // onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {/* {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))} */}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        // open={mobileOpen}
                        // onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                        }}
                    >
                        {/* {drawer} */}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                </Box>
            </Box>
        )

    }
}
export default withStyles(styles)(NavigationComponent);