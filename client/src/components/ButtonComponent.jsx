import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({
	title,
	onClick,
	variant,
	size,
	icon,
	iconSize,
	disabled,
}) => {
	const solidColors = {
		danger: { background: "#980c41", text: "#fff" },
		primary: { background: "#17539d", text: "#fff" },
		secondary: { background: "#6A4E4E", text: "#fff" },
		info: { background: "#27656d", text: "#fff" },
		success: { background: "#194500", text: "#fff" },
		warning: { background: "#FFD700", text: "#000" },
		dark: { background: "#343A40", text: "#fff" },
		light: { background: "#F8F9FA", text: "#000" },
	};

	const { background, text } = solidColors[variant] || solidColors.danger;

	const buttonStyle = {
		background: background,
		border: "none",
		color: text,
		fontFamily: "Poppins",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: "10px",
		paddingRight: "10px",
		padding: "10px",
		cursor: "pointer",
	};

	const iconStyle = {
		fontSize: iconSize || 16,
		marginLeft: "10px",
	};

	return (
		<Button
			size={size ? size : "sm"}
			variant="default"
			onClick={onClick}
			style={buttonStyle}
			className="w-100"
			disabled={disabled}
		>
			{title}
			{icon && <span style={iconStyle}>{icon}</span>}
		</Button>
	);
};

export default ButtonComponent;
