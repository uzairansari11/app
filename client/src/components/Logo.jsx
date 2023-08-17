import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Logo = () => {
	return (
		<Link to="/dashboard" className="text-decoration-none">
			<Navbar.Brand>Meeting Room Booking</Navbar.Brand>
		</Link>
	);
};

export default Logo;
