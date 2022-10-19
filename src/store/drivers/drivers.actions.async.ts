import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import {
  driversLoadingAction,
  driversLoadedAction,
  getAllDriversAction,

  deleteDriverAction,
  getDriverByIdAction,
  getDriverTimeSlotsAction,
} from "./drivers.action";
import { errorToast, successToast } from "../../components/toast/toast";
import * as requestFromServer from "../../services/drivers/driversService";

/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/

/**
 * get all drivers thunk
 * @returns
 */
export const getAllDriversActionThunk = (
  search: string | null,
  page: number,
  perPage: number,
  startDate: moment.Moment | string | null,
  endDate: moment.Moment | string | null,
  status: boolean | null,
  sort?: string,
  sortBy?: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());

    requestFromServer
      .getDriversAPI(
        search,
        page,
        perPage,
        startDate,
        endDate,
        status,
        sort,
        sortBy
      )
      .then((response) => {
        dispatch(driversLoadedAction())
        dispatch(getAllDriversAction(response.data?.data));
      })
      .catch((error) => {
        dispatch(driversLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * delete driver action thunk
 * @param driverId 
 * @param getAction 
 * @returns 
 */
export const deleteDriverActionThunk = (
  driverId: string | number,
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer
      .deleteDriver(driverId)
      .then((res) => {
        dispatch(driversLoadedAction());
        dispatch(deleteDriverAction(driverId));
        successToast("Driver deleted successfully");
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

export const getDriverByIdActionThunk = (driverId: string | number | null): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer
      .getDriverById(driverId)
      .then((res) => {
        dispatch(driversLoadedAction());
        dispatch(getDriverByIdAction({ driverId, singleDriverData: res?.data?.data?.drivers[0] }));
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

/**
 * get timeslots of drivers by id action thunk
 * @param driverId 
 * @returns 
 */
export const getDriverTimeSlotsActionThunk = (driverId: string | number | null): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer.getDriverTimeslotsAPI(driverId)
      .then((res) => {
        dispatch(driversLoadedAction());
        dispatch(getDriverTimeSlotsAction(res.data?.data));
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  }
}
