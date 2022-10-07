import RolesAndPermissionTypeEnum from "./rolesAndPermissions.enum";
import {  TRolesAndPermissionActionTypes, TRolesAndPermissionsState, TRolesData, TRolesPayload } from "./rolesAndPermissions.types";

const ininitialState: TRolesAndPermissionsState = {
    loading: false,
    modulesData: {count:0, modules:[]},
    rolesData: {} as TRolesData,
    singleRolesData: {} as TRolesPayload,
};
const rolesAndPermissionReducer = (
    state = ininitialState,
    action: TRolesAndPermissionActionTypes
) => {
    switch (action.type) {
        case RolesAndPermissionTypeEnum.GET_ROLES_LOADING:
            return { ...state, loading: true };

        case RolesAndPermissionTypeEnum.GET_ROLES_LOADED:
            return { ...state, loading: false };

        case RolesAndPermissionTypeEnum.GET_ROLES_FAILED:
            return { ...state, loading: false };

        case RolesAndPermissionTypeEnum.GET_ROLES:
            return { ...state, loading: false, rolesData: action.payload };

        case RolesAndPermissionTypeEnum.GET_ROLES_BY_ID:
            return { ...state, loading: false, singleRolesData: action.payload?.role }

        case RolesAndPermissionTypeEnum.UPDATE_ROLES_STATUS:
            const updatedRoleStatus = [...state.rolesData.roles];
            const updateRolesStatusId = updatedRoleStatus.findIndex((role) => role.id === Number(action.payload.id))
            if (updateRolesStatusId > -1) {
                updatedRoleStatus[updateRolesStatusId]["isActive"] = action.payload.isActive;
            }
            return { ...state, loading: false, roleData: { ...state?.rolesData, roles: updatedRoleStatus } }

        case RolesAndPermissionTypeEnum.ADD_ROLES:
            const rolesList = [...state.rolesData?.roles]
            if (state?.rolesData?.roles.length < action.payload.itemsPerPage) {
                rolesList.push(action.payload.addRoles)
            }
            return { ...state, loading: false, rolesData: { ...state?.rolesData, roles: rolesList } }

        case RolesAndPermissionTypeEnum.UPDATE_ROLES_AND_PERMISSION:
            const roleId = action?.payload.id;
            const rolesLists = [...state?.rolesData?.roles];
            const roleIndex = rolesLists?.findIndex((role) => role?.id === Number(roleId));

            if (roleIndex > -1) {
                rolesLists[roleIndex] = { ...rolesLists[roleIndex], name: action?.payload.values.name, isActive: action?.payload.values.status };
            }
            return { ...state, loading: false, rolesData: { ...state?.rolesData, roles: rolesLists } }


        //-------------------- cases for module action---------------------------

        case RolesAndPermissionTypeEnum.GET_MODULES_LOADING:
            return { ...state, loading: true }

        case RolesAndPermissionTypeEnum.GET_MODULES_LOADED:
            return { ...state, loading: false }

        case RolesAndPermissionTypeEnum.GET_MODULES_FAILED:
            return { ...state, loading: false }

        case RolesAndPermissionTypeEnum.GET_MODULES:
            return { ...state, modulesData: action.payload }

        // case RolesAndPermissionTypeEnum.ADD_ROLES:
        //     const addRoles = [...state.rolesData?.roles];
        //     if (state.rolesData.roles.length < action.payload.itemsPerPage) {
        //         addRoles.push(action.payload.addRoles);
        //     }

        // return {
        //     ...state,
        //     loading: false,
        //     rolesData: { ...state?.rolesData, roles: addRoles },
        // };





        // case RolesAndPermissionTypeEnum.UPDATE_ROLES_AND_PERMISSION:
        //     const roleId = action.payload.id;
        //     const updatedRole = [...state.rolesData?.roles];
        //     const roleIndex = updatedRole?.findIndex(
        //         (role) => role.id === Number(roleId)
        //     );
        //     if (roleIndex > -1) {
        //         updatedRole[roleIndex].name = action.payload.values.name;
        //         updatedRole[roleIndex].isActive = action.payload.values.status;
        //     }
        //     return {
        //         ...state,
        //         loading: false,
        //         rolesData: {
        //             ...state?.rolesData,
        //             roles: updatedRole,
        //         },
        //     };



        // case RolesAndPermissionTypeEnum.DELETE_ROLES:
        //     const deleteRoleId = action.payload;
        //     const deleteRole = [...state.rolesData?.roles];
        //     const deleteRoleIndex = deleteRole?.findIndex(
        //         (role) => role.id === deleteRoleId
        //     );
        //     if (deleteRoleIndex > -1) {
        //         deleteRole.splice(deleteRoleIndex, 1);
        //     }

        //     return {
        //         ...state,
        //         loading: false,
        //         rolesData: {
        //             ...state?.rolesData,
        //             roles: deleteRole,
        //             count:
        //                 deleteRoleIndex > -1
        //                     ? state?.rolesData?.count - 1
        //                     : state?.rolesData?.count,
        //         },
        //     };



        // case RolesAndPermissionTypeEnum.UPDATE_ROLES_STATUS:
        //     const updatedRoleStatus = [...state.rolesData.roles];
        //     const updateRolesStatusId = updatedRoleStatus.findIndex(
        //         (roles) => roles.id === Number(action.payload.id)
        //     );
        //     if (updateRolesStatusId > -1) {
        //         updatedRoleStatus[updateRolesStatusId]["isActive"] =
        //             action.payload.isActive;
        //     }
        //     return {
        //         ...state,
        //         loading: false,
        //         rolesData: {
        //             ...state?.rolesData,
        //             roles: updatedRoleStatus,
        //         },
        //     };

        default:
            return state;
    }
};
export default rolesAndPermissionReducer;
