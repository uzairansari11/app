import React from "react";
import styles from "../styles/MeetingRoom.module.css";

const MeetingRoomCard = ({ name, capacity, amenities, image }) => {
	return (
		<div className={`${styles.meetingRoomCard} shadow`}>
			<div className="card-body">
				<img src={image} alt="Meeting Room" className={styles.roomImage} />
				<h5 className={`${styles.cardTitle} mt-3`}>{name}</h5>
				<p className={styles.cardText}>Capacity: {capacity} Persons</p>
				<h6 className={styles.amenitiesTitle}>Amenities</h6>
				<ul className={styles.amenitiesList}>
					{amenities.map((amenity, index) => (
						<li key={index} className={styles.listGroupItem}>
							{amenity}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MeetingRoomCard;
