import axios from "axios";
// roomId: id,

export const handleBooking = async (data, getToken) => {
	try {
		const response = await axios.post(`http://localhost:8080/booking`, data, {
			headers: {
				Authorization: getToken(),
			},
		});
		return response;
	} catch (error) {
		return error;
	}
};

export const getDataFromApi = (getToken, setterFunction, url) => {
	return axios
		.get(url, {
			headers: { Authorization: getToken() },
		})
		.then((res) => {
			setterFunction(res.data);
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
};

export const deleteDataFromApi = (getToken, url, meetingId) => {
	return axios
		.delete(`${url}/${meetingId}`, {
			headers: { Authorization: getToken() },
		})
		.then((res) => {
			return true;
		})
		.catch((error) => {
			throw error;
		});
};
