import { TRoleAndPermissionSingleData } from "../../store/roleAndPermission/rolesAndPermissions.types";
import { API } from "../../middleware/middleware";
// const API = axios.create({
//     baseURL: "http://localhost:3000",
// });


/**
 * Get roles API call
 * @param page
 * @param perPage
 * @param search
 * @returns
 */
const getRoles = (): Promise<any> => {
   
    return API.get("/roles");
};

/**
 * Get roles by id API call
 * @param id
 * @returns
 */
const getRolesById = (id: string): Promise<any> => {    
    return API.get("/roles/" + JSON.parse(id));
};

/**
 * Get modules API call
 * @returns
 */
const getModules = (): Promise<any> => {
    return API.get("/modules");
};

/**
 * Update roles API call
 * @param values
 * @param id
 * @returns
 */
const updateRoles = (values: TRoleAndPermissionSingleData, id: string): Promise<any> => {
    return API.put("/roles" + id, { ...values });
};

/**
 * Delete roles API integration
 * @param id
 * @returns
 */
const deleteRoles = (id: string): Promise<any> => {
    return API.delete("/roles/" + id);
};

/**
 * Add roles API integration
 * @param values
 * @returns
 */
const addRoles = (values: TRoleAndPermissionSingleData): Promise<any> => {
    return API.post("/roles", values);
};

/**
 * Update roles status API Integration
 * @param isActive
 * @param id
 * @returns
 */
const updateRolesStatus = (
    isActive: boolean,
    id: string | number
): Promise<any> => {
    return API.put("/roles/" + id, { isActive });
};
export {
    getRoles,
    addRoles,
    getModules,
    updateRoles,
    getRolesById,
    deleteRoles,
    updateRolesStatus,
};
