import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { getToken } from "../utils/token";

export const AuthContext = createContext();

export const AuthContextApiProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(getToken() || null);

	const handleLogout = () => {
		Cookies.remove("authToken");
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
