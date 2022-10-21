import { action } from "typesafe-actions";
import DriversActionTypeEnum from "./drivers.enum";
import { TDriverDetailsPayload, TDriverTimeSlotsPayload, TGetDriversPayload } from "./drivers.types";

/**
 * drivers loading action creator
 * @returns
 */
const driversLoadingAction = () => action(DriversActionTypeEnum.DRIVERS_LOADING);

/**
 * drivers loaded action creator
 * @returns
 */
const driversLoadedAction = () => action(DriversActionTypeEnum.DRIVERS_LOADED);

/**
 * get all drivers action creator
 * @param DriversList 
 * @returns 
 */
const getAllDriversAction = (DriversList: TGetDriversPayload) => action(DriversActionTypeEnum.GET_ALL_DRIVERS, DriversList);

/**
 * get driver by id action creator
 * @param payload
 * @returns
 */
const getDriverByIdAction = (payload: {
  driverId: string | number | null;
  singleDriverData: TDriverDetailsPayload;
}) => action(DriversActionTypeEnum.GET_DRIVER_BY_ID, payload);

/**
 * get timeslots of driver action creator
 * @param payload 
 * @returns 
 */
const getDriverTimeSlotsAction = (payload: TDriverTimeSlotsPayload) => action(DriversActionTypeEnum.GET_DRIVER_TIMESLOTS, payload)

export {
  driversLoadingAction,
  driversLoadedAction,
  getAllDriversAction,
  getDriverByIdAction,
  getDriverTimeSlotsAction,
};
