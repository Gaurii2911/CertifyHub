import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import CSVReader from "react-csv-reader";
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
  csvReader: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
    fontFamily: "Arial",
    fontSize: "28px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  fileInput: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
  },
}));

const UniversityPortalRahil = ({ mintCertificate, uploadFile}) => {
  const classes = useStyles();
  const [csvData, setCsvData] = useState([]);
  const [publickey, setPublickey] = useState("")
  const [formData, setFormData] = useState({
    title: "NFT Metadata",
    type: "object",
    properties: {
      name: "",
      description: "",
      image: "",
      createAt: "",
      DateofIssue: "",
    },
  });

  const handleCsvFile = (data, fileInfo) => {
    setCsvData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile(formData);
    mintCertificate(publickey, formData);
  };
  
  useEffect(() => {
    const getCurrentTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setFormData((prevState) => ({
        ...prevState,
        properties: {
          ...formData.properties,
          createAt: currentTime,
        },
      }));
    };

    getCurrentTime();
  }, []);

  formData.properties.UniversityName = "IIT-ISM-Dhanbad";

  const handleInputChange = (e, property) => {
    if(property === "publickey"){
      console.log("Entered")
      setPublickey(e.target.value)
    }
    setFormData({
      ...formData,
      properties: {
        ...formData.properties,
        [property]: e.target.value,
      },
    });
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Certificate Details
          </Typography>
          {/* <CSVReader
            className={classes.csvReader}
            onFileLoaded={handleCsvFile}
            parserOptions={{ header: true, dynamicTyping: true }}
          /> */}
          {[
            { label: "Name", property: "name" },
            { label: "Description", property: "description" },
            { label: "Date of Issue", property: "DateofIssue", type: "date" },
            { label: "Public Key", property: "publickey"}
          ].map((field) => (
            <TextField
              key={field.property}
              className={classes.input}
              label={field.label}
              variant="outlined"
              fullWidth
              type={field.type}
              value={
                csvData[0]?.[field.property] ||
                formData.properties[field.property]
              }
              onChange={(e) => handleInputChange(e, field.property)}
            />
            
          ))}
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({
                  ...formData,
                  properties: { ...formData.properties, image: base64 },
                })
              }
            />
          </div>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default UniversityPortalRahil;
