import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ title, handler, variant, size }) => {
	return (
		<Button
			className="font-family-poppins "
			size={size ? size : "sm"}
			variant={variant}
			onClick={handler}
		>
			{title}
		</Button>
	);
};

export default ButtonComponent;
