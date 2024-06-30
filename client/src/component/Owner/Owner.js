import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import img from '../../images/bgimg.jpg';

const useStyles = makeStyles((theme) => ({
  ownerBody: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
      "& input": {
        color: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
  },
  button: {
    marginTop: theme.spacing(2),
    width: "200px",
  },
  text: {
    color: "white",
    marginBottom: theme.spacing(4),
  },
}));

export default function Owner({ approve, revoke }) {
  const classes = useStyles();
  const [pub_key, setPubKey] = useState("");
  const [rev_pub_key, setRevPubKey] = useState("");

  const handleApprove = async (event) => {
    event.preventDefault();
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    approve(pub_key);
  };

  const handleRevoke = async (event) => {
    event.preventDefault();
    revoke(rev_pub_key);
  };

  return (
    <Box className={classes.ownerBody}>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleApprove}>
          <Typography className={classes.text} variant="h6">
            Approve University
          </Typography>
          <TextField
            className={classes.input}
            type="text"
            label="Public Key"
            variant="outlined"
            value={pub_key}
            onChange={(event) => setPubKey(event.target.value)}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Approve Access
          </Button>
        </form>
        <form className={classes.form} onSubmit={handleRevoke}>
          <Typography className={classes.text} variant="h6">
            Revoke University
          </Typography>
          <TextField
            className={classes.input}
            type="text"
            label="Public Key"
            variant="outlined"
            value={rev_pub_key}
            onChange={(event) => setRevPubKey(event.target.value)}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Revoke Access
          </Button>
        </form>
      </div>
    </Box>
  );
}
