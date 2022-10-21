import DriversActionTypeEnum from "./drivers.enum";
import { TDriverDetailsPayload, TDriversActionType, TDriversState, TDriverTimeSlotsPayload } from "./drivers.types";

const INITIAL_STATE: TDriversState = {
  loading: false,
  AllDriversList: { drivers: [], count: 0 },
  driverId: "",
  singleDriverData: { driver: {} as TDriverDetailsPayload, timeSlots: {} as TDriverTimeSlotsPayload }
};

const driversReducer = (state = INITIAL_STATE, action: TDriversActionType): TDriversState => {
  switch (action.type) {
    case DriversActionTypeEnum.DRIVERS_LOADING:
      return { ...state, loading: true };

    case DriversActionTypeEnum.DRIVERS_LOADED:
      return { ...state, loading: false };

    case DriversActionTypeEnum.GET_ALL_DRIVERS:
      return { ...state, loading: false, singleDriverData: { driver: {} as TDriverDetailsPayload, timeSlots: {} as TDriverTimeSlotsPayload }, AllDriversList: { drivers: action.payload?.drivers, count: action?.payload?.count } };

    case DriversActionTypeEnum.GET_DRIVER_BY_ID:
      if (action?.payload?.driverId === action?.payload?.singleDriverData?.driver?.id) {
        return { ...state, loading: false, singleDriverData: { ...state?.singleDriverData, driver: action?.payload?.singleDriverData }, };
      }
      return state;

    case DriversActionTypeEnum.GET_DRIVER_TIMESLOTS:
      return { ...state, loading: false, singleDriverData: { ...state?.singleDriverData, timeSlots: action?.payload } }

    default:
      return state;
  }
};

export default driversReducer;
