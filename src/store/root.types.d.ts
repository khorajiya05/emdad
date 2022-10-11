import { TAuthState } from "./auth/auth.types";
import { TReportsState } from "./reports/reports.types";
import {TRefferalCodeState} from "./refferalCodes/refferalCodes.types"
import { TRolesAndPermissionState } from "./roleAndPermission/rolesAndPermissions.types";
import {TPaginationState} from "./pagination/pagination.types"

type TRootState = {
  auth: TAuthState;
  reports: TReportsState;
  refferalCodes:TRefferalCodeState;
  rolesAndPermission:TRolesAndPermissionState;
  pagination: TPaginationState;

};

export default TRootState;
