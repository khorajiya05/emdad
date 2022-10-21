import { action } from "typesafe-actions";

import { TUserDetails, TUserDetailsPayload } from "./users.types";
import UsersActionTypeEnum from "./users.enum";


/**
 * users loading action creator
 * @returns
 */
const usersLoadingAction = () =>
    action(UsersActionTypeEnum.USERS_LOADING);

/**
* users loaded action creator
* @returns
*/
const usersLoadedAction = () => action(UsersActionTypeEnum.USERS_LOADED);

/**
* get users action creator
* @returns
*/
const getAllUsersAction = (payload: TUserDetailsPayload) =>
    action(UsersActionTypeEnum.GET_ALL_USERS, payload);

/**
 * get user by id action creator
 * @param payload
 * @returns
 */
const getUserByIdAction = (payload: TUserDetails[]) => action(UsersActionTypeEnum.GET_USER_BY_ID, payload);


/**
 * delete user by id action creator
 * @param payload 
 * @returns 
 */
const deleteUserAction = (payload: {
    userId: string;
}) => {
    return action(UsersActionTypeEnum.DELETE_USER, payload);
};

/**
 * update user by id action creator
 * @param payload
 * @return
 */

const updateUserAction = (payload: TUserDetailsPayload) => {
    return action(UsersActionTypeEnum.UPDATE_USER, payload)
}

/**
 * add new user action creater
 * @param payload
 * 
 */

const addNewUserAction = (payload: TUserDetailsPayload) => {
    return action(UsersActionTypeEnum.ADD_NEW_USER, payload)
}

const doEmptySingleUserDataAction = () => {
    return action(UsersActionTypeEnum.DO_EMPTY_SINGLE_USER_DATA)
}

export {
    usersLoadingAction,
    usersLoadedAction,
    getAllUsersAction,
    getUserByIdAction,
    deleteUserAction,
    updateUserAction,
    addNewUserAction,
    doEmptySingleUserDataAction
}