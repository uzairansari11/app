import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { getToken } from "../utils/token";
import { Slot } from "../components/Slot";
import { getDataFromApi, handleBooking } from "../utils/apiDataHandler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../components/NotFound";

function RoomDetailsPage() {
	const { id } = useParams();
	const [bookedSlots, setBookedSlots] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [bookingStatus, setBookingStatus] = useState(false);
	const data = {
		title,
		description,
		startDate,
		endDate,
		roomId: id,
	};

	const bookMeetingSlot = async () => {
		setBookingStatus(true);
		const res = await handleBooking(data, getToken);
		if (res.status === 201) {
			setBookingStatus(false);
			toast.success(res.data.message, {
				position: toast.POSITION.TOP_RIGHT,
				delay: 500,
			});
		} else {
			setBookingStatus(false);
			toast.error(res?.response?.data?.message, {
				position: toast.POSITION.TOP_RIGHT,
				delay: 500,
			});
		}
	};

	const handleEndDateAndTime = (data) => {
		setEndDate(new Date(data));
	};
	const handleStartDateAndTime = (data) => {
		setStartDate(new Date(data));
	};
	const handleMeetingTitle = (data) => {
		setTitle(data);
	};
	const handleMeetingDescription = (data) => {
		setDescription(data);
	};

	useEffect(() => {
		getDataFromApi(
			getToken,
			setBookedSlots,
			`http://localhost:8080/booking/${id}`
		);
	}, []);

	return (
		<div className="px-3  vh-100">
			{/* <h5 className="card-title">{id}</h5> */}
			<div className="d-flex w-100">
				<div className="w-50 mt-3">
					<BookingForm
						id={id}
						title={title}
						startDate={startDate}
						endDate={endDate}
						description={description}
						handleEndDateAndTime={handleEndDateAndTime}
						handleStartDateAndTime={handleStartDateAndTime}
						bookMeetingSlot={bookMeetingSlot}
						handleMeetingTitle={handleMeetingTitle}
						handleMeetingDescription={handleMeetingDescription}
						bookingStatus={bookingStatus}
					/>
				</div>

				<div className="w-50 mt-3">
					<h3 className="mb-3">Booked Slots</h3>
					<ul
						className="list-group overflow-auto custom-scrollbar"
						style={{ maxHeight: "60vh" }}
					>
						{bookedSlots && bookedSlots.length > 0 ? (
							bookedSlots.map((slot, index) => (
								<Slot key={slot._id} {...slot} index={index} />
							))
						) : (
							<NotFound text1={"No Booked Slot Found"} />
						)}
					</ul>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default RoomDetailsPage;
