import {
	allRoomsHandler,
	availableRoomsHandler,
	userBookedRoomsHandler,
} from "./sidebarHandlers";
export const sidebarButtons = [
	{
		id: 1,
		title: "All Rooms",
		size: "md",
		variant: "info",
		handler: allRoomsHandler,
		path: "/dashboard",
	},
	{
		id: 2,
		title: "Available Rooms",
		size: "md",
		variant: "success",
		handler: availableRoomsHandler,
		path: "available",
	},
	{
		id: 3,
		title: "User Booked Rooms",
		size: "md",
		variant: "danger",
		handler: userBookedRoomsHandler,
		path: "booked",
	},
];
