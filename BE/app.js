const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./dbconnect");
const clientRoutes = require("./routes/index.routes");
const PORT = 3000;

const app = express();
const URL = "http://localhost:5173";
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(
  cors({
    origin: URL,
    methods: "GET,POST,DELETE,PATCH"
  })
);

app.use("/api", clientRoutes);

dbConnect()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("App is listening on localhost : ", PORT);
});
