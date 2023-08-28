import { FcGoogle } from "react-icons/fc";
import styles from "../styles/Login.module.css"; // Assuming this import is correct
import ButtonComponent from "./ButtonComponent"; // Assuming this import is correct
const Login = () => {
	const handleGoogleLogin = async () => {
		window.location.href = "http://localhost:8080/auth/google";
	};
	return (
		<div className={styles.container}>
			<div>
				<h1 className="font-family-poppins fs-3 text-white mb-5">
					Streamline Your Meeting Room Management
				</h1>
				<div className="d-flex flex-column justify-content-center gap-4 m-auto w-50">
					<ButtonComponent
						title={"Login With Google"}
						variant="light"
						onClick={handleGoogleLogin}
						icon={<FcGoogle />}
						iconSize={25}
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
