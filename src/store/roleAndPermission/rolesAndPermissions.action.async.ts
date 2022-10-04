import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { errorToast } from "../../components/toast/toast";
import { getRoles, getRolesFailed, getRoleById, getRolesLoading, getRolesLoaded } from "./rolesAndPermissions.action";
import * as requestFromServer from "../../services/rolesAndPermissions/rolesAndPermissionsService"

export const getRolesActionThunk = ( 
): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

        dispatch(getRolesLoading());
        return requestFromServer
            .getRoles()
            .then((res) => {
                console.log(res.data);
                dispatch(getRoles(res.data));
                dispatch(getRolesLoaded());
            })
            .catch((error) => {
                dispatch(getRolesFailed());
                errorToast(error?.response?.data?.message || "Something went wrong");
            });
    };
};

/**
 * Get role by id action thunk
 * @param id
 * @returns
 */
export const getRoleByIdActionThunk = (
    id: string
): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(getRolesLoading());
        return requestFromServer
            .getRolesById(id)
            .then((res) => {                
                dispatch(getRoleById(res.data));
                dispatch(getRolesLoaded());
            })
            .catch((error) => {
                dispatch(getRolesFailed());
                errorToast(error?.response?.data?.message || "Something went wrong");
            });
    };
};