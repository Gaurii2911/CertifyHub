import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import img from "../../images/bgimg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  loginButton: {
    padding: theme.spacing(5, 10),
    fontSize: "20px",
    borderRadius: "60px",
    background: "linear-gradient(35deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
    fontFamily: "Arial",
    fontSize: "28px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));

const UniversitySignInRahil = ({ connect }) => {
  const classes = useStyles();

  const handleLogin = () => {
    connect();
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.loginButton}
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
};

export default UniversitySignInRahil;
