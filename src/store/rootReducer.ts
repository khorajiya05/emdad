import { combineReducers, CombinedState } from "redux";
import { Reducer } from "react";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import reportsReducer from "./reports/reports.reducer";
import authReducer from "./auth/auth.reducer";
import refferalCodeReducer from "./refferalCodes/refferalCodes.reducer";
import rolesAndPermissionReducer from "./roleAndPermission/rolesAndPermissions.reducer";
import paginationReducer from "./pagination/pagination.reducer";
import notificationsReducer from "./notifications/notifications.reducer";
import orderReducer from "./orders/orders.reducer"


const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  auth: authReducer,
  reports: reportsReducer,
  refferalCodes: refferalCodeReducer,
  rolesAndPermission: rolesAndPermissionReducer,
  pagination: paginationReducer,
  notifications: notificationsReducer,
  orders: orderReducer,
});
export default reducers;
