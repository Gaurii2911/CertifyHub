import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
import img from "../images/bgimg.jpg";
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import Typewriter from "react-typewriter-effect";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  leftContent: {
    flex: 3,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    color: theme.palette.primary.main,
    fontSize: "3rem",
    fontWeight: "bold",
    margin: theme.spacing(2),
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  },
  button: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: "2rem",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  },
  buttonText: {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textTransform: "capitalize",
  },
  divButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOwnerClick = () => {
    navigate("./owner");
  };

  const handleUniversityClick = () => {
    navigate("./university");
  };

  return (
    <Box className={classes.homeBody}>
      <div className={classes.contentContainer}>
        <div className={classes.leftContent}>
          <Typography className={classes.homeText} variant="h1">
            <Typed
              strings={["Welcome to My Website", "Discover Amazing Features", "Get Started Today"]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </Typography>
        </div>
        <div className={classes.rightContent}>
          <Box>
            <div className={classes.divButton}>
              <IconButton
                className={classes.button}
                onClick={handleOwnerClick}
                aria-label="Owner Login"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Typography className={classes.buttonText}>Owner Login</Typography>
            </div>
            <div className={classes.divButton}>
              <IconButton
                className={classes.button}
                onClick={handleUniversityClick}
                aria-label="University Login"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Typography className={classes.buttonText}>University Login</Typography>
            </div>
            <div className={classes.divButton}>
              <IconButton
                className={classes.button}
                aria-label="Certificate Holder Login"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Typography className={classes.buttonText}>
                Certificate Holder Login
              </Typography>
            </div>
          </Box>
        </div>
      </div>
    </Box>
  );
}
