import React from "react";
import { Dropdown, Image } from "react-bootstrap";

const Profile = () => {
	const name = "uzair ansari";
	return (
		<Dropdown>
			<Dropdown.Toggle variant="transparent" className=" w-100 px-4">
				<Image
					src="https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					alt="Profile"
					className="rounded-circle mr-4 "
					width="50"
					height="50"
				/>
				&nbsp;&nbsp;&nbsp;&nbsp;
				{name}
			</Dropdown.Toggle>
			<Dropdown.Menu className="text-center w-100 m-auto mt-1">
				<Dropdown.Item>Profile</Dropdown.Item>
				<Dropdown.Item>Logout</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Profile;
