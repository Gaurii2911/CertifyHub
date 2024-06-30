import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
  },
  navbarBrand: {
    textDecoration: "none",
    marginRight: theme.spacing(4),
  },
  navLink: {
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  navLinkText: {
    color: "white",
    fontSize: "1.2rem",
  },
  Toolbar: {
    display: "flex",
  },
  C1:{
    flex: "1",
  },
  C2:{
    flex: "3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    marginRight: "-60px",
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.Toolbar}>
          <Container className={classes.C1}>
            <Link to="/" className={classes.navbarBrand}>
              <Typography
                variant="h5"
                component="h3"
                style={{ color: "goldenrod" }}
              >
                Certicryp
              </Typography>
            </Link>
          </Container>
          <Container className={classes.C2}>
            <div className={classes.navLink}>
              <Link to="/owner" className={classes.navLinkText}>
                <Typography variant="h6" component="h5">
                  Owner Login
                </Typography>
              </Link>
            </div>
            <div className={classes.navLink}>
              <Link to="/university" className={classes.navLinkText}>
                <Typography variant="h6" component="h5">
                  University
                </Typography>
              </Link>
            </div>
            <div className={classes.navLink}>
              <Link to="/" className={classes.navLinkText}>
                <Typography variant="h6" component="h5">
                  Certificate Holder Login
                </Typography>
              </Link>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
