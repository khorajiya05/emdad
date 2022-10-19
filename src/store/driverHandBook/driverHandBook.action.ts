import { action } from "typesafe-actions";
import DriverHandBookActionTypeEnum from "./driverHandBook.enum";
import { TDriverHandBookDetail } from "./driverHandBook.types";


/**
 * driverhandbook loading action creator
 * @returns 
 */
const driverHandBookLoadingAction = () => {
    return action(DriverHandBookActionTypeEnum.DRIVERHANDBOOK_LOADING);
}

/**
 * driverhandbook loaded action creator
 * @returns 
 */
const driverHandBookLoadedAction = () => action(DriverHandBookActionTypeEnum.DRIVERHANDBOOK_LOADED);

/**
 * get driverhandbooks action creator
 * @param payload 
 * @returns 
 */
const getAllDriverHandBookAction = (payload: { driverHandBooks: TDriverHandBookDetail[]; count: number }) => action(DriverHandBookActionTypeEnum.GET_ALL_DRIVERHANDBOOK, payload);


/**
 * get driverhandbook by id action creator
 * @param payload 
 * @returns 
 */
const geTDriverHandBookByIdAction = (payload: any) => action(DriverHandBookActionTypeEnum.GET_DRIVERHANDBOOK_BY_ID, payload);

/**
 * update driverhandbook by id aciton creator
 * @param payload 
 * @returns 
 */
const updateDriverHandBookAction = (payload: TDriverHandBookDetail) => action(DriverHandBookActionTypeEnum.UPDATE_DRIVERHANDBOOK, payload);

/**
 * add new driverhandbook action creator
 * @param payload 
 * @returns 
 */
const addDriverHandBookAction = (payload: TDriverHandBookDetail) => action(DriverHandBookActionTypeEnum.ADD_NEW_DRIVERHANDBOOK, payload);
export {
    driverHandBookLoadedAction,
    driverHandBookLoadingAction,
    geTDriverHandBookByIdAction,
    getAllDriverHandBookAction,
    updateDriverHandBookAction,
    addDriverHandBookAction
}