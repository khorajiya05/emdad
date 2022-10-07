import { action } from "typesafe-actions";
import RolesandPermissionTypeEnum from "./rolesAndPermissions.enum";
import { TModulesData, TRolesData, TRolesPayload } from "./rolesAndPermissions.types";

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
const getRoles = (payload: TRolesData) => {
  return action(RolesandPermissionTypeEnum.GET_ROLES, payload);
};

/**
 * Get role by id action creator
 * @returns
 */
const getRoleById = (payload: TRolesPayload) => {
  return action(RolesandPermissionTypeEnum.GET_ROLES_BY_ID, payload);
};



/**
 * Update Roles and Permission  Action Creator
 * @returns
 */
const updateRolesAndPermission = (payload: { values: TRolesPayload, id: string }) => {
  return action(RolesandPermissionTypeEnum.UPDATE_ROLES_AND_PERMISSION, payload);
};


// /**
//  * Delete role action creator
//  * @returns
//  */
// const deleteRole = (payload:number) => {
//     return action(RolesandPermissionTypeEnum.DELETE_ROLES,payload);
// };


/**
 * Add roles action creator
 * @returns
 */
const addRole = (payload: TRolesPayload) => {
  return action(RolesandPermissionTypeEnum.ADD_ROLES, payload);
};



/**
 * Update roles status  action creator
 * @returns
 */
const updateRolesStatus = (payload: {
  isActive: boolean;
  id: string | number;
}) => {
  return action(RolesandPermissionTypeEnum.UPDATE_ROLES_STATUS, payload);
};

/**
 * Get module pending
 * @returns
 */
const getMoulesLoading = () => {
  return action(RolesandPermissionTypeEnum.GET_MODULES_LOADING);
};

/**
 * Get modules success action creator
 * @param payload
 * @returns
 */
const getModulesLoaded = () => {
  return action(RolesandPermissionTypeEnum.GET_MODULES_LOADED);
};

/**
 * Get modules failed action creator
 * @returns
 */
const getModulesFailed = () => {
  return action(RolesandPermissionTypeEnum.GET_MODULES_FAILED);
};

/**
 * Get modules data action creator
 * @param payload 
 * @returns 
 */
const getModules = (payload: TModulesData) => {
  return action(RolesandPermissionTypeEnum.GET_MODULES, payload)
}


export {
  getRolesLoading,
  getRolesLoaded,
  getRolesFailed,
  getRoles,
  getRoleById,
  updateRolesStatus,
  addRole,
  updateRolesAndPermission,

  getMoulesLoading,
  getModulesLoaded,
  getModulesFailed,
  getModules,
};
