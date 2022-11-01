import moment from "moment";
import { API } from "../../middleware/middleware";
import { TUserDetails } from "../../store/users/users.types";

/**
 * get all users api call
 * @returns
 */
export const getAllUsers = (
    search: string | null,
    page: number,
    perPage: number,
    sort: string,
    sortBy?: string | null
): Promise<any> => {
    return API.get("/reports/customers", {
        params: {
            search,
            page,
            perPage,
            sort
        },
    });
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
export const deleteUserById = (id: string | number): Promise<any> => {
    return API.delete("/users/" + id)
}

/**
 * update driver api call
 * @param id 
 * @param value 
 * @returns 
 */

export const updateUserById = (id: string, value: any): Promise<any> => {
    return API.put("/usersData/" + id, value);
}

/**
 * add new driver api call
 * @param value 
 * @returns 
 */

export const addNewUser = (value: TUserDetails): Promise<any> => {
    return API.post("/usersData/", value);
}

