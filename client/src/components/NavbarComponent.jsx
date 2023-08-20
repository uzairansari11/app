import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Profile from "./Profile";
import "../styles/Custom.css";
import Logo from "./Logo";
import Cookies from "js-cookie";

export const NavbarComponent = () => {
	const [userData, setUserData] = useState();
	useEffect(() => {
		const authToken = Cookies.get("authToken") || null;
		if (authToken) {
			const parsedData = JSON.parse(authToken);
			setUserData(parsedData);
		}
	}, []);

	return (
		<Navbar
			expand="lg"
			className="d-flex custom-navbar p-0 m-0 justify-content-between px-3 "
		>
			<Logo />
			<div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Profile {...userData} />
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};
