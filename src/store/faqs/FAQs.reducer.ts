import FAQsActionTypeEnum from './FAQs.enum';
import { TFAQsActionType, TFAQsDetail, TFAQsState } from "./FAQs.types"

const INITIAL_STATE: TFAQsState = {
    loading: false,
    FAQsData: { FAQs: [], count: 0 },
    singleFAQsData: {} as TFAQsDetail
}
const FAQsReducer = (state = INITIAL_STATE, action: TFAQsActionType) => {
    switch (action.type) {
        case FAQsActionTypeEnum.FAQ_LOADING:
            return { ...state, loading: true }

        case FAQsActionTypeEnum.FAQ_LOADED:
            return { ...state, loading: false }

        case FAQsActionTypeEnum.GET_ALL_FAQ:
            return { ...state, loading: false, FAQsData: { ...state?.FAQsData, FAQs: action.payload?.faqs, count: action?.payload?.count } }

        case FAQsActionTypeEnum.DELETE_FAQ:
            const FAQsData = [...state.FAQsData.FAQs]
            const FAQsId = FAQsData.findIndex((FAQs) => FAQs.id === action.payload);
            if (FAQsId > -1) {
                FAQsData.splice(FAQsId, 1);
            }
            return { ...state, loading: false, FAQsData: { FAQs: [...FAQsData] } }

        case FAQsActionTypeEnum.GET_FAQ_BY_ID:
            return { ...state, loading: false, singleFAQsData: { FAQs: action.payload } }

        case FAQsActionTypeEnum.UPDATE_FAQ:
            {
                const FAQsList = [...state.FAQsData.FAQs];
                const FAQsIndex = FAQsList.findIndex((FAQsList) => FAQsList?.id === action.payload.id);
                if (FAQsIndex > -1) {
                    FAQsList[FAQsIndex] = { ...action.payload };
                }
                return { ...state, loading: false, FAQsData: { FAQs: FAQsList } }
            }

        case FAQsActionTypeEnum.ADD_NEW_FAQ:
            const FAQsList = [...state.FAQsData.FAQs];
            FAQsList[FAQsList.length] = { ...action?.payload }
            return { ...state, loading: false, FAQsData: { FAQs: FAQsList } }

        case FAQsActionTypeEnum.DO_EMPTY_SINGLE_FAQ:
            return { ...state, loading: false, singleFAQsData: { FAQs: {} } }

        default:
            return state;
    }
}

export default FAQsReducer;