import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { timeSlotLoaded, getTimeSlot, timeSlotLoading } from "./timeSlot.action";
import { errorToast, successToast } from "../../components/toast/toast";
import * as requestFromServer from "../../services/timeSlot/timeSlotService";
import { TAddTimeSlotPayload, TEditTimeSlotPayload } from "./timeSlot.types";

/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/

/**
 * get time slot thunk
 * @returns
 */
export const getTimeSlotActionThunk = (
  search: string | null,
  page: number,
  perPage: number
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(timeSlotLoading());

    const getAsyncData = async () => {
      try {
        const response = await requestFromServer.getTimeSlotList(search, page, perPage);
        dispatch(getTimeSlot({ timeSlots: response.data?.data?.timeSlot, count: response.data?.data?.count }));
        dispatch(timeSlotLoaded());
      } catch (error: any) {
        dispatch(timeSlotLoaded());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      }
    };
    getAsyncData();
  };
};

/**
 * add time slot thunk
 * @param values
 * @returns
 */
export const addTimeSlotActionThunk = (values: TAddTimeSlotPayload, getAction?: Function): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(timeSlotLoading());
    requestFromServer.addTimeSlot(values)
      .then((response) => {
        dispatch(timeSlotLoaded());
        getAction && getAction();
        successToast(" Time slots added successfully.");
      })
      .catch((error) => {
        dispatch(timeSlotLoaded());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * edit time slot thunk
 * @param id
 * @param values
 * @returns
 */
export const editTimeSlotActionThunk = (
  id: number | null,
  values: TEditTimeSlotPayload,
  getAction?: Function
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(timeSlotLoading());
    requestFromServer.editTimeSlot(id, values)
      .then((response) => {
        dispatch(timeSlotLoaded());
        getAction && getAction();
        successToast("Time slot updated successfully.");
      })
      .catch((error) => {
        dispatch(timeSlotLoaded());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * delete time slot thunk
 * @param id
 * @returns
 */
export const deleteTimeSlotActionThunk = (id: number | string | null, getAction?: Function): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(timeSlotLoading())
    requestFromServer.deleteTimeSlot(id)
      .then(() => {
        dispatch(timeSlotLoaded());
        getAction && getAction();
        successToast("Time Slot deleted successfully");
      })
      .catch((error) => {
        dispatch(timeSlotLoaded());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};
