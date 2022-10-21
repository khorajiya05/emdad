import FAQsActionTypeEnum from './FAQs.enum';
import { TFAQsActionType, TFAQsDetail, TFAQsState } from "./FAQs.types"

const INITIAL_STATE: TFAQsState = {
    loading: false,
    FAQsData: { FAQs: [] },
    singleFAQsData: {} as TFAQsDetail
}
const FAQsReducer = (state = INITIAL_STATE, action: TFAQsActionType) => {
    switch (action.type) {

        case FAQsActionTypeEnum.FAQ_LOADING:
            return { ...state, loading: true }

        case FAQsActionTypeEnum.FAQ_LOADED:
            return { ...state, loading: false }

        case FAQsActionTypeEnum.GET_ALL_FAQ:
            return { ...state, loading: false, singleFAQsData: {} as TFAQsDetail, FAQsData: { ...state?.FAQsData, FAQs: action.payload?.faqs } }

        case FAQsActionTypeEnum.DELETE_FAQ:
            const FAQsData = [...state.FAQsData.FAQs]
            const FAQsId = FAQsData.findIndex((FAQs) => String(FAQs.id) === String(action.payload));
            if (FAQsId > -1) {
                FAQsData.splice(FAQsId, 1);
            }
            return { ...state, loading: false, FAQsData: { FAQs: [...FAQsData] } }

        case FAQsActionTypeEnum.GET_FAQ_BY_ID:
            return { ...state, loading: false, singleFAQsData: action?.payload }

        default:
            return state;
    }
}

export default FAQsReducer;