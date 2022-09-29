import { TAuthState } from "./auth/auth.types";
import { TReportsState } from "./reports/reports.types";

type TRootState = {
  auth: TAuthState;
  reports: TReportsState;
};

export default TRootState;
