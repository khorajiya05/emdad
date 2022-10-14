import OrdersActionTypeEnum from "./orders.enum";
import { TOrderByIdPayload, TOrdersActionType, TOrdersState } from "./orders.types";

const INITIAL_STATE: TOrdersState = {
  loading: false,
  orderId: "",
  orderById: {} as TOrderByIdPayload,
  orderFuelData: { orders: [], count: 0 },
  orderGasData: { orders: [], count: 0 },
  rescheduleTimeSlots: [],
};

const ordersReducer = (state = INITIAL_STATE, action: TOrdersActionType): TOrdersState => {
  switch (action.type) {
    case OrdersActionTypeEnum.ORDERS_LOADING:
      return { ...state, loading: true };

    case OrdersActionTypeEnum.ORDERS_LOADED:
      return { ...state, loading: false };

    case OrdersActionTypeEnum.GET_ORDER_ID:
      return { ...state, loading: false, orderId: action.payload };

    case OrdersActionTypeEnum.GET_ORDER_BY_ID:
      return { ...state, loading: false, orderById: action.payload };

    case OrdersActionTypeEnum.GET_ORDERS_FUEL:
      return { ...state, loading: false, orderFuelData: action.payload };

    case OrdersActionTypeEnum.GET_ORDERS_GAS:
      return { ...state, loading: false, orderGasData: action.payload };

    case OrdersActionTypeEnum.CANCEL_ORDER:
      if (action.payload?.orderType === 1) {
        const newOrders = state?.orderFuelData?.orders.filter((order) => String(order?.id) !== String(action.payload?.id))
        return { ...state, loading: false, orderFuelData: { orders: newOrders, count: newOrders?.length } };
      }
      if (action.payload?.orderType === 2) {
        const newOrders = state?.orderGasData?.orders.filter((order) => String(order?.id) !== String(action.payload?.id))
        return { ...state, loading: false, orderGasData: { orders: newOrders, count: newOrders?.length } };
      }
      return state;

    case OrdersActionTypeEnum.RESCHEDULE_TIME_SLOTS:
      return { ...state, loading: false, rescheduleTimeSlots: action.payload };

    case OrdersActionTypeEnum.RESCHEDULE_ORDER_UPDATE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default ordersReducer;
