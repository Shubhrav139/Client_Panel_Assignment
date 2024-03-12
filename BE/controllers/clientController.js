const {
  addClientService,
  updateClientService,
  getAllClients,
  getClient,
} = require("../services/clientService");

exports.addClient = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, project } = req.body;
    if (!email) {
      return res.json({
        statusCode: 400,
        message: "Email is required!",
      });
    }
    const cond = {
      email: email,
      delete: false,
    };
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNumber: mobileNumber,
      project: project,
    };
    const result = await addClientService(cond, data);
    return res.json({
      statusCode: 200,
      message: "Client added sucessfully!",
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message,
    });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const cond = {
      _id: req.query.clientId,
      delete: false,
    };
    const result = await updateClientService(cond, req.body);
    return result
      ? res.json({
          statusCode: 200,
          message: "Client updated sucessfully!",
        })
      : res.json({
          statusCode: 404,
          message: "Client not found!",
        });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message,
    });
  }
};

// Soft delete
exports.deleteClient = async (req, res) => {
  try {
    const cond = {
      _id: req.query.clientId,
      delete: false,
    };
    const payload = {
      delete: true,
    };
    const result = await updateClientService(cond, payload);
    return result
      ? res.json({
          statusCode: 200,
          message: "Client deleted sucessfully!",
        })
      : res.json({
          statusCode: 404,
          message: "Client not found!",
        });
  } catch (error) {
    return res.json({
      statusCode: 500,
      message: error.message,
    });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const cond = {
      delete: false,
    };
    const result = await getAllClients(cond);
    return result.length
      ? res.json({
          statusCode: 200,
          data: result,
        })
      : res.json({
          statusCode: 404,
          message: "No Client found!",
        });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message,
    });
  }
};

exports.getClient = async (req, res) => {
  try {
    cond = {
      _id: req.query.clientId,
      delete: false,
    };
    const result = await getClient(cond);
    return res.json({
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message,
    });
  }
};
