import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { FAQsLoadedAction, FAQsLoadingAction, getAllFAQsAction, deleteFAQsAction, getFAQsByIdAction } from './FAQs.action';
import * as requestFromServer from '../../services/faqs/FAQsService'
import { errorToast, successToast } from '../../components/toast/toast';
import { TFAQsDetail } from './FAQs.types';


/**
 * get FAQ thunk
 * @returns 
 */
export const getAllFAQsActionThunk = (language: string, userType: string): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

        dispatch(FAQsLoadingAction());
        requestFromServer.getAllFAQs(language, userType)
            .then((res) => {
                dispatch(FAQsLoadedAction())
                dispatch(getAllFAQsAction({ faqs: res.data?.data?.faqs, count: res.data?.data?.count }))
            })
            .catch((error) => {
                dispatch(FAQsLoadedAction())
                if (error.response && error.response.data) {
                    errorToast(error.response.data.message)
                } else {
                    errorToast("Something went wrong");
                }
            })
    }
}

/**
 * Delete FAQ action thunk
 * @param id
 * @returns
 */
export const deleteFAQsActionThunk = (id: string | number | null): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(FAQsLoadingAction());
        requestFromServer
            .deleteFAQsById(id)
            .then((res) => {
                dispatch(FAQsLoadedAction());
                dispatch(deleteFAQsAction(id));
                successToast("FAQ deleted successfully");
            })
            .catch((err) => {
                dispatch(FAQsLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });
    };
};

/**
 * get FAQ by id action thunk
 * @param id 
 * @returns 
 */
export const getFAQsByIdActionThunk = (id: string | number): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(FAQsLoadingAction());
        requestFromServer.getFAQsById(id)
            .then((res) => {
                dispatch(FAQsLoadedAction());
                dispatch(getFAQsByIdAction(res.data?.data?.faqs));
            })
            .catch((err) => {
                dispatch(FAQsLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });
    }
}


export const updateFAQsActionThunk = (values: Partial<TFAQsDetail>, getAction?: Function): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(FAQsLoadingAction());
        requestFromServer.updateFAQsById(values)
            .then((res) => {
                dispatch(FAQsLoadedAction());
                getAction && getAction();
                successToast("FAQ updated successfully");
            })
            .catch((err) => {
                dispatch(FAQsLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });
    }
}

export const addFAQsActionThunk = (values: Partial<TFAQsDetail>, getAction?: Function): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(FAQsLoadingAction());
        requestFromServer.addNewFAQs(values)
            .then((res) => {
                dispatch(FAQsLoadedAction());
                getAction && getAction();
                successToast("FQA added successfully");
            })
            .catch((error) => {
                dispatch(FAQsLoadedAction());
                errorToast(error?.response?.data?.message || "Something went wrong");
            })
    }
}