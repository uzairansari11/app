import { BsFillBookmarkFill } from "react-icons/bs";
import { LuHome } from "react-icons/lu";
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
		variant: "primary",
		handler: allRoomsHandler,
		path: "/dashboard",
		icon: <LuHome />,
		iconSize: "20",
	},

	{
		id: 2,
		title: "User Booked Rooms",
		size: "md",
		variant: "info",
		handler: userBookedRoomsHandler,
		path: "booked",
		icon: <BsFillBookmarkFill />,
		iconSize: "20",
	},
];
