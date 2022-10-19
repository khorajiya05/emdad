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
const deleteFAQsAction = (payload: string) => action(FAQsActionTypeEnum.DELETE_FAQ, payload)


/**
 * update FAQ by id aciton creator
 * @param payload 
 * @returns 
 */
const updateFAQsAction = (payload: TFAQsDetail) => action(FAQsActionTypeEnum.UPDATE_FAQ, payload);

/**
 * add new FAQ action creator
 * @param payload 
 * @returns 
 */
const addFAQsAction = (payload: TFAQsDetail) => action(FAQsActionTypeEnum.ADD_NEW_FAQ, payload);

const doEmptySingleFAQData = () => action(FAQsActionTypeEnum.DO_EMPTY_SINGLE_FAQ)
export {
    FAQsLoadedAction,
    FAQsLoadingAction,
    getFAQsByIdAction,
    getAllFAQsAction,
    deleteFAQsAction,
    updateFAQsAction,
    addFAQsAction,
    doEmptySingleFAQData
}