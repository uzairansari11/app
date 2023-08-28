import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContextApi";

const AuthHoc = ({ children }) => {
	const { isAuthenticated } = useContext(AuthContext);
	if (!isAuthenticated) {
		return <Navigate to="/" />;
	} else {
		return <>{children}</>;
	}
};

export default AuthHoc;
