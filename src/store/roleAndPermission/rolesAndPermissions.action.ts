import { action } from "typesafe-actions";
import RolesandPermissionTypeEnum from "./rolesAndPermissions.enum";
import { TRoleAndPermissionSingleData, TRolesAndPermissionsPayload } from "./rolesAndPermissions.types";

/**
 * Get Roles  Action Creator
 * @returns
 */
const getRolesLoading = () => {
    return action(RolesandPermissionTypeEnum.GET_ROLES_LOADING);
};

/**
 * Get Roles Success Action Creator
 * @returns
 */
const getRolesLoaded = () => {
    return action(RolesandPermissionTypeEnum.GET_ROLES_LOADED);
};

/**
 * Get Roles Failed Action Creator
 * @returns
 */
const getRolesFailed = () => {
    return action(RolesandPermissionTypeEnum.GET_ROLES_FAILED);
};

/**
 * Get role action creator
 * @returns
 */
const getRoles = (payload: TRolesAndPermissionsPayload) => {
    return action(RolesandPermissionTypeEnum.GET_ROLES, payload);
};

/**
 * Get role by id action creator
 * @returns
 */
const getRoleById = (payload: TRoleAndPermissionSingleData) => {
    return action(RolesandPermissionTypeEnum.GET_ROLES_BY_ID, payload);
};


// /**
//  * Update Roles and Permission  Action Creator
//  * @returns
//  */
// const updateRolesAndPermission = (payload:TRoleAndPermissionSingleData) => {
//     return action(RolesandPermissionTypeEnum.UPDATE_ROLES_AND_PERMISSION,payload);
// };


// /**
//  * Delete role action creator
//  * @returns
//  */
// const deleteRole = (payload:number) => {
//     return action(RolesandPermissionTypeEnum.DELETE_ROLES,payload);
// };


// /**
//  * Add roles action creator
//  * @returns
//  */
// const addRole = (payload:TRoleAndPermissionSingleData) => {
//     return action(RolesandPermissionTypeEnum.ADD_ROLES,payload);
// };



// /**
//  * Update roles status  action creator
//  * @returns
//  */
// const updateRolesStatus = (payload:TRoleAndPermissionSingleData) => {
//     return action(RolesandPermissionTypeEnum.UPDATE_ROLES_STATUS,payload);
// };


export {
    getRolesLoading,
    getRolesLoaded,
    getRolesFailed,

    getRoles,
    // addRole,
    getRoleById,
    // deleteRole,
    // updateRolesAndPermission,
    // updateRolesStatus,
};
