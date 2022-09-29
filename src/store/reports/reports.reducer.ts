import ReportsActionTypeEnum from "./reports.enum";
import { TReportsActionType, TReportsState } from "./reports.types";


const INITIAL_STATE: TReportsState = {
    loading: false,
    userData: { users: [], count: 0 },
    driverData: { drivers: [] },
    vehicleData: { vehicles: [] },
};


const reportsReducer = (state = INITIAL_STATE, action: TReportsActionType): TReportsState => {
    switch (action.type) {
        case ReportsActionTypeEnum.REPORTS_LOADING:
            return { ...state, loading: true };

        case ReportsActionTypeEnum.REPORTS_LOADED:
            return { ...state, loading: false };

        case ReportsActionTypeEnum.GET_USER_REPORTS:
            return {
                ...state,
                loading: false,
                userData: action?.payload,
            };
        case ReportsActionTypeEnum.GET_DRIVER_REPORTS:
            return { ...state, loading: false, driverData: { drivers: action?.payload } };

        case ReportsActionTypeEnum.GET_VEHICLE_REPORTS:
            return { ...state, loading: false, vehicleData: { vehicles: action?.payload } };

        default:
            return state;
    }
}

export default reportsReducer;