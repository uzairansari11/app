import React from "react";
import { Dropdown, Image } from "react-bootstrap";

const Profile = () => {
	const name = "Uzair Ansari"; // Capitalized the name for consistency

	return (
		<Dropdown>
			<Dropdown.Toggle
				variant="outline-none"
				className="w-100 px-4 d-flex align-items-center"
			>
				<Image
					src="https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					alt="Profile"
					className="rounded-circle mr-3"
					width="50"
					height="50"
				/>
				<span className="text-dark font-weight-bold">{name}</span>
			</Dropdown.Toggle>
			<Dropdown.Menu className="text-center w-100 mt-1 border-0 shadow">
				<Dropdown.Item className="text-primary">Profile</Dropdown.Item>
				<Dropdown.Item className="text-danger">Logout</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Profile;
