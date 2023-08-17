import React from "react";
import RoomCard from "./RoomCard";
import ButtonComponent from "./ButtonComponent";
import { sidebarButtons } from "../helper/sidebarButtons";
import { Col, Row } from "react-bootstrap";

const Dashboard = () => {
	const data = [1, 8, 2, 2, 2];

	return (
		<div
			className="d-flex justify-content-between mt-5 pt-2 px-3 gap-2 m-auto "
			
		>
			<div className="w-25 d-flex flex-column gap-3  px-5">
				{sidebarButtons.length &&
					sidebarButtons.map((ele) => {
						return <ButtonComponent key={ele.id} {...ele} />;
					})}
			</div>

			<div className="w-75">
				<div className="w-100">
					<Row xs={1} md={2} lg={3} className="g-4">
						{data.map((ele, index) => (
							<Col key={index}>
								<RoomCard />
							</Col>
						))}
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
