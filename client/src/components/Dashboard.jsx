/* -------------imports-------------------------------- */

import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { deleteDataFromApi, getDataFromApi } from "../utils/apiDataHandler";
import { sidebarButtons } from "../utils/sidebarButtons";
import { getToken } from "../utils/token";
import { BookedRoom } from "./BookedRoom";
import ButtonComponent from "./ButtonComponent";
import MeetingRoomCard from "./MeetingRoomCard";
import { TableComponent } from "./TableComponent";

/* --------------------------------------------- */
/* This is dashboard after login user will see this.
Here user can find all rooms and rooms booked by user
*/
const Dashboard = () => {
	const [data, setData] = useState([]);
	const [bookedRoom, setBookedRoom] = useState([]);
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		/* Logic for all room getting from api */
		if (location.pathname === "/dashboard") {
			getDataFromApi(getToken, setData, "http://localhost:8080/room/list")
				.then(() => setLoading(false))
				.catch((error) => {
					console.error("Error fetching data:", error);
					setLoading(false);
				});
		}

		/* Logic for all booked room by a user from api */
		if (location.pathname === "/dashboard/booked") {
			getDataFromApi(getToken, setBookedRoom, "http://localhost:8080/booking")
				.then(() => setLoading(false))
				.catch((error) => {
					console.error("Error fetching data:", error);
					setLoading(false);
				});
		}
	}, [location.pathname]);

	const handleCancelMeeting = useCallback((meetingId) => {
		setLoading(true);

		deleteDataFromApi(getToken, "http://localhost:8080/booking", meetingId)
			.then((res) => {
				if (res) {
					return getDataFromApi(
						getToken,
						setBookedRoom,
						"http://localhost:8080/booking"
					);
				}
			})
			.catch((error) => {
				console.error("Error deleting data:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className="d-flex justify-content-between mt-4 px-3 gap-2 m-auto vh-100">
			<div className="w-25 d-flex flex-column gap-3 px-4">
				{/* -----------Side Bar Buttons-------------- */}
				{sidebarButtons.length &&
					sidebarButtons.map((ele) => (
						<Link
							key={ele.id}
							to={ele.path}
							className="text-decoration-none w-100"
						>
							<ButtonComponent key={ele.id} {...ele} />
						</Link>
					))}
			</div>
			{/* -----------Conditional Rendering-------------- */}
			<div className="w-75 overflow-y-auto custom-scrollbar">
				{location.pathname === "/dashboard/booked" ? (
					/*-------------- Booked Rooms---------------- */
					<React.Fragment>
						{loading ? (
							<div className="h-100 d-flex justify-content-center align-items-center ">
								<Spinner animation="border" variant="primary" size="lg" />
							</div>
						) : (
							<TableComponent>
								{bookedRoom.length > 0 &&
									bookedRoom.map((ele) => (
										<BookedRoom
											key={ele._id}
											{...ele}
											handleCancelMeeting={handleCancelMeeting}
										/>
									))}
							</TableComponent>
						)}
					</React.Fragment>
				) : (
					/*-------------- All Rooms---------------- */
					<Row xs={1} md={2} lg={3} className="g-3 px-2 mb-3">
						{data.length > 0 &&
							data.map((ele, index) => (
								<Col key={index}>
									<Link
										className="text-decoration-none"
										to={`/room/${ele._id}`}
									>
										<MeetingRoomCard {...ele} />
									</Link>
								</Col>
							))}
					</Row>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
