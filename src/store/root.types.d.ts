import { TAuthState } from "./auth/auth.types";
import { TReportsState } from "./reports/reports.types";
import {TRefferalCodeState} from "./refferalCodes/refferalCodes.types"

type TRootState = {
  auth: TAuthState;
  reports: TReportsState;
  refferalCodes:TRefferalCodeState;
};

export default TRootState;
