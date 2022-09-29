import axios from "axios";

export const API = axios.create({
    baseURL: "https://mocki.io/v1",
});

/**
 * get user reports api call
 * 
 * @returns
 */

export const getUserReportsAPI = () => {
    return API.get("/9763f1ac-8e89-47e6-8b73-2e24e8eb98c6")
};

/**
 * get driver reports api call
 * 
 * @returns
 */

export const getDriverReportsAPI =() => {
    return API.get("/ba99a9b8-1574-4efc-a0a9-902b698396dd")
};

/**
 * get vehicle reports api call
 * 
 * @returns
 */

export const getVehicleReportsAPI =()=>{
    return API.get("/861bdfcc-9e60-4293-b9e5-18c6d2a4b8fc")
}


