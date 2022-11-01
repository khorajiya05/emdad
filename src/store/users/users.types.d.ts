import { ActionType } from 'typesafe-actions';
import * as actions from "./users.action";

type TUsersActionType = ActionType<typeof actions>;

type TUserDetails = {
    TotalAmountPaid: null | number;
    TotalOrders: number;
    user_country_code: string;
    user_created_at: string;
    user_email: null | string
    user_full_name: string;
    user_id: string
    user_is_active: boolean;
    user_mobile_number: number;
    user_user_type: string;
}

type TUserDetailsPayload = TUserDetails[]



type TUsersState = {
    loading: boolean;
    usersData: { users: TUserDetailsPayload, count: number };
    singleUsersData: TUserDetails[];
};


export {
    TUserDetailsPayload,
    TUsersState,
    TUsersActionType,
    TUserDetails
}