import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { driverHandBookLoadedAction, driverHandBookLoadingAction, getAllDriverHandBookAction, updateDriverHandBookAction, addDriverHandBookAction, geTDriverHandBookByIdAction } from './driverHandBook.action';
import * as requestFromServer from '../../services/driverHandBook/driverHandBookService';
import { errorToast, successToast } from '../../components/toast/toast';
import { TDriverHandBookDetail } from './driverHandBook.types';


/**
 * get driver handbooks thunk
 * @returns 
 */
export const getAllDriverHandBooksActionThunk = (search: string | null, page: string | number, perPage: string | number): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(driverHandBookLoadingAction());
        requestFromServer.getAllDriverHandBooks(search, page, perPage)
            .then((res) => {
                dispatch(getAllDriverHandBookAction({ driverHandBooks: res.data?.data?.faqs, count: res.data?.data?.count }))
                dispatch(driverHandBookLoadedAction())
            })
            .catch((error) => {
                dispatch(driverHandBookLoadedAction())
                if (error.response && error.response.data) {
                    errorToast(error.response.data.message)
                } else {
                    errorToast("Something went wrong")
                }
            })
    }
}

/**
 * Delete driver handbook action thunk
 * @param id
 * @returns
 */
export const deleteDriverHandBookActionThunk = (id: string | number, fetchData?: () => void): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(driverHandBookLoadingAction());
        requestFromServer
            .deleteDriverHandBookById(id)
            .then((res) => {
                fetchData && fetchData();
                dispatch(driverHandBookLoadedAction());
                successToast("DriverHandBook deleted successfully");
            })
            .catch((err) => {
                dispatch(driverHandBookLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });
    };
};

/**
 * update driver hanbook action thunk
 * @param values 
 * @returns 
 */
export const updateDriverHandBookActionThunk = (values: Partial<TDriverHandBookDetail>): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(driverHandBookLoadingAction());
        requestFromServer.updateDriverHandBookById(values)
            .then((res) => {
                dispatch(updateDriverHandBookAction(res.data?.data?.faqs));
                dispatch(driverHandBookLoadedAction());
                successToast("Driver handbook updated successfully");
            })
            .catch((err) => {
                dispatch(driverHandBookLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });
    }
}


/**
 * add driver handbook action thunk
 * @param
 * @returns 
 */
export const addDriverHandBookActionThunk = (question: string, answer: string, language: string, userType: string, fetchData?: () => void): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(driverHandBookLoadingAction());
        requestFromServer.addNewDriverHandBook(question, answer, language, userType)
            .then((res) => {
                fetchData && fetchData();
                dispatch(driverHandBookLoadedAction());
                successToast("DriverHandBook added successfully");
            })
            .catch((error) => {
                dispatch(driverHandBookLoadedAction());
                errorToast(error?.response?.data?.message || "Something went wrong");
            })
    }
}