import React from "react";
import RoomCard from "./RoomCard";
import ButtonComponent from "./ButtonComponent";
import { sidebarButtons } from "../helper/sidebarButtons";

const Dashboard = () => {
	const data = [1];
	return (
		<div className="d-flex justify-content-between mt-5 pt-2 px-3 gap-2">
			<div className="w-25  d-flex flex-column gap-3 mt-3 px-4">
				{sidebarButtons.length &&
					sidebarButtons.map((ele) => {
						return <ButtonComponent key={ele.id} {...ele} />;
					})}
			</div>
			<div className="w-75 ">
				{data.map((ele, index) => (
					<RoomCard key={index} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
