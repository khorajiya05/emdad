import TimeSlotActionTypeEnum from "./timeSlot.enum";
import { TTimeSlotActionType, TTimeSlotState } from "./timeSlot.types";

const INITIAL_STATE: TTimeSlotState = {
  loading: false,
  timeSlotList: { count: 0, timeSlots: [] },
};

const timeSlotReducer = (state = INITIAL_STATE, action: TTimeSlotActionType): TTimeSlotState => {
  switch (action.type) {
    case TimeSlotActionTypeEnum.TIME_SLOT_LOADING:
      return { ...state, loading: true };

    case TimeSlotActionTypeEnum.TIME_SLOT_LOADED:
      return { ...state, loading: false };

    case TimeSlotActionTypeEnum.GET_TIME_SLOT:
      return { ...state, loading: false, timeSlotList: action.payload };

    default:
      return state;
  }
};

export default timeSlotReducer;