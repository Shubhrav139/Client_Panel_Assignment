const Router = require("express").Router();
const {
  addClient,
  updateClient,
  deleteClient,
  getAllClients,
  getClient,
} = require("../controllers/clientController");

Router.post("/add", addClient)
  .patch("/update", updateClient)
  .delete("/delete", deleteClient)
  .get("/all", getAllClients)
  .get("/single", getClient)

module.exports = Router;
