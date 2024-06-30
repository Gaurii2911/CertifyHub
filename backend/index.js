const express = require("express");
const app = express();
const mongodb = require("./db");
const port = 5000;
const bodyParser = require("body-parser");
var host = 3000;
mongodb();

async function uploadMetadataToIPFS(metadata) {
  try {
    const metadataBuffer = Buffer.from(JSON.stringify(metadata));
    const { cid } = await ipfs.add(metadataBuffer);
    const link = `https://ipfs.io/ipfs/${cid.toString()}`;
    return link;
  } catch (error) {
    console.error("Error uploading metadata to IPFS:", error);
    throw error;
  }
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require("./Routes/routes"));
app.use(express.json());
app.use((req, res, next) => {
  next();
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Running CORS Anywhere on " + host + ":" + port);
});
