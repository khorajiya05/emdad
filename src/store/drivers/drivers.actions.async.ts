import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { driversLoadingAction, driversLoadedAction, getAllDriversAction, getDriverByIdAction, getDriverTimeSlotsAction, getTimeslotByDayAction } from "./drivers.action";
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
export const deleteDriverActionThunk = (driverId: string | number, getAction?: Function): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer
      .deleteDriver(driverId)
      .then((res) => {
        dispatch(driversLoadedAction());
        getAction && getAction();
        successToast("Driver deleted successfully");
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  };
};

/**
 * get deriver by id action thunk
 * @param driverId 
 * @returns 
 */
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
 * update driver status acton thynk
 * @param driverId 
 * @param status 
 * @returns 
 */
export const updateStatusOfDriverActionThunk = (driverId: string | number, status: boolean, fetchData?: Function): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer.updateDriverStatus(driverId, status)
      .then((res) => {
        fetchData && fetchData();
        dispatch(driversLoadedAction());
        successToast(("driver status updated successfully"));
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });

  }
}

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

/**
 * update driver action thunk
 */

export const updateDriverActionthunk = (userType: string, driverId: string | number | undefined, fullName: string, mobileNumber: string | number, email: string, password: string, getAction?: Function) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer.updateDriverAPI(userType, driverId, fullName, mobileNumber, email, password)
      .then((res) => {
        dispatch(driversLoadedAction());
        getAction && getAction();
        successToast(("driver updated successfully"));
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  }
}

/**
 * add new Driver action thunk
 * @param fullName 
 * @param email 
 * @param countryCode 
 * @param mobileNumber 
 * @param password 
 * @param userType 
 * @param getAction 
 * @param address 
 * @param vehicle 
 * @param location 
 * @param image 
 * @returns 
 */
export const addNewDriverActionThunk = (fullName: string, email: string, countryCode: string | number, mobileNumber: string | number, password: string, userType: string, getAction?: Function, address?: string, vehicle?: string | number, location?: string, image?: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer.addNewDriverAPI(fullName, email, countryCode, mobileNumber, password, userType, address, vehicle, location, image)
      .then((res) => {
        dispatch(driversLoadedAction());
        getAction && getAction();
        successToast(("driver added successfully"));
      })
      .catch((err) => {
        dispatch(driversLoadedAction());
        errorToast(err?.response?.data?.message || "Something went wrong");
      });
  }
}

export const getTimeslotByDayActionThunk = (day: number) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(driversLoadingAction());
    requestFromServer.getTimeslotByDayAPI(day)
      .then((res) => {
        dispatch(getTimeslotByDayAction(res.data?.data?.time));
        dispatch(driversLoadedAction());
      })
      .catch((error) => {
        dispatch(driversLoadedAction());
        errorToast(error?.response?.data?.message || "something went wrong");
      })
  }
}
