import ButtonComponent from "./ButtonComponent";
import styles from "../styles/Login.module.css";
import React from "react";

const Login = () => {
	return (
		<div className={styles.container}>
			<div >
				<h1 className="font-family-poppins fs-3 text-white mb-5 ">
					Streamline Your Meeting Room Management
				</h1>
				<div className="d-flex flex-column justify-content-center gap-4 m-auto w-50">
					<ButtonComponent title={"Login With Google"} variant="danger" />
					<ButtonComponent title={"Login With Office 365"} variant="primary" />
				</div>
			</div>
		</div>
	);
};

export default Login;
