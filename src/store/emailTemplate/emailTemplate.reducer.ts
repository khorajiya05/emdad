import EmailTemplateTypeEnum from "./emailTemplate.enum";
import { TEmailTemplateActionType, TEmailTemplateState, TSingleEmailTemplateType } from "./emailTemplate.types";

const INITIAL_STATE: TEmailTemplateState = {
    loading: false,
    emailTemplateData: { emailTemplates: [], count: 0 },
    singleEmailTemplate: {} as TSingleEmailTemplateType
};

const emailTemplateReducer = (state = INITIAL_STATE, action: TEmailTemplateActionType) => {

    switch (action.type) {

        case EmailTemplateTypeEnum.EMAIL_TEMPLATE_LOADING:
            return { ...state, loading: true }

        case EmailTemplateTypeEnum.EMAIL_TEMPLATE_LOADED:
            return { ...state, loading: false }

        case EmailTemplateTypeEnum.GET_EMAIL_TEMPLATE_LIST:
            return { ...state, loading: false, singleEmailTemplate: {} as TSingleEmailTemplateType, emailTemplateData: { ...state?.emailTemplateData, emailTemplates: action.payload?.emailTemplates, count: action?.payload?.count } }

        case EmailTemplateTypeEnum.GET_EMAIL_TEMPLATE_BY_ID:
            return { ...state, loading: false, singleEmailTemplate: action.payload }

        default:
            return state;
    }
}
export default emailTemplateReducer;