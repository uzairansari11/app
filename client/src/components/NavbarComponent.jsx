import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { AuthContext } from "../context/AuthContextApi";
import "../styles/Custom.css";
import Logo from "./Logo";
import Profile from "./Profile";

export const NavbarComponent = () => {
	const [userData, setUserData] = useState();
	const { isAuthenticated } = useContext(AuthContext);
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
			className="d-flex custom-navbar p-0 m-0 justify-content-between px-5"
		>
			<Logo />
			<div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{isAuthenticated ? <Profile {...userData} /> : null}
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};
