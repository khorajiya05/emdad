import { action } from "typesafe-actions";

import ReportsActionTypeEnum from "./reports.enum";

import { TGetDriverReportsPayload, TGetUserReportsPayload, TGetVehicleReportsPayload } from "./reports.types";


/**
 * reports loading action creator
 * @returns
 */
const reportsLoadingAction = () =>
  action(ReportsActionTypeEnum.REPORTS_LOADING);

/**
 * reports loaded action creator
 * @returns
 */
const reportsLoadedAction = () => action(ReportsActionTypeEnum.REPORTS_LOADED);

/**
 * get user reports action creator
 * @returns
 */
const getUserReportsAction = (payload: {
  users: TGetUserReportsPayload;
  count: number;
}) => action(ReportsActionTypeEnum.GET_USER_REPORTS, payload);

/**
 * get driver reports action creator
 * @returns
 */
const getDriverReportsAction = (payload: TGetDriverReportsPayload) => action(ReportsActionTypeEnum.GET_DRIVER_REPORTS, payload);


/**
 * get vehicle reports action creator
 * 
 * @returns
 */

const getVehicleReportsAction = (payload:TGetVehicleReportsPayload) => action(ReportsActionTypeEnum.GET_VEHICLE_REPORTS,payload);

export {
  reportsLoadingAction,
  reportsLoadedAction,
  getUserReportsAction,
  getDriverReportsAction,
  getVehicleReportsAction
};