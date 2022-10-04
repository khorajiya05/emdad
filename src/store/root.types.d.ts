import { TAuthState } from "./auth/auth.types";
import { TReportsState } from "./reports/reports.types";
import {TRefferalCodeState} from "./refferalCodes/refferalCodes.types"
import { TRolesAndPermissionsState } from "./roleAndPermission/rolesAndPermissions.types";

type TRootState = {
  auth: TAuthState;
  reports: TReportsState;
  refferalCodes:TRefferalCodeState;
  rolesAndPermissions:TRolesAndPermissionsState;
};

export default TRootState;
