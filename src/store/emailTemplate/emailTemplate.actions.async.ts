import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { emailTemplateLoadingAction, emailTemplateLoadedAction, getEmailTemplateListAction, getEmailTemplateByIdAction } from './emailTemplate.action';
import * as requestFromServer from "../../services/emailTemplate/emailTemplateService";
import { errorToast, successToast } from '../../components/toast/toast';


/**
 * get emailTemplate list thunk
 * @returns 
 */
export const getEmailTemplateActionThunk = (search: string | null, page: number | string, perPage: number | string): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

        dispatch(emailTemplateLoadingAction());
        requestFromServer.getEmailTemplateList(search, page, perPage)
            .then((res) => {
                dispatch(getEmailTemplateListAction(res.data));
                dispatch(emailTemplateLoadedAction());
            })
            .catch((error) => {
                dispatch(emailTemplateLoadedAction());
                error.response && error.response.data ? errorToast(error.response.data.message) : errorToast("Something went wrong");
            })
    }
}

/**
 * get emailTemplate by id thunk
 * @param emailTemplateId 
 * @returns 
 */
export const getEmailTemplateByIdActionThunk = (emailTemplateId: string | number | undefined): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(emailTemplateLoadingAction());

        requestFromServer.getEmailTemplateById(emailTemplateId)
            .then((res) => {
                dispatch(getEmailTemplateByIdAction(res.data));
                dispatch(emailTemplateLoadedAction());
            })
            .catch((error) => {
                dispatch(emailTemplateLoadedAction());
                error.response && error.response.data ? errorToast(error.response.data.message) : errorToast("Something went wrong");
            })
    }
}

/**
 * update emailTemplate thunk 
 * @returns 
 */
export const updateEmailTemplateActionThunk = (id: string | number | undefined, subject: string, template: string): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(emailTemplateLoadingAction());
        requestFromServer.updateEmailTemplate(id, subject, template)
            .then((res) => {
                dispatch(emailTemplateLoadedAction());
                successToast("Successfully updated");
            })
            .catch((error) => {
                dispatch(emailTemplateLoadedAction());
                error.response && error.response.data ? errorToast(error.response.data.message) : errorToast("Something went wrong");
            })
    }
}