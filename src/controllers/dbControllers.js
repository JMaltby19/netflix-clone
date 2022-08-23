import axios from "axios";

export const getProfileDetails = async () => {
	try {
		const response = await axios.get(`http://localhost:6001/get`, {
			headers: { token: localStorage.getItem("token") },
		});
		console.log(response);

		if (response.data.status === 1) {
			return response.data.payload[0];
		} else {
			return response.data.status;
		}
	} catch (error) {
		console.log(error);
	}
};

export const updateRequest = async () => {
	try {
		const response = await axios.patch(`http://localhost:6001/modify`, {
			headers: { token: localStorage.getItem("token") },
		});
		if (response.data.status) {
		} else {
			return response.data.error;
		}
	} catch (error) {
		console.log(error);
	}
};
