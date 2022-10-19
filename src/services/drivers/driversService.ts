import moment from "moment";
import { API } from "../../middleware/middleware";





/**
 * get vendors drivers api call
 * @param search
 * @param page
 * @param perPage
 * @returns
 */
export const getDriversAPI = (
  search: string | null,
  page: number,
  perPage: number,
  startDate: moment.Moment | string | null,
  endDate: moment.Moment | string | null,
  status: boolean | null,
  sort?: string,
  sortBy?: string
): Promise<any> => {
  return API.get("/driver", {
    params: {
      search,
      page,
      perPage,
      startAt: startDate ? moment(startDate).utcOffset(0).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString() : null,
      endAt: endDate ? moment(endDate).utc().endOf("day").toDate() : null,
      status,
      sortOrder: sort,
      sortField: sortBy,
    },
  });
};


/**
 * update driver status api call
 * @param isActive
 * @param id
 * @returns
 */
export const updateDriverStatus = (
  isActive: boolean,
  id: string | number
): Promise<any> => {
  return API.put("/users/" + id, { isActive });
};

/**
 * update driver approval api call
 * @param id
 * @param status
 * @returns
 */
export const updateDriverApproval = (id: string | number, status: number) => {
  return API.patch("/users/status-change/", {
    status,
    userId: id,
    userType: "driver",
  });
};

/**
 * get driver by id api call
 * @param driverId
 * @returns
 */
export const getDriverById = (driverId: string | number | null): Promise<any> => {
  return API.get("driver/", { params: { driverId } });
};

/**
 * get timeslots of driver by id api call
 * @param driverId
 * @returns
 */
export const getDriverTimeslotsAPI = (driverId: string | number | null): Promise<any> => {
  return API.get("/driver/assignTime/", { params: { id: driverId } })
}

/**
 * get driver fuel delivery orders list
 * @param search
 * @param page
 * @param perPage
 * @returns
 */
export const getDriverOrdersFuelAPI = (
  driverId: string,
  search: string | null,
  page: number,
  perPage: number,
  orderType: number,
  startDate: moment.Moment | string,
  endDate: moment.Moment | string,
  customerName: string | number,
  ordersStatus: string | number,
  sort: string,
  sortBy: string,
  categoryId?: string
): Promise<any> => {
  return API.get("/drivers/" + driverId + "/orders", {
    params: {
      orderType,
      search,
      page,
      perPage,
      startAt: startDate || undefined,
      endAt: endDate || undefined,
      sort,
      sortBy,
      customerId: customerName || undefined,
      status: ordersStatus === "All" ? undefined : ordersStatus,
      categoryId: categoryId || undefined,
    },
  });
};

/**
 * get driver propane tank orders list
 * @param search
 * @param page
 * @param perPage
 * @returns
 */
export const getDriverOrdersTankAPI = (
  search: string | null,
  page: number,
  perPage: number
): Promise<any> => {
  return API.get("/mocky", {
    params: { type: "ordersTank", search, page, perPage },
  });
};

/**
 *  get driver completed orders list
 * @param search
 * @param page
 * @param perPage
 * @returns
 */
export const getDriverCompletedOrdersAPI = (
  search: string | null,
  page: number,
  perPage: number,
  sort: string,
  sortBy: string | null,
  vendorId: string | number | null,
  driverId: string | number,
  status: string[]
): Promise<any> => {
  return API.get("/orders", {
    params: { search, page, perPage, sort, sortBy, vendorId, driverId, status },
  });
};


/**
 * get all freelance drivers
 * @returns
 */
export const getAllFreelanceDriversAPI = (
  isFreelancer: boolean,
  isFilters: boolean
) => {
  return API.get("drivers/all/options", {
    params: { isFreelancer, isFilters },
  });
};

/**
 * Delete driver API call
 * @param driverId
 * @returns
 */
export const deleteDriver = (driverId: string | number) => {
  return API.delete("/driver/" + driverId);
};

/**
 * get freelance drivers payment status list api call
 * @param page
 * @param perPage
 * @param search
 * @param paymentStatus
 * @returns
 */
export const getFreelanceDriversPaymentAPI = (
  search: string | number | null,
  page: number,
  perPage: number,
  paymentStatus: string | number | null
): Promise<any> => {
  return API.get("/drivers/freelance/payment", {
    params: { search, page, perPage, paymentStatus },
  });
};

export const getDriverLocationAPI = (driverId: string): Promise<any> => {
  return API.get("/drivers/location/" + driverId);
};
