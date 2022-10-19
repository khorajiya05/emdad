import { action } from "typesafe-actions";
import EmailTemplateTypeEnum from "./emailTemplate.enum";
import { TEmailTemplatePayload, TEmailTemplateType } from "./emailTemplate.types";

/**
 * emailTemplate laoding action creator
 * @returns 
 */
export const emailTemplateLoadingAction = () => action(EmailTemplateTypeEnum.EMAIL_TEMPLATE_LOADING);

/**
 * emailTemplate loaded action creator
 * @returns 
 */
export const emailTemplateLoadedAction = () => action(EmailTemplateTypeEnum.EMAIL_TEMPLATE_LOADED);

/**
 * get emailTemplate list action creator
 * @param payload 
 * @returns 
 */
export const getEmailTemplateListAction = (payload: TEmailTemplatePayload) => action(EmailTemplateTypeEnum.GET_EMAIL_TEMPLATE_LIST, payload);

/**
 * update emailTemplate action creator
 * @returns 
 */
export const updateEmailTemplateAction = (payload: TEmailTemplateType) => action(EmailTemplateTypeEnum.UPDATE_EMAIL_TEMPLATE, payload);

/**
 * get emailTemplate By id action creator
 * @param payload 
 * @returns 
 */
export const getEmailTemplateByIdAction = (payload: TEmailTemplateType) => action(EmailTemplateTypeEnum.GET_EMAIL_TEMPLATE_BY_ID, payload);