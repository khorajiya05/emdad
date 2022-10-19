import { API } from '../../middleware/middleware';
import { TEmailTemplateType } from '../../store/emailTemplate/emailTemplate.types';


/**
 * get emailTemplates api call
 * @returns 
 */
export const getEmailTemplateList = (search: string | null, page: number | string, perPage: number | string): Promise<any> => {
    return API.get("/emailTemplates", { params: { search, page, perPage } })
};

/**
 * update email template api call
 * @param emailTemplate 
 * @returns 
 */
export const updateEmailTemplate = (id: number | string | undefined, subject: string, template: string): Promise<any> => {
    return API.put("/emailTemplates/" + id, { subject, template })
}

/**
 * add new emailTemplate api call
 * @param emailTemplate 
 * @returns 
 */
export const addNewEmailTemplate = (emailTemplate: Partial<TEmailTemplateType>): Promise<any> => {
    return API.post("/emailTemplates", emailTemplate)
}

/**
 * delete emailTemplate api call
 * @param emailTemplateId 
 * @returns 
 */
export const deleteEmailTemplate = (emailTemplateId: string): Promise<any> => {
    return API.delete("/emailTemplates/" + emailTemplateId)
}

/**
 * get emailTemplate by id api call
 * @param emailTemplateId 
 * @returns 
 */
export const getEmailTemplateById = (emailTemplateId: string | number | undefined): Promise<any> => {
    return API.get("/emailTemplates/" + emailTemplateId)
}