import { action } from "typesafe-actions";
import FAQsActionTypeEnum from "./FAQs.enum";
import { TFAQsDetail } from "./FAQs.types";


/**
 * FAQ loading action creator
 * @returns 
 */
const FAQsLoadingAction = () => {
    return action(FAQsActionTypeEnum.FAQ_LOADING);
}

/**
 * FAQ loaded action creator
 * @returns 
 */
const FAQsLoadedAction = () => action(FAQsActionTypeEnum.FAQ_LOADED);

/**
 * get FAQs action creator
 * @param payload 
 * @returns 
 */
const getAllFAQsAction = (payload: { faqs: TFAQsDetail[], count: number }) => action(FAQsActionTypeEnum.GET_ALL_FAQ, payload);


/**
 * get FAQ by id action creator
 * @param payload 
 * @returns 
 */
const getFAQsByIdAction = (payload: TFAQsDetail) => action(FAQsActionTypeEnum.GET_FAQ_BY_ID, payload);


/**
 * delete FAQ by id action creator
 * @param payload 
 * @returns 
 */
const deleteFAQsAction = (payload: string | number | null) => action(FAQsActionTypeEnum.DELETE_FAQ, payload)

export {
    FAQsLoadedAction,
    FAQsLoadingAction,
    getFAQsByIdAction,
    getAllFAQsAction,
    deleteFAQsAction,
}