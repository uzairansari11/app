import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import LoginPage from "../page/LoginPage";
const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
};

export default Routing;
