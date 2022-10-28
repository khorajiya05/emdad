import { API } from "../../middleware/middleware";
import { TAddTimeSlotPayload, TEditTimeSlotPayload } from "../../store/timesSlot/timeSlot.types";

/**
 * get time slot api call
 * @returns
 */
export const getTimeSlotList = (
  search: string | null,
  page: number,
  perPage: number
): Promise<any> => {
  return API.get("/timeSlots/getAll", { params: { search, page, perPage } });
};

/**
 * add time slot api call
 * @param values
 * @returns
 */
export const addTimeSlot = (values: TAddTimeSlotPayload): Promise<any> => {
  return API.post("/timeslots", { timeSlots: values?.map(value => ({ ...value, orderLimit: value?.orderLimit || 0 })) });
};

/**
 * edit time slot api call
 * @param id
 * @param values
 * @returns
 */

export const editTimeSlot = (id: number | null, values: TEditTimeSlotPayload): Promise<any> => {
  return API.put("/timeslots/" + id, { ...values });
};
/**
 * delete time slot api call
 * @param id
 * @returns
 */
export const deleteTimeSlot = (id: number | string | null): Promise<any> => {
  return API.delete("/timeslots/" + id);
};
