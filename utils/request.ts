import axios from "axios";
import btoa from "btoa";
import publicIp from "public-ip";
import { ParseToken } from "../utils/functions";
import { API_URL, API_VERSION, BASIC_AUTH_PASSWORD, BASIC_AUTH_USERNAME } from "./config";
import { clearAll } from "./functions";
import { getCookie } from "./session";

// getting ip address of current user ( added fallback urls )
const ipAddress = publicIp.v4({
	fallbackUrls: ["https://ifconfig.co/ip", "https://checkip.amazonaws.com"],
});

// basic auth 
export const basicAuth = "Basic " + btoa(BASIC_AUTH_USERNAME + ":" + BASIC_AUTH_PASSWORD);

// method to format api url 
export const getUrl = (endpoint: string) => {
	return API_URL + API_VERSION + endpoint;
};


// interceptro to intercept http request 
axios.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		console.error("API error", error);
		if (!error.response) {
			return Promise.reject(error);
		} else if (error.response.status === 401 || error.response.status === 406) {
			clearAll();
			// await guestLogin();
			console.info("Authentication Error!")
			window.location.href = "/login";
			return;
		}
		return Promise.reject(error);
	}
);

// default common header
export const commonHeader = {
	"Content-Type": "application/json",
	lan: "en",
	platform: "3", //web
	city: "bengaluru",
	country: "India",
	ipaddress: "127.0.0.1",
	latitude: "13.344",
	longitude: "72.222",
};

// Core Get Request for Sending Dynamic Headers
axios.get(`${API_URL}/v1/usersCurrentLocation/`).then((res) => {
	if (res && res.data && res.data.data) {
		const data = res.data.data;
		commonHeader["lan"] = encodeURIComponent(data.lan || "en");
		commonHeader["platform"] = encodeURIComponent(data.platform || "3");
		commonHeader["city"] = encodeURIComponent(data.city || "bengaluru");
		commonHeader["country"] = encodeURIComponent(data.country_name || "India");
		commonHeader["ipaddress"] = encodeURIComponent(data.ip || "127.0.0.1");
		commonHeader["latitude"] = encodeURIComponent(data.latitude || "13.344");
		commonHeader["longitude"] = encodeURIComponent(data.longitude || "72.222");
	}
});

// updating common header ipaddress once received from ipAdress method
ipAddress.then((res) => (commonHeader["ipaddress"] = res));


/**
* @description GET method without token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param otherHeaders: object
* @return {*} 
*/
export const get = (endpoint: string, otherHeaders: object = {}): Promise<any> => {
	return axios.get(getUrl(endpoint), {
		headers: { ...commonHeader, ...otherHeaders }
	});
};


/**
* @description POST method without auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param data: req payload
* @param otherHeaders: object
* @return {*} Promise
*/
export const post = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
	return axios.post(getUrl(endpoint), data, {
		headers: { ...commonHeader, ...otherHeaders }
	});
};

/**
* @description PATCH method without auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param data: req payload
* @param otherHeaders: object
* @return {*} Promise
*/
export const patch = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
	return axios.patch(getUrl(endpoint), data, {
		headers: { ...commonHeader, ...otherHeaders }
	});
};


/**
* @description get method with auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param otherHeaders: object
* @return {*} Promise
*/
export const getWithToken = (endpoint: string, otherHeaders: object): Promise<any> => {
	axios.defaults.headers.common["authorization"] = ParseToken(
		getCookie("token") || basicAuth
	);
	return axios.get(getUrl(endpoint), {
		headers: { ...commonHeader, ...otherHeaders },
	});
};

/**
* @description post method with auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param data: req payload
* @param otherHeaders: object
* @return {*} Promise
*/
export const postWithToken = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
	axios.defaults.headers.common["authorization"] = ParseToken(
		getCookie("token") || basicAuth
	);
	return axios.post(getUrl(endpoint), data, {
		headers: { ...commonHeader, ...otherHeaders },
	});
};

/**
* @description patch method with auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param data: req payload
* @param otherHeaders: object
* @return {*} Promise
*/
export const patchWithToken = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
	axios.defaults.headers.common["authorization"] = ParseToken(
		getCookie("token")
	);
	return axios.patch(getUrl(endpoint), data, {
		headers: { ...commonHeader, ...otherHeaders },
	});
};

/**
* @description PUT method with auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param data: req payload
* @param otherHeaders: object
* @return {*} Promise
*/
export const putWithToken = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
	axios.defaults.headers.common["authorization"] = ParseToken(
		getCookie("token")
	);
	return axios.put(getUrl(endpoint), data, {
		headers: { ...commonHeader, ...otherHeaders }
	});
};


/**
* @description Delete Req method with auth token
* @author jagannath
* @date 30/12/2021
* @param endpoint: string
* @param data: req payload
* @param otherHeaders: object
* @return {*} Promise
*/
export const deleteWithToken = async (endpoint: string, data: any, otherHeaders: object): Promise<any> => {
	axios.defaults.headers.common["authorization"] = ParseToken(
		getCookie("token")
	);
	return axios({
		url: getUrl(endpoint),
		method: "DELETE",
		data,
		headers: { ...commonHeader, ...otherHeaders },
	});
};
