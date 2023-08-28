import React from "react";

const NotFound = ({ text1, text2 }) => {
	return (
		<div className="container text-center mt-5">
			{text1 ? <h5 className="text-primary">{text1}</h5> : null}
			{text2 ? <p>{text2}</p> : null}
		</div>
	);
};

export default NotFound;
