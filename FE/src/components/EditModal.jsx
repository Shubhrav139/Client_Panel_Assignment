import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";

function EditModal(props) {
  const handleClose = () => {
    props.setShowEditModal(false);
  };

  useEffect(() => {
    formik.setValues({
      firstName: props?.client.firstName,
      lastName: props?.client.lastName,
      email: props?.client.email,
      mobileNumber: props?.client.mobileNumber,
      project: props?.client.project,
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      project: "",
    },
    onSubmit: (values, { resetForm }) => {
      props.handleEdit(values, resetForm);
    },
  });

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Client
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              id="firstName"
              type="text"
              placeholder="Enter first name"
              defaultValue={props.client.firstName}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="lastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              id="lastName"
              type="text"
              placeholder="Enter last name"
              defaultValue={props.client.lastName}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter email"
              defaultValue={props.client.email}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="mobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              id="mobileNumber"
              type="text"
              placeholder="Enter mobile number"
              defaultValue={props.client.mobileNumber}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="project">
            <Form.Label>Project</Form.Label>
            <Form.Control
              id="project"
              type="text"
              placeholder="Enter project name"
              defaultValue={props.client.project}
              onChange={formik.handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button type="submit" onClick={formik.handleSubmit}>
          Edit Client
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
