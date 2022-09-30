import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { refferalCodeLoadedAction, refferalCodeLoadingAction, getAllRefferalCodeAction } from './refferalCodes.action';
import * as requestFromServer from "../../services/refferalcodes/refferalCodeService"
import { errorToast } from '../../components/toast/toast';


/**
 * get refferalcodes thunk
 * @returns 
 */
export const getAllRefferalCodesActionThunk = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

        dispatch(refferalCodeLoadingAction());
        requestFromServer.getAllRefferalCodes()
            .then((res) => {
                setTimeout(()=>{
                    dispatch(refferalCodeLoadedAction())
                    dispatch(getAllRefferalCodeAction(res.data))
                },2000)
            })
            .catch((error) => {
                dispatch(refferalCodeLoadedAction())
                if (error.response && error.response.data) {
                    errorToast(error.response.data.message)
                } else {
                    errorToast("Something went wrong")
                }
            })
    }
}

/**
 * Delete sub admin action thunk
 * @param id
 * @returns
 */
// export const deleteRefferalCodeActionThunk = (id: string): ThunkAction<void, {}, {}, AnyAction> => {
//     return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
//         dispatch(refferalCodeLoadingAction());
//         requestFromServer
//             .deleteRefferalCodeById(id)
//             .then((res) => {
//                 dispatch(deleteRefferalCodeAction(id));
//                 successToast("Refferalcode deleted successfully");
//             })
//             .catch((err) => {
//                 dispatch(refferalCodeLoadedAction());
//                 errorToast(err?.response?.data?.message || "Something went wrong");
//             });
//     };
// };

/**
 * get refferal code by id action thunk
 * @param id
 * @returns
 */
// export const getRefferalCodeByIdActionThunk = (id: string): ThunkAction<void, {}, {}, AnyAction> => {
//     return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
//         dispatch(refferalCodeLoadingAction());
//         requestFromServer.getRefferalCodeById(id)
//             .then((res) => {
//                 dispatch(refferalCodeLoadedAction());
//                 dispatch(getRefferalCodeByIdAction(res.data));
//             })
//             .catch((err) => {
//                 dispatch(refferalCodeLoadedAction());
//                 errorToast(err?.response?.data?.message || "Something went wrong");
//             });
//     }
// }


/**
 * update refferal code action thynk
 * @param values
 * @returns
 */
// export const updateRefferalCodeActionThunk = (values: TRefferalCodeDetailPayload): ThunkAction<void, {}, {}, AnyAction> => {
//     return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
//         dispatch(refferalCodeLoadingAction());
//         requestFromServer.updateRefferalCodeById(values)
//             .then((res) => {
//                 dispatch(refferalCodeLoadedAction());
//                 dispatch(updateRefferalCodeAction(res.data));
//                 successToast("Refferalcode updated successfully");
//             })
//             .catch((err) => {
//                 dispatch(refferalCodeLoadedAction());
//                 errorToast(err?.response?.data?.message || "Something went wrong");
//             });
//     }
// }

/**
 * add refferal code action thunk
 * @param values
 * @returns
 */

// export const addRefferalCodeActionThunk = (values: TRefferalCodeDetailPayload): ThunkAction<void, {}, {}, AnyAction> => {
//     return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
//         dispatch(refferalCodeLoadingAction());
//         requestFromServer.addNewRefferalCode(values)
//             .then((res) => {
//                 dispatch(refferalCodeLoadedAction());
//                 dispatch(addRefferalCodeAction(res.data))
//                 successToast("Refferalcode added successfully");
//             })
//             .catch((error) => {
//                 dispatch(refferalCodeLoadedAction());
//                 errorToast(error?.response?.data?.message || "Something went wrong");
//             })
//     }
// }