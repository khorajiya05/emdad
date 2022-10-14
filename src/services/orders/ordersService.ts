import moment from "moment";
import { API } from "../../middleware/middleware";

/**
 * get orders by id api call
 * @returns
 */
export const getOrderByIdAPI = (id: string | number | undefined): Promise<any> => {
  return API.get("/orders/" + id);
};

/**
 * get orders fuel api call
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
export const getOrdersAPI = (
  search: string | null,
  page: number,
  perPage: number,
  startAt: moment.Moment | null | undefined,
  endAt: moment.Moment | null | undefined,
  sort: string,
  sortBy: string | null,
  orderStatus: string[],
  orderType: number,
): Promise<any> => {
  return API.get("/orders", {
    params: {
      search,
      page,
      perPage,
      startAt: startAt
        ? moment(startAt)
          .utcOffset(0)
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .toISOString()
        : undefined,
      endAt: endAt ? moment(endAt).utc().endOf("day").toDate() : undefined,
      sort,
      sortBy,
      status: orderStatus,
      orderType: orderType,
    },
  });
};


/**
 * cancel order api
 * @param reason
 * @param status
 * @param id
 * @returns
 */
export const cancelOrderAPI = (id: string | number): Promise<any> => {
  return API.delete("/orders/" + id);
};

/**
 * get reschedule slots api
 * @param vendorIds
 * @param date
 * @returns
 */
export const getRescheduleSlotOrderAPI = (
  vendorIds: (string | number)[],
  date: moment.Moment | undefined
): Promise<any> => {
  return API.get("/timeslots/product/all", {
    params: { vendorIds, date: date ? moment(date).toDate() : undefined },
  });
};

/**
 * reschedule order api
 * @param orderId
 * @param timeSlotsId
 * @param scheduleDate
 * @returns
 */
export const getRescheduleOrderAPI = (
  orderId: string | number,
  timeSlotsId: string | number,
  scheduleDate: moment.Moment | undefined
): Promise<any> => {
  return API.patch("/orders/reschedule/" + orderId, {
    timeSlotsId,
    scheduleDate: scheduleDate ? moment(scheduleDate).toDate() : undefined,
  });
};
