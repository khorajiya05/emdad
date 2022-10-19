import { API } from "../../middleware/middleware";

/**
 * get all driverHandBook api call
 * @returns 
 */
export const getAllDriverHandBooks = (search: string | null, page: number | string, perPage: string | number): Promise<any> => {
    return API.get("/faqs", { params: { userType: "driver", language: "english", search, page, perPage } })
}

/**
 * add new driverHandBook api call
 * @param question 
 * @param answer 
 * @param language 
 * @param userType 
 * @returns 
 */
export const addNewDriverHandBook = (question: string, answer: string, language: string, userType: string): Promise<any> => {
    return API.post("/faqs/", { question, answer, language, userType });
}

/**
 * update driverHandBook api call
 * @param values
 * @returns 
 */
export const updateDriverHandBookById = (values: any): Promise<any> => {
    return API.put("/faqs/" + values?.id, { question: values?.question, answer: values?.answer });
}

/**
 * delete driverHandBook by id api call
 * @param
 */
export const deleteDriverHandBookById = (driverHandBookId: string | number): Promise<any> => {
    return API.delete("/faqs/" + driverHandBookId)
}