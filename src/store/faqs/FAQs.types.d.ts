import { ActionType } from 'typesafe-actions';
import * as actions from "./FAQs.action"

type TFAQsActionType = ActionType<typeof actions>;

type TFAQsDetail = {
    id: number | string,
    userType: string,
    question: string,
    answer: string,
    language: string
}

type TFAQsState = {
    loading: boolean;
    FAQsData: { FAQs: TFAQsDetail[], count: number };
    singleFAQsData: TFAQsDetail
}


export {
    TFAQsDetail,
    TFAQsState,
    TFAQsActionType
}