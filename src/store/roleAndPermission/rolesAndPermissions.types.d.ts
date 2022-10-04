type TRoleAndPermissionSingleData = {
    id: number,
    uuid: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    createdBy: string,
    updatedBy: string,
    deletedAt: string,
    isActive: boolean
    permissions: {
        id: number,
        all: boolean,
        index: boolean,
        add: boolean,
        edit: boolean,
        delete: boolean,
        view: boolean,
        module: {
            id: number,
            name: string,
            parentId: number
            child?: any[]
        }
    }[]
}

type TRolesAndPermissionsPayload = TRoleAndPermissionSingleData[];

type TRolesAndPermissionsState = {
    loading:boolean;
    rolesData:TRolesAndPermissionsPayload;
    singleRoleData:TRoleAndPermissionSingleData;
}

type TRolesAndPermissionActionTypes = ActionType<typeof actions>;


export {
    TRoleAndPermissionSingleData,
    TRolesAndPermissionsPayload,
    TRolesAndPermissionsState,
    TRolesAndPermissionActionTypes
}