/* -------------imports-------------------------------- */

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { sidebarButtons } from "../helper/sidebarButtons";
import ButtonComponent from "./ButtonComponent";
import RoomCard from "./RoomCard";
import { BookedRoom } from "./BookedRoom";
import { getDataFromApi } from "../helper/fetchData";
import { getToke } from "../helper/token";
import { TableComponent } from "./TableComponent";

/* --------------------------------------------- */
/* This is dashboard after login user will see this.
Here user can find all rooms and rooms booked by user
*/
const Dashboard = () => {
	const [data, setData] = useState([]);
	const [bookedRoom, setBookedRoom] = useState([]);
	const location = useLocation();

	useEffect(() => {
		/* Logic for all room getting from api */
		if (location.pathname === "/dashboard") {
			getDataFromApi(getToke, setData, "http://localhost:8080/room/list");
		}

		/* Logic for all booked room by a user from api */

		if (location.pathname === "/dashboard/booked") {
			getDataFromApi(getToke, setBookedRoom, "http://localhost:8080/booking");
		}
	}, [location.pathname]);

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
				{location.pathname === "/dashboard/booked"
					? ({
							/*-------------- Booked Rooms---------------- */
					  },
					  (
							<TableComponent>
								{bookedRoom.length > 0 &&
									bookedRoom.map((ele) => (
										<BookedRoom key={ele._id} {...ele} />
									))}
							</TableComponent>
					  ))
					: ({
							/*-------------- All Rooms---------------- */
					  },
					  (
							<Row xs={1} md={2} lg={3} className="g-3">
								{data.length > 0 &&
									data.map((ele, index) => (
										<Col key={index}>
											<RoomCard {...ele} />
										</Col>
									))}
							</Row>
					  ))}
			</div>
		</div>
	);
};

export default Dashboard;
