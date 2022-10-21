import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import * as requestFromServer from "../../services/users/userService"

import {
    usersLoadingAction,
    usersLoadedAction,
    getAllUsersAction,
    getUserByIdAction,
    deleteUserAction,
    updateUserAction,
} from "./users.action"
import { errorToast, successToast } from "../../components/toast/toast";
import { TUserDetails } from "./users.types";


/**
 * get users thunk
 * @returns
 */

export const getAllUsersActionThunk = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

        dispatch(usersLoadingAction());
        requestFromServer.getAllUsers()
            .then(res => {
                dispatch(usersLoadedAction());
                dispatch(getAllUsersAction(res.data));
            })
            .catch((error) => {
                dispatch(usersLoadedAction());
                if (error.response && error.response.data) {
                    errorToast(error.response.data.message);
                } else {
                    errorToast("something went wrong");
                }
            })
    }
}

/**
 * get deriver by id thunk
 * @param userId 
 * @returns 
 */

export const getUserByIdActionThunk = (userId: string) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(usersLoadingAction());
        requestFromServer.getUserById(userId)
            .then((res) => {

                dispatch(usersLoadedAction());
                dispatch(getUserByIdAction([res.data]));
            })
            .catch((error) => {
                dispatch(usersLoadedAction());
                errorToast(error?.message || "Something went wrong");
            })
    }
}

/**
 * delete driver by id thunk
 * @returns
 * @param
 */

export const deleteUserActionThunk = (userId: string) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(usersLoadingAction());
        requestFromServer.deleteUserById(userId)
            .then((res) => {
                dispatch(usersLoadedAction());
                dispatch(deleteUserAction({ userId }));
                successToast("User deleted successfully");
            })
            .catch((err) => {
                dispatch(usersLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });

    }
}

/**
 * update driver thunk
 * @returns
 * @param
 */

export const updateUserActionThunk = (userId: string, value: any) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(usersLoadingAction());
        requestFromServer.updateUserById(userId, value)
            .then((res) => {
                dispatch(usersLoadedAction());
                dispatch(updateUserAction(res.data))
                successToast("User updated successfully")
            })
            .catch((err) => {
                dispatch(usersLoadedAction());
                errorToast(err?.response?.data?.message || "Something went wrong");
            });
    }
}

/**
 * add new driver thunk
 * @param value 
 * @returns 
 */

export const addNewUserActionThunk = (value: TUserDetails) => {

    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(usersLoadingAction());
        requestFromServer.addNewUser(value)
            .then((res) => {
                dispatch(usersLoadedAction());
                successToast("User added successfully");
            })
            .catch((error) => {
                dispatch(usersLoadedAction());
                errorToast(error?.response?.data?.message || "Something went wrong");
            })

    }
}