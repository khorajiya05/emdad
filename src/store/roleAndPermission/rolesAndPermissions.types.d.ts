
type TModulesData = {
    count: number;
    modules: { id: number; name: string; parentId: number; child?: any[] }[];
};

type TRolesData = {
    count: number;
    roles: {
        createdAt: string;
        createdBy: string;
        deletedAt: string;
        id: number;
        isActive: boolean;
        name: string;
        updatedAt: string;
        updatedBy: string;
    }[];
};


type TRolesPayload = Partial<{
  id: string;
  isActive: boolean;
  name: string;
  permissions: {
    all: boolean;
    index: boolean;
    add: boolean;
    edit: boolean;
    view: boolean;
    delete: boolean;
    id?: number;
    module: { id: number; name: string; parentId: number; child?: any[] };
  }[];
  [];
}>;


type TRolesAndPermissionsState = {
    loading: boolean;
    modulesData: {
      count: number;
      modules: { id: number; name: string; parentId: number; child?: any[] }[];
    };
    rolesData: {
      count: number;
      roles: {
        createdAt: string;
        createdBy: string;
        deletedAt: string;
        id: number;
        isActive: boolean;
        name: string;
        updatedAt: string;
        updatedBy: string;
      }[];
    };
    
    singleRolesData: Partial<{
      id: string;
      isActive: boolean;
      name: string;
      permissions: {
        all: boolean;
        index: boolean;
        add: boolean;
        edit: boolean;
        view: boolean;
        delete: boolean;
        id?: number;
        module: { id: number; name: string; parentId: number; child?: any[] };
      }[];
      [];
    }>;
  };
type TRolesAndPermissionActionTypes = ActionType<typeof actions>;


export {
    TRolesAndPermissionsState,
    TRolesAndPermissionActionTypes,
    TModulesData,
    TRolesData,
    TRolesPayload
}