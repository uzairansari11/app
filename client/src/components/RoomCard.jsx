import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import {
	BsCalendarEvent,
	BsCheckCircleFill,
	BsXCircleFill,
	BsPersonFill,
} from "react-icons/bs"; // Import icons
import styles from "../styles/Room.module.css"; // Import custom CSS module

const RoomCard = () => {
	const [isAvailable, setIsAvailable] = useState(true);
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().slice(0, 16);

	const handleBooking = () => {
		// Simulate room booking logic
		if (isAvailable) {
			setIsAvailable(false);
			console.log("Room booked!");
		} else {
			console.log("Room not available for booking.");
		}
	};

	return (
		<Card className={styles.roomCard}>
			<div className={styles.imageContainer}>
				<div className={styles.imageWrapper}>
					<Card.Img
						className={styles.roomImage}
						variant="top"
						src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
						alt="Room"
					/>
				</div>
			</div>
			<Card.Body>
				<Card.Title className={styles.roomTitle}>Meeting Room-1</Card.Title>
				<Card.Text className={styles.roomInfo}>
					<BsPersonFill className={styles.icon} /> 19 Seats
				</Card.Text>
				<Card.Text className={styles.availability}>
					{isAvailable ? (
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
					<BsCalendarEvent className={styles.icon} />{" "}
					<input
						type="datetime-local"
						min={formattedDate}
						className={styles.dateInput}
						onChange={(e) => console.log(e.target.value)}
					/>
				</div>
				<Button
					className={styles.bookButton}
					variant={isAvailable ? "primary" : "danger"}
					onClick={handleBooking}
					disabled={!isAvailable}
				>
					{isAvailable ? "Book Now" : "Not Available"}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default RoomCard;
