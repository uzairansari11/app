import { Table } from "react-bootstrap";

export const TableComponent = ({ children }) => {
	return (
		<Table striped bordered hover className="w-100">
			<thead>
				<tr>
					<th>Room</th>
					<th>Title</th>
					<th>Description</th>
					<th>Start Time</th>
					<th>End Time</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</Table>
	);
};
