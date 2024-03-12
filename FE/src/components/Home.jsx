import React, { useEffect, useState } from "react";
import {
  addClient,
  deleteClient,
  editClient,
  getAllClients,
} from "../helpers/apiCalls";
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import toast from "react-hot-toast";

function Home() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [clientId, setClientId] = useState("");
  const [details, setDetails] = useState({});

  useEffect(() => {
    clientsData();
  }, []);

  const clientsData = () => {
    getAllClients()
      .then((result) => {
        if (result.data.statusCode === 200) {
          setClients([...result.data.data]);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAddModal = () => {
    setShowAddModal(true);
  };

  const handleAdd = (data, resetForm) => {
    addClient(data)
      .then((result) => {
        if (result.data.statusCode === 200) {
          clientsData();
          setShowAddModal(false);
          resetForm();
        } else {
          toast.error(result.data.message, {
            id: "error-add",
            duration: 3000,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleDeleteModal = (client) => {
    setShowDeleteModal(true);
    setName(client.firstName + " " + client.lastName);
    setClientId(client._id);
  };

  const handleDelete = () => {
    deleteClient(clientId)
      .then((result) => {
        if (result.data.statusCode === 200) {
          const filterData = clients?.filter((item) => {
            return item._id !== clientId;
          });
          setClients(filterData);
          clientsData();
          setShowDeleteModal(false);
        } else {
          toast.error(result.data.message, {
            id: "error-delete",
            duration: 3000,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleEditModal = (client) => {
    setShowEditModal(true);
    setDetails(client);
    setClientId(client._id);
  };

  const handleEdit = (data, resetForm) => {
    editClient(data, clientId)
      .then((result) => {
        if (result.data.statusCode === 200) {
          clientsData();
          setShowEditModal(false);
          resetForm();
        } else {
          toast.error(result.data.message, {
            id: "error-edit",
            duration: 3000,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {clients.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Project</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}.</th>
                <td>{client.firstName ? client.firstName : "-"}</td>
                <td>{client.lastName ? client.lastName : "-"}</td>
                <td>{client.email ? client.email : "-"}</td>
                <td>{client.mobileNumber ? client.mobileNumber : "-"}</td>
                <td>{client.project ? client.mobileNumber : "-"}</td>
                <td>
                  <MdEdit
                    className="react-icon"
                    onClick={() => handleEditModal(client)}
                  />
                </td>
                <td>
                  <MdOutlineDeleteOutline
                    className="react-icon"
                    onClick={() => handleDeleteModal(client)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>NO DATA FOUND!</div>
      )}
      <br></br>
      <button variant="primary" className="btn btn-primary" onClick={handleAddModal}>
       Create Client
      </button>
      <AddModal
        show={showAddModal}
        setShowAddModal={setShowAddModal}
        handleAdd={handleAdd}
      />
      <DeleteModal
        show={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        name={name}
        handleDelete={handleDelete}
      />
      <EditModal
        show={showEditModal}
        setShowEditModal={setShowEditModal}
        client={details}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Home;
