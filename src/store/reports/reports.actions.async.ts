import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import * as requestFromServer from "../../services/reports/reportsService"
import { getDriverReportsAction, getUserReportsAction, getVehicleReportsAction, reportsLoadedAction, reportsLoadingAction } from "./reports.action";
import { errorToast } from "../../components/toast/toast";



/**
 * get user reports list thunk
 * 
 * @returns
 */
export const getUserReportsActionThunk = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(reportsLoadingAction());
        requestFromServer.getUserReportsAPI()
            .then((res) => {
                dispatch(reportsLoadedAction());
                dispatch(getUserReportsAction({ count: 0, users: res.data }));
            })
            .catch((error) => {

                dispatch(reportsLoadedAction());
                if (error.response && error.response.data) {
                    errorToast(error.response.data.message);
                } else {
                    errorToast("Something went wrong.");
                }
            })
    }
}
/**
 * get driver reports list thunk
 * 
 * @returns
 */

export const getDriverReportsActionThunk = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(reportsLoadingAction());
        requestFromServer.getDriverReportsAPI()
            .then((res) => {                
                dispatch(reportsLoadedAction());
                dispatch(getDriverReportsAction(res.data));
                
            })
            .catch((error) => {

                dispatch(reportsLoadedAction());
                if (error.response && error.response.data) {
                    errorToast(error.response.data.message);
                } else {
                    errorToast("Something went wrong.");
                }
            })
    }
}

/**
 * get customer reports list thunk
 *
 * @returns
 */

export const getVehicleReportsActionThunk =():ThunkAction<void, {}, {}, AnyAction> => {
    return(dispatch:ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(reportsLoadingAction());
        requestFromServer.getVehicleReportsAPI()
        .then((res)=>{
            dispatch(reportsLoadedAction());
            dispatch(getVehicleReportsAction(res.data));
        })
        .catch((error)=>{
            dispatch(reportsLoadedAction());
            if(error.response && error.response.data){
                errorToast(error.response.data.message);
            } else {
                errorToast("Something went wrong.");
            }
        })

    }
}