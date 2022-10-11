// import { API } from "../../middleware/middleware";

import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
});

/**
 * get all refferalcodes api call
 * @returns 
 */
export const getAllRefferalCodes = (): Promise<any> => {
     return API.get("/refferalCodes")
}
/**
 * get refferalcode by id api call
 * @param refferalCodeId 
 * @returns 
 */
// export const getRefferalCodeById = (refferalCodeId: string): Promise<any> => {
//     return API.get("/refferalCodes/"+refferalCodeId)
// }

/**
 * delete refferalCode by id api call
 * @param
 */
//  export const deleteRefferalCodeById = (refferalCodeId: string): Promise<any> => {
//     return API.delete("/refferalCodes/" + refferalCodeId)
// }

/**
 * update refferalCode api call
 * @param id 
 * @param value 
 * @returns 
 */

// export const updateRefferalCodeById = (values:TRefferalCodeDetailPayload): Promise<any> => {
//     return API.put("/refferalCodes/" + values?.id, {refferalCode:values?.refferalCode, status:values?.status});
// }

/**
 * add new refferalCode api call
 * @param value 
 * @returns 
 */

// export const addNewRefferalCode = (value:TRefferalCodeDetailPayload):Promise<any>=>{
//     return API.post("/refferalCodes/",value);
// }