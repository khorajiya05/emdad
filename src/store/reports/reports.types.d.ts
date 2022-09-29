import { ActionType } from "typesafe-actions";

import * as actions from "./reports.action";


type TReportsActionType = ActionType<typeof actions>;



type TUserDetails = {
    name: string;
    phone:string | number;
    email: string;
    totalOrders: string | number;
    date: string;
    status: boolean;
}[];

type TGetDriverReportsPayload = {
    make: string;
    model: string;
    numberPlate: string;
    vehicleFuelType: string;
    driverName: string;
    createdDate:string;
    status:string;
}[];

type TGetVehicleReportsPayload = {
    fullName: string;
    phone: string;
    email: string;
    postalCode: string;
    vehicleFuelType: string;
    createdDate: string;
    status: string;
}[];

type TGetOrderReportsPayload = {
    order_id: string;
    company_name: string;
    user_name: string;
    date: string;
    timeslot: string;
    vehicle_category: number;
    location: string;
    driver_name: string;
}[];

type TReportsState = {
    loading: boolean,
    userData: { users: TUserDetails, count: number },
    driverData:{drivers:TGetDriverReportsPayload},
    vehicleData:{vehicles:TGetVehicleReportsPayload}
};

export {
    TGetDriverReportsPayload, 
    TUserDetails, 
    TVehicleDetails, 
    TGetUserReportsPayload, 
    TReportsActionType, 
    TReportsState,
    TGetOrderReportsPayload,
    TGetVehicleReportsPayload
}