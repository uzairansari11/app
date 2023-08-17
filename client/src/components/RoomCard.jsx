import React from "react";
import { Button, Card } from "react-bootstrap";

const RoomCard = () => {
	let isAvailable = true;
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().slice(0, 16);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
			/>
			<Card.Body>
				<Card.Title>Meeting Room-1</Card.Title>
				<Card.Text>Room Capacity : 19</Card.Text>
				<input type="datetime-local" min={formattedDate} />
				<Button variant={isAvailable ? "primary" : "danger"}>Book Now</Button>
			</Card.Body>
		</Card>
	);
};

export default RoomCard;
