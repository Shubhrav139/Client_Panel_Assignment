import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteModal(props) {
  const handleClose = () => {
    props.setShowDeleteModal(false);
  };

  return (
    <div>
      <Modal
        show={props.show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{`Are you sure you want to delete ${props.name}?`}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" variant="danger" onClick={props.handleDelete}>
            Delete Client
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
