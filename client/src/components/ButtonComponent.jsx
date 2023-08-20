import React from "react";
import { Button } from "react-bootstrap";


const ButtonComponent = ({ title, onClick, variant, size, icon }) => {
	const gradientColors = {
		danger: ["#FF6B6B", "#FF8E53"],
		primary: ["#2EC4B6", "#009E7F"],
		secondary: ["#6A4E4E", "#985959"],
		info: ["#8DA8B3", "#60839E"],
		success: ["#76CE92", "#3FA063"],
		warning: ["#FFD700", "#FFA500"],
		dark: ["#343A40", "#343A40"],
		light: ["#F8F9FA", "#F8F9FA"],
	};

	const getGradientColors = gradientColors[variant] || ["#FF6B6B", "#FF8E53"];

	const buttonStyle = {
		background: `linear-gradient(45deg, ${getGradientColors[0]}, ${getGradientColors[1]})`,
		border: "none",
		color: "#fff",
		fontFamily: "Poppins",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: "10px",
		paddingRight: "10px",
		padding: "15px",
		cursor: "pointer", // Add cursor pointer for better interactivity
	};

	return (
		<Button
			size={size ? size : "sm"}
			variant="default"
			onClick={onClick}
			style={buttonStyle}
			className="w-100"
		>
			{title}
			{icon && ( // Show icon only if it's passed
				<span style={{ marginLeft: "10px" }}>{icon}</span>
			)}
		</Button>
	);
};

export default ButtonComponent;
