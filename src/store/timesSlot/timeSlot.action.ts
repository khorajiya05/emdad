import { action } from "typesafe-actions";
import TimeSlotActionTypeEnum from "./timeSlot.enum";
import { TGetTimeSlotPayload } from "./timeSlot.types";

/**
 * timeSlot loading action creator
 * @returns
 */
const timeSlotLoading = () => action(TimeSlotActionTypeEnum.TIME_SLOT_LOADING);

/**
 * timeSlot loaded action creator
 * @returns
 */
const timeSlotLoaded = () => action(TimeSlotActionTypeEnum.TIME_SLOT_LOADED);

/**
 * get all slot action creator
 * @param timeSlotList
 * @returns
 */
const getTimeSlot = (timeSlotList: TGetTimeSlotPayload) =>
  action(TimeSlotActionTypeEnum.GET_TIME_SLOT, timeSlotList);

/**
 * delete time slot action creator
 * @returns
 */

export { timeSlotLoading, timeSlotLoaded, getTimeSlot };
