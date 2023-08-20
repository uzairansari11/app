import React from "react";
import ButtonComponent from "./ButtonComponent";
import { AiFillDelete } from "react-icons/ai";
export const BookedRoom = ({ roomId, date, startTime, endTime }) => {
	return (
		<tr>
			<td>{roomId.name}</td>
			<td>{date}</td>
			<td>{startTime}</td>
			<td>{endTime}</td>
			<td>
				<ButtonComponent
					title="Cancel"
					variant="danger"
					icon={<AiFillDelete />}
				/>
			</td>
		</tr>
	);
};
