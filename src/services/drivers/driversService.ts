import moment from "moment";
import { API } from "../../middleware/middleware";

/**
 * get drivers api call
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
 * @returns
 */
export const updateDriverStatus = (driverId: string | number, status: boolean): Promise<any> => {
  return API.put("/driver/driver/status/" + driverId, { status });
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
 * update driver api
 * @param driverId 
 * @param fullName 
 * @param mobileNumber 
 * @param email 
 * @param password 
 * @returns 
 */
export const updateDriverAPI = (userType: string, driverId: string | number | undefined, fullName: string, mobileNumber: string | number, email: string, password: string): Promise<any> => {
  return API.put("/driver/" + driverId, { userType, fullName, mobileNumber, email, password })
}

/**
 * Delete driver API call
 * @param driverId
 * @returns
 */
export const deleteDriver = (driverId: string | number): Promise<any> => {
  return API.delete("/driver/" + driverId);
};

/**
 * get timeslot by day api call
 * @param day 
 * @returns 
 */
export const getTimeslotByDayAPI = (day: number): Promise<any> => {
  return API.get("/timeSlots", { params: { day } });
}

/**
 * add new driver api call
 * @param fullName 
 * @param email 
 * @param countryCode 
 * @param mobileNumber 
 * @param password 
 * @param userType 
 * @param address 
 * @param vehicle 
 * @param location 
 * @param image 
 * @returns 
 */
export const addNewDriverAPI = (fullName: string, email: string, countryCode: string | number, mobileNumber: string | number, password: string, userType: string, address?: string, vehicle?: string | number, location?: string, image?: string): Promise<any> => {
  return API.post("/driver", { fullName, email, countryCode, mobileNumber, password, userType, address, vehicle, location, image })
}
