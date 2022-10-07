import { TAuthState } from "./auth/auth.types";
import { TReportsState } from "./reports/reports.types";
import {TRefferalCodeState} from "./refferalCodes/refferalCodes.types"
import { TRolesAndPermissionState } from "./roleAndPermission/rolesAndPermissions.types";

type TRootState = {
  auth: TAuthState;
  reports: TReportsState;
  refferalCodes:TRefferalCodeState;
  rolesAndPermission:TRolesAndPermissionState;
};

export default TRootState;
