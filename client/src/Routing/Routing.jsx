import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import LoginPage from "../page/LoginPage";
import AvailableRooms from "../components/AvailableRooms";
import { BookedRoom } from "../components/BookedRoom";
const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/dashboard" element={<Dashboard />}>
				<Route path="available" element={<AvailableRooms />} />
				<Route path="booked" element={<BookedRoom />} />
			</Route>
		</Routes>
	);
};

export default Routing;
