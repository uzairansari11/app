import { Route, Routes } from "react-router-dom";
import AuthHoc from "../HOC/AuthHoc";
import { BookedRoom } from "../components/BookedRoom";
import Dashboard from "../components/Dashboard";
import LoginPage from "../page/LoginPage";
import RoomDetailsPage from "../page/RoomDetailsPage";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route
				path="/dashboard"
				element={
					<AuthHoc>
						<Dashboard />
					</AuthHoc>
				}
			>
				<Route
					path="booked"
					element={
						<AuthHoc>
							<BookedRoom />
						</AuthHoc>
					}
				/>
			</Route>
			<Route
				path="room/:id"
				element={
					<AuthHoc>
						<RoomDetailsPage />
					</AuthHoc>
				}
			/>
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
};

export default Routing;
