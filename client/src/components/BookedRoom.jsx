import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ButtonComponent from "./ButtonComponent";
import ConfirmationModal from "./ConfirmationModal";

export const BookedRoom = ({
	roomId,
	title,
	endDate,
	startDate,
	description,
	handleCancelMeeting,
	_id,
}) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const confirmDelete = () => {
		handleCancelMeeting(_id);
		setShowModal(false);
	};

	return (
		<tr>
			<td>{roomId.name}</td>
			<td>{title}</td>
			<td>{description}</td>
			<td>{startDate.split("T")[0]}</td>
			<td>{endDate.split("T")[0]}</td>
			<td>
				<ButtonComponent
					title="Cancel"
					variant="danger"
					icon={<AiFillDelete />}
					onClick={openModal}
				/>
				<ConfirmationModal
					showModal={showModal}
					closeModal={closeModal}
					confirmDelete={confirmDelete}
				/>
			</td>
		</tr>
	);
};
