import { BsFillBookmarkCheckFill } from "react-icons/bs";
import ButtonComponent from "./ButtonComponent";

const BookingForm = ({
	title,
	description,
	handleEndDateAndTime,
	bookMeetingSlot,
	handleMeetingTitle,
	handleMeetingDescription,
	handleStartDateAndTime,
	bookingStatus,
}) => {
	const handleStart = (e) => {
		handleStartDateAndTime(e.target.value);
	};
	const handleEnd = (e) => {
		handleEndDateAndTime(e.target.value);
	};
	const handleTitle = (e) => {
		handleMeetingTitle(e.target.value);
	};
	const handleDescription = (e) => {
		handleMeetingDescription(e.target.value);
	};
	return (
		<div className="col-md-10">
			<div className="form-group">
				<label>Title *</label>
				<input
					type="text"
					className={`form-control`}
					value={title}
					onChange={handleTitle}
				/>
			</div>
			<div className="form-group">
				<label>Description *</label>
				<textarea
					rows="4"
					className={`form-control`}
					value={description}
					onChange={handleDescription}
				/>
			</div>
			<div className="form-group">
				<label>Start Date and Time *</label>
				<input
					type="datetime-local"
					className={`form-control`}
					onChange={handleStart}
					min={new Date().toISOString().slice(0, 16)}
				/>
			</div>
			<div className="form-group">
				<label>End Date and Time *</label>
				<input
					type="datetime-local"
					className={`form-control`}
					onChange={handleEnd}
				/>
			</div>
			<div className="w-50 mt-3 m-auto">
				<ButtonComponent
					title="Book Slot"
					variant="primary"
					icon={<BsFillBookmarkCheckFill />}
					onClick={bookMeetingSlot}
					disabled={bookingStatus}
				/>
			</div>
		</div>
	);
};

export default BookingForm;
