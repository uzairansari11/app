import React, { useContext, useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import { AuthContext } from "../context/AuthContextApi";
import UserProfileModal from "./UserProfileModal";

const Profile = ({ email, profilePic, name, role }) => {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
	const { handleLogout } = useContext(AuthContext);
	return (
		<>
			<Dropdown>
				<Dropdown.Toggle
					variant="outline-none"
					className="w-100 px-4 d-flex align-items-center"
				>
					<Image
						src={profilePic}
						alt="Profile"
						className="rounded-circle mr-3"
						width="50"
						height="50"
					/>
					<span className="text-dark font-weight-bold">{name}</span>
				</Dropdown.Toggle>
				<Dropdown.Menu className="text-center w-100 mt-1 border-0 shadow">
					<Dropdown.Item className="text-primary" onClick={openModal}>
						Profile
					</Dropdown.Item>
					<Dropdown.Item className="text-danger" onClick={() => handleLogout()}>
						Logout
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<UserProfileModal
				show={showModal}
				onHide={closeModal}
				email={email}
				profilePic={profilePic}
				name={name}
				role={role}
			/>
		</>
	);
};

export default Profile;
