import axios from "axios";
export const getDataFromApi = (getToken, setterFunction, url) => {
	axios
		.get(`${url}`, {
			headers: { Authorization: getToken() },
		})
		.then((res) => {
			setterFunction(res.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
