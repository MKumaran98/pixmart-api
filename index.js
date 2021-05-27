const express = require("express");
const PORT = 8000;

const router = require("./Router");
const db = require("./Config/mongoose");
const cors = require("cors");
const passport = require("./Config/passport");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use("/", (req, res) => {
  return res.status(404).json({
    data: "Requested data doesn't exist",
  });
});

app.listen(process.env.PORT || PORT, () =>
  console.log("Server running on port " + PORT)
);
