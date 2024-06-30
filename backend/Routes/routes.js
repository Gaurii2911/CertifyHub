const express = require("express");
const router = express.Router();
const User = require("../models/models");
const ipfsClient = require("ipfs-http-client");



router.post("/createuser", async (req, res) => {
  try {
    await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        public_key: req.body.pub_key,
        password: req.body.password,
      },
      (err) => {
        if (err === null) {
          res.send({ success: true });
        } else {
          console.log(err);
          res.send(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.send({ success: false });
  }
});
router.get("/account_exists", async (req, res) => {
  await User.findOne({ public_key: req.body.public_key })
    .then((document) => {
      if (document) {
        console.log("Entered");
        res.status(200).json({ message: "Document found" });
        console.log(document.public_key == req.body.public_key);
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    })
    .catch((error) => {
      console.log("Entered");

      console.error("Error finding document:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});
router.post("/cid", async (req, res) => {
  console.log("Entered");
  const uploadMetadataToIPFS = async (metadata) => {
    try {
      const ipfs = ipfsClient.create();

      const metadataBuffer = Buffer.from(JSON.stringify(metadata));
      const  cid  = await ipfs.add(metadataBuffer);
      console.log(cid)
      const link = `https://ipfs.io/ipfs/${cid.cid.toString()}`;
      return link;
    } catch (error) {
      console.error("Error uploading metadata to IPFS:", error);
      throw error;
    }
  };
  const CID = await uploadMetadataToIPFS(req.body);
  console.log(req.body)
  console.log(CID);
});
module.exports = router;
