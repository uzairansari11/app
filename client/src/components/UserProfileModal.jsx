import React from "react";
import { Modal } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
const UserProfileModal = ({ show, onHide, email, profilePic, name, role }) => {
	return (
		<Modal show={show} onHide={onHide} size={"md"}>
			<Modal.Header>
				<Modal.Title className="text-primary text-center  w-100">
					User Profile
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="text-center">
					<img
						src={profilePic}
						alt="User Profile"
						className="rounded-circle mb-3"
						style={{ width: "100px", height: "100px" }}
					/>
					<h4 className="mb-3">{name}</h4>
					<p className="mb-2">Email: {email}</p>
					<p className="mb-0">Role: {role?.toUpperCase()}</p>
				</div>
			</Modal.Body>
			<Modal.Footer className="w-25 m-auto">
				<ButtonComponent
					title="Close"
					onClick={onHide}
					// icon={<AiFillCloseCircle />}
					variant={"dark"}
				/>
			</Modal.Footer>
		</Modal>
	);
};

export default UserProfileModal;
