import UsersActionTypeEnum from "./users.enum"
import { TUsersState, TUsersActionType } from "./users.types"

const INITIAL_STATE: TUsersState = {
    loading: false,
    usersData: { users: [], count: 0 },
    singleUsersData: []
}

const usersReducer = (state = INITIAL_STATE, action: TUsersActionType) => {
    switch (action.type) {
        case UsersActionTypeEnum.USERS_LOADING:
            return { ...state, loading: true }

        case UsersActionTypeEnum.USERS_LOADED:
            return { ...state, loading: false }

        case UsersActionTypeEnum.GET_ALL_USERS:
            return { ...state, loading: false, usersData: { users: action.payload?.customers, count: action?.payload?.count } }

        case UsersActionTypeEnum.GET_USER_BY_ID:
            return { ...state, loading: false, singleUsersData: action.payload }

        case UsersActionTypeEnum.DELETE_USER:
            {
                const userData = [...state?.usersData?.users]
                const userIndex = userData.findIndex((user) => user.user_id === action?.payload?.userId)
                if (userIndex > -1) {
                    userData.splice(userIndex, 1)
                }
                return { ...state, loading: false, usersData: { users: userData } }
            }

        case UsersActionTypeEnum.DO_EMPTY_SINGLE_USER_DATA:
            return { ...state, loading: false, singleUsersData: [] }
        default:
            return state;
    }
}
export default usersReducer;