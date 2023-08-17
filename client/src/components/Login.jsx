import ButtonComponent from "./ButtonComponent";
import styles from "../styles/Login.module.css";
const Login = () => {
	return (
		<div className={styles.container}>
			<div className="d-flex flex-column justify-content-center gap-4  m-auto vh-100 w-25 ">
				<p className="font-family-poppins w-100">
					Welcome to Meeting Room Booking Application
				</p>
				<ButtonComponent title={"Login With Google"} variant="danger" />
				<ButtonComponent title={"Login With Office 365"} variant="primary" />
			</div>
		</div>
	);
};

export default Login;
