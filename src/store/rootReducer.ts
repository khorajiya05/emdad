import { combineReducers, CombinedState } from "redux";
import { Reducer } from "react";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import reportsReducer from "./reports/reports.reducer";
import authReducer from "./auth/auth.reducer";
import refferalCodeReducer from "./refferalCodes/refferalCodes.reducer";


const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  auth: authReducer,
  reports: reportsReducer,
  refferalCodes: refferalCodeReducer,
});
export default reducers;
