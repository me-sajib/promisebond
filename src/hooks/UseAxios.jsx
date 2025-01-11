import axios from "axios";

export const useAxios = () => {
	let baseURL = "https://api.dmgurd.com";

	if (window.location.href.includes("localhost")) {
		baseURL = "http://localhost:5050";
	}

	baseURL += "/query/v1";

	return axios.create({ baseURL });
};