import React from "react";

export const Slot = ({ index, startDate, endDate }) => {
	return (
		<li
			key={index}
			className="list-group-item d-flex justify-content-between align-items-center bg-light border rounded mb-3 p-3"
		>
			<div className="d-flex flex-column w-100">
				<div className="d-flex justify-content-between align-items-center mb-2">
					<p className="mb-0">
						<strong>Start:</strong> {startDate}
					</p>
					<p className="mb-0">
						<strong>End:</strong> {endDate}
					</p>
				</div>
				<span className="badge bg-primary rounded-pill">Slot {index + 1}</span>
			</div>
		</li>
	);
};

 
