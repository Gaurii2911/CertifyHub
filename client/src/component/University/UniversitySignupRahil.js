import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(256, 256, 256, 0.6)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(256, 256, 256, 0.6)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(256, 256, 256, 0.6)",
      },
      "& input": {
        color: "rgba(256, 256, 256, 0.9)", // Set the input text color to white
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(256, 256, 256, 0.9)",
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
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

const UniversitySignIn = ({ registerUniversity }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    universityName: "",
    universityAddress: "",
    universityHead: "",
    contactEmail: "",
    contactPhone: "",
    publicKey: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.l(formData);
  };

  const handleInputChange = (e, property) => {
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            University Registration
          </Typography>
          <TextField
            className={classes.input}
            label="University Name"
            variant="outlined"
            fullWidth
            value={formData.universityName}
            onChange={(e) => handleInputChange(e, "universityName")}
          />
          <TextField
            className={classes.input}
            label="University Address"
            variant="outlined"
            fullWidth
            value={formData.universityAddress}
            onChange={(e) => handleInputChange(e, "universityAddress")}
          />
          <TextField
            className={classes.input}
            label="University Head"
            variant="outlined"
            fullWidth
            value={formData.contactPerson}
            onChange={(e) => handleInputChange(e, "universityHead")}
          />
          <TextField
            className={classes.input}
            label="Contact Email"
            variant="outlined"
            fullWidth
            value={formData.contactEmail}
            onChange={(e) => handleInputChange(e, "contactEmail")}
          />
          <TextField
            className={classes.input}
            label="Contact Phone"
            variant="outlined"
            fullWidth
            value={formData.contactPhone}
            onChange={(e) => handleInputChange(e, "contactPhone")}
          />
          <TextField
            className={classes.input}
            label="Public Key"
            variant="outlined"
            fullWidth
            value={formData.publicKey}
            onChange={(e) => handleInputChange(e, "publicKey")}
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default UniversitySignIn;
