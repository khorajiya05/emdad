import { ActionType } from "typesafe-actions";
import * as actions from "./timeSlot.action";

type TTimeSlotState = {
  loading: boolean;
  timeSlotList: {
    count: number;
    timeSlots: {
      id: number | null;
      startTime: string;
      endTime: string;
      orderLimit: number;
    }[];
  };
};

type TGetTimeSlotPayload = {
  count: number;
  timeSlots: {
    id: number | null;
    startTime: string;
    endTime: string;
    orderLimit: number;
  }[];
};

type TAddTimeSlotPayload = {
  startTime: string;
  endTime: string;
  orderLimit: number | string
}[];

type TEditTimeSlotPayload = {
  startTime: string;
  endTime: string;
  orderLimit: number;
};

type TTimeSlotActionType = ActionType<typeof actions>;

export {
  TTimeSlotState,
  TGetTimeSlotPayload,
  TAddTimeSlotPayload,
  TEditTimeSlotPayload,
  TTimeSlotActionType,
};
