import React, { Component } from "react";
import styles from "./recoverPrice.module.css";
import NavigationComponent from "../Navigation/navigation";
import Grid from "@mui/material/Grid";
import { Table } from "@mui/material";
import { getRecoverPriceList } from "../../services/auth.service";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center">Id</StyledTableCell>
                          <StyledTableCell align="center">
                            Title
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            Recover Price
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items.map((item) => (
                          <StyledTableRow key={item.id}>
                            <StyledTableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {item.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <Link to={`/viewRecoverPrice/${item.id}`}>
                                {item.title}
                              </Link>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                              {item.recover_price}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

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
