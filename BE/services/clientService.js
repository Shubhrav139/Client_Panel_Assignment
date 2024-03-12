const clientModel = require("../models/client");

exports.addClientService = async (cond, data) => {
  try {
    const client = await clientModel.findOne(cond);
    if (client) {
      throw {
        statusCode: 202,
        message: "Client already exists!",
      };
    } else {
      const saveClient = await clientModel(data).save();
      return saveClient;
    }
  } catch (error) {
    throw error;
  }
};

exports.updateClientService = async (cond, payload) => {
  try {
    const client = await clientModel.findOneAndUpdate(cond, payload);
    return client;
  } catch (error) {
    throw error;
  }
};

exports.getAllClients = async (cond) => {
  try {
    const clients = await clientModel
      .find(cond)
      .select("-createdAt -updatedAt -delete")
      .sort("-createdAt");
    return clients;
  } catch (error) {
    throw error;
  }
};

exports.getClient = async (cond) => {
  try {
    const client = await clientModel.findOne(cond);
    return client;
  } catch (error) {
    throw error;
  }
};
