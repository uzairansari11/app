import React, { useEffect } from "react";
import Login from "../components/Login";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const LoginPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const authToken = Cookies.get("authToken");
		if (authToken) {
			navigate("/dashboard", { replace: true });
		} else {
			navigate("/");
		}
	}, [navigate]);
	return (
		<div>
			<Login />
		</div>
	);
};

export default LoginPage;
