import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";

function AddClientModal(props) {
  const handleClose = () => {
    props.setShowAddModal(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      project: "",
    },
    onSubmit: (values, { resetForm }) => {
      props.handleAdd(values, resetForm);
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
          Create Client
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
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="lastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              id="lastName"
              type="text"
              placeholder="Enter last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="mobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              id="mobileNumber"
              type="text"
              placeholder="Enter mobile number"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="project">
            <Form.Label>Project</Form.Label>
            <Form.Control
              id="project"
              type="text"
              placeholder="Enter project name"
              value={formik.values.project}
              onChange={formik.handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button type="submit" onClick={formik.handleSubmit}>
          Create Client
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddClientModal;
