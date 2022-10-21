import axios from "axios";
import { TUserDetails } from "../../store/users/users.types";



export const API = axios.create({
    baseURL: "http://localhost:3000",
});


/**
 * get all users api call
 * @returns
 */
export const getAllUsers = (): Promise<any> => {
    return API.get("/usersData");
};

/**
 * get driver by id api call
 * @param
 */
export const getUserById = (id: string): Promise<any> => {
    return API.get("/usersData/" + id)
}

/**
 * delete driver by id api call
 * @param
 */
export const deleteUserById = (id: string): Promise<any> => {
    return API.delete("/usersData/" + id)
}

/**
 * update driver api call
 * @param id 
 * @param value 
 * @returns 
 */

export const updateUserById = (id: string, value:any): Promise<any> => {
    return API.put("/usersData/" + id, value);
}

/**
 * add new driver api call
 * @param value 
 * @returns 
 */

export const addNewUser = (value:TUserDetails):Promise<any>=>{
    return API.post("/usersData/",value);
}

