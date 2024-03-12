import axios from "axios";
import { baseUrl } from "../baseUrl";

export const getAllClients = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + "/all")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const addClient = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + "/add", data)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const deleteClient = (clientId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(baseUrl + `/delete?clientId=${clientId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const editClient = (data, clientId) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(baseUrl + `/update?clientId=${clientId}`, data)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
