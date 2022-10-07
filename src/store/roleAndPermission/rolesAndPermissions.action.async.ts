import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { errorToast, successToast } from "../../components/toast/toast";
import { getRoles, getRolesFailed, getRoleById, getRolesLoading, getRolesLoaded, getMoulesLoading, getModules, getModulesLoaded, getModulesFailed, updateRolesStatus, addRole, updateRolesAndPermission } from "./rolesAndPermissions.action";
import * as requestFromServer from "../../services/rolesAndPermissions/rolesAndPermissionsService"
import { TRolesPayload } from "./rolesAndPermissions.types";


/**
* Get roles action thunk
 * @param page 
 * @param perPage 
 * @param search 
 * @returns 
 */
export const getRolesActionThunk = (
  page: number,
  perPage: number,
  search?: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {

    dispatch(getRolesLoading());
    return requestFromServer
      .getRoles(page, perPage, search)
      .then((res) => {
        dispatch(getRoles(res.data.data));
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
        dispatch(getRoleById(res.data.data));
        dispatch(getRolesLoaded());
      })
      .catch((error) => {
        dispatch(getRolesFailed());
        errorToast(error?.response?.data?.message || "Something went wrong");
      });
  };
};

/**
 * Update roles status action creator
 * @param isActive
 * @param id
 * @returns
 */
export const updateRolesStatusActionThunk = (
  isActive: boolean,
  id: string | number
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getRolesLoading());
    requestFromServer
      .updateRolesStatus(isActive, id)
      .then((res) => {
        dispatch(updateRolesStatus({ isActive, id }));
        successToast("Role status updated successfully");
      })
      .catch((err) => {
        dispatch(getRolesFailed());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

/**
* Add roles action thunk
* @param values
* @returns
*/
export const addRolesAndActionThunk = (
  values: TRolesPayload
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getRolesLoaded());

    return requestFromServer
      .addRoles(values)
      .then((res) => {
        dispatch(addRole(res.data));
        dispatch(getRolesLoaded());
        successToast("Role added successfully");
      })
      .catch((error) => {
        dispatch(getRolesLoaded());
        errorToast(error?.response?.data?.message || "Something went wrong");
      });
  };
};

/**
* Update roles and permission action thunk
* @param values
* @param id
* @returns
*/
export const updateRolesAndPermissionActionThunk = (
  values: TRolesPayload,
  id: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getRolesLoading());

    return requestFromServer
      .updateRoles(values, id)
      .then((res) => {
        if (res.status === 204) {
          dispatch(updateRolesAndPermission({ values, id }));
          successToast("Role updated successfully");
        }
      })
      .catch((error) => {
        dispatch(getRolesLoaded
          ());
        errorToast(error?.response?.data?.message || "Something went wrong.");
      });
  };
};

/**
 * get modules action thunk
 * 
 */
export const getModulesActionThunk = (): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getMoulesLoading());
    requestFromServer.getModules()
      .then((res) => {
        dispatch(getModules(res.data.data));
        dispatch(getModulesLoaded());
      })
      .catch((error) => {
        dispatch(getModulesFailed());
        errorToast(error?.response?.data?.message || "Something went wrong");
      });
  }
}

