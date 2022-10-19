import { ActionType } from 'typesafe-actions';
import * as actions from "./emailTemplate.action";

type TEmailTemplateActionType = ActionType<typeof actions>;

type TSingleEmailTemplateType = {
    id: number | string,
    key: string,
    status: boolean,
    subject: string,
    template: string
};

type TEmailTemplateType = {
    id: number | string,
    key: string,
    status: boolean,
    subject: string,
};

type TEmailTemplatePayload = { emailTemplates: TEmailTemplateType[], count: number };

type TEmailTemplateState = {
    loading: boolean;
    emailTemplateData: TEmailTemplatePayload;
    singleEmailTemplate: TSingleEmailTemplateType;
}

export {
    TEmailTemplatePayload,
    TEmailTemplateState,
    TEmailTemplateActionType,
    TEmailTemplateType,
    TSingleEmailTemplateType
}
