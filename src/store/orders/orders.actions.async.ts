import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { ordersLoadingAction, ordersLoadedAction, getOrderByIdAction, getOrderFuelAction, getOrderGasAction, cancelOrderAction, getRescheduleSlotOrderAction, rescheduleOrderAction } from "./orders.action";
import { errorToast, successToast } from "../../components/toast/toast";
import * as requestFromServer from "../../services/orders/ordersService";

/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/


/**
 * get orders action thunk
 * @param search
 * @param page
 * @param perPage
 * @param startAt
 * @param endAt
 * @param sort
 * @param sortBy
 * @param vendorName
 * @param driverName
 * @param orderStatus
 * @returns
 */
export const getOrdersActionThunk = (
  search: string | null,
  page: number,
  perPage: number,
  startAt: moment.Moment | null | undefined,
  endAt: moment.Moment | null | undefined,
  sort: string,
  sortBy: string | null,
  orderStatus: string[],
  orderType: number,
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(ordersLoadingAction());

    requestFromServer
      .getOrdersAPI(
        search,
        page,
        perPage,
        startAt,
        endAt,
        sort,
        sortBy,
        orderStatus,
        orderType
      )
      .then((response) => {
        if (orderType === 1) {
          dispatch(getOrderFuelAction(response?.data));
        } else {
          dispatch(getOrderGasAction(response?.data));
        }
      })
      .catch((error) => {
        dispatch(ordersLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};



/**
 * get order by id action thunk
 * @returns
 */
export const getOrderByIdActionThunk = (
  id: string | number | undefined,
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(ordersLoadingAction());
    requestFromServer
      .getOrderByIdAPI(id)
      .then((response) => {
        dispatch(getOrderByIdAction(response.data?.data));
        dispatch(ordersLoadedAction());
      })
      .catch((error) => {
        dispatch(ordersLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};




/**
 * cancel order action thunk
 * @param id
 * @returns
 */
export const cancelOrderActionThunk = (
  id: string | number,
  orderType: number
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(ordersLoadingAction());
    requestFromServer
      .cancelOrderAPI(id)
      .then((response) => {
        dispatch(cancelOrderAction({ orderType, id }));
        successToast("Order Cancelled successfully.");
      })
      .catch((error) => {
        dispatch(ordersLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * get reschedule Slot
 * @param vendorIds
 * @param date
 * @returns
 */
export const getRescheduleSlotOrderActionThunk = (
  vendorIds: (string | number)[],
  date: moment.Moment | undefined
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(ordersLoadingAction());
    requestFromServer
      .getRescheduleSlotOrderAPI(vendorIds, date)
      .then((response) => {
        dispatch(getRescheduleSlotOrderAction(response.data.timeSlot));
      })
      .catch((error) => {
        dispatch(ordersLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * reschedule order action thunk
 * @param orderId
 * @param timeSlotsId
 * @param scheduleDate
 * @param getOrders
 * @returns
 */
export const rescheduleOrderActionThunk = (
  orderId: string | number,
  timeSlotsId: string | number,
  scheduleDate: moment.Moment | undefined,
  getOrders: Function
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    // dispatch(ordersLoadingAction());
    requestFromServer
      .getRescheduleOrderAPI(orderId, timeSlotsId, scheduleDate)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(rescheduleOrderAction());
          successToast("Order Rescheduled successfully.");
          getOrders &&
            setTimeout(() => {
              getOrders();
            }, 1000);
        } else {
          dispatch(ordersLoadedAction());
          errorToast("Something went wrong");
        }
      })
      .catch((error) => {
        dispatch(ordersLoadedAction());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};
