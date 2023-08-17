import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
const Logo = () => {
	return (
		<Link to="/dashboard" className="text-decoration-none">
			<Image
				src={logo}
				alt="logo"
				width="120"
			/>
		</Link>
	);
};

export default Logo;
