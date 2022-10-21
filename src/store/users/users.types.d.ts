
type TUsersActionType = ActionType<typeof actions>;

type TUserDetails = {
    id: string;
    name: string;
    phone: string;
    email: string;
    status: string;
    totalOrders: number;
    password: string;
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