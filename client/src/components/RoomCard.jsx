import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import {
	BsCalendarEvent,
	BsCheckCircleFill,
	BsXCircleFill,
	BsPersonFill,
} from "react-icons/bs";
import styles from "../styles/Room.module.css";

const RoomCard = ({ name, capacity, status }) => {
	
	const [bookingStart, setBookingStart] = useState("");
	const [bookingEnd, setBookingEnd] = useState("");

	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().slice(0, 16);

	const handleBooking = () => {
		// if (status && bookingStart && bookingEnd) {
		// 	setIsAvailable(false);
		// 	console.log("Room booked!");
		// } else {
		// 	console.log("Room not available for booking.");
		// }
	};

	const handleStartTimeChange = (e) => {
		const selectedStart = new Date(e.target.value);
		const selectedEnd = new Date(selectedStart);
		selectedEnd.setDate(selectedEnd.getDate() + 15);
		setBookingStart(selectedStart.toISOString().slice(0, 16));
		setBookingEnd(selectedEnd.toISOString().slice(0, 16));
	};

	return (
		<Card className={styles.roomCard}>
			<div className={styles.imageContainer}>{/* ... */}</div>
			<Card.Body>
				<Card.Title className={styles.roomTitle}>{name}</Card.Title>
				<Card.Text className={styles.roomInfo}>
					<BsPersonFill className={styles.icon} /> {capacity} Seats
				</Card.Text>
				<Card.Text className={styles.availability}>
					{status ? (
						<span className={styles.available}>
							<BsCheckCircleFill className={styles.icon} /> Available
						</span>
					) : (
						<span className={styles.unavailable}>
							<BsXCircleFill className={styles.icon} /> Not Available
						</span>
					)}
				</Card.Text>
				<div className={styles.dateTimeInput}>
					<BsCalendarEvent className={styles.icon} /> Start Time:{" "}
					<input
						type="datetime-local"
						min={formattedDate}
						className={styles.dateInput}
						onChange={handleStartTimeChange}
					/>
				</div>
				<div className={styles.dateTimeInput}>
					<BsCalendarEvent className={styles.icon} /> End Time:{" "}
					<input
						type="datetime-local"
						min={bookingStart}
						max={bookingEnd}
						className={styles.dateInput}
						onChange={(e) => setBookingEnd(e.target.value)}
					/>
				</div>
				<Button
					className={styles.bookButton}
					variant={status ? "primary" : "danger"}
					onClick={handleBooking}
					disabled={!status || !bookingStart || !bookingEnd}
				>
					{status ? "Book Now" : "Not Available"}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default RoomCard;
