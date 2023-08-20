import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = ({ email, profilePic, name }) => {
	const handleLogout = async () => {
		try {
			// Send a request to the logout endpoint on the server
			await axios.get("http://localhost:8080/auth/logout");

			// Remove the authToken cookie
			Cookies.remove("authToken");

			// Perform any additional cleanup or redirection as needed
			// For example, you can redirect the user to the login page
			window.location.href = "/login";
		} catch (error) {
			console.error("Error during logout:", error);
		}
	};

	return (
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
				<Dropdown.Item className="text-primary">Profile</Dropdown.Item>
				<Dropdown.Item className="text-danger" onClick={handleLogout}>
					Logout
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Profile;
