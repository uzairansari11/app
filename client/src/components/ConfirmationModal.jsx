import React from "react";
import { Modal } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";

const ConfirmationModal = ({ showModal, closeModal, confirmDelete }) => {
	return (
		<Modal show={showModal} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>Confirm Deletion</Modal.Title>
			</Modal.Header>
			<Modal.Body>Are you sure you want to cancel this booked room?</Modal.Body>
			<Modal.Footer>
				<ButtonComponent title="No" variant="primary" onClick={closeModal} />
				<ButtonComponent
					title="Yes, Cancel"
					variant="success"
					onClick={confirmDelete}
				/>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmationModal;
