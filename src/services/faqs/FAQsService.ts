import { API } from "../../middleware/middleware";
import { TFAQsDetail } from "../../store/faqs/FAQs.types";


/**
 * get all FAQs api call
 * @returns 
 */
export const getAllFAQs = (language: string, userType: string,): Promise<any> => {
    return API.get("/faqs", { params: { language, userType } })
}
/**
 * get FAQs by id api call
 * @param FAQsId 
 * @returns 
 */
export const getFAQsById = (FAQsId: string | number): Promise<any> => {
    return API.get("/faqs/" + FAQsId)
}

/**
 * delete FAQs by id api call
 * @param
 */
export const deleteFAQsById = (FAQsId: string | number | null): Promise<any> => {
    return API.delete("/FAQs/" + FAQsId)
}

/**
 * update FAQs api call
 * @param id 
 * @param value 
 * @returns 
 */

export const updateFAQsById = (values: Partial<TFAQsDetail>): Promise<any> => {
    return API.put("/faqs/" + values?.id, { answer: values?.answer, question: values?.question });
}

/**
 * add new FAQs api call
 * @param value 
 * @returns 
 */

export const addNewFAQs = (value: Partial<TFAQsDetail>): Promise<any> => {
    return API.post("/FAQs/", value);
}