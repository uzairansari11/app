import React from "react";
import { Navbar } from "react-bootstrap";
import Profile from "./Profile";
import "../styles/Custom.css";
import Logo from "./Logo";

export const NavbarComponent = () => {
	return (
		<Navbar
			expand="lg"
			className="d-flex custom-navbar p-0 m-0 justify-content-between px-5"
		
		>
			<Logo />
			<div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Profile />
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};
