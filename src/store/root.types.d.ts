import { TAuthState } from "./auth/auth.types";
import { TReportsState } from "./reports/reports.types";
import { TRefferalCodeState } from "./refferalCodes/refferalCodes.types"
import { TRolesAndPermissionState } from "./roleAndPermission/rolesAndPermissions.types";
import { TPaginationState } from "./pagination/pagination.types"
import { TNotificationsState } from "./notifications/notifications.types"
import { TOrdersState } from "./orders/orders.types";
import { TDriversState } from "./drivers/drivers.types";
import { TCmsPagesState } from "./cms/cms.types";
import { TDriverHandBookState } from "./driverHandBook/driverHandBook.types";
import { TEmailTemplateState } from "./emailTemplate/emailTemplate.types";
import { TFAQsState } from "./faqs/FAQs.types";
import { TUsersState } from "./users/users.types";
import { TAppSettingsState } from "./appSettings/appSettings.types";
import { TTimeSlotState } from "./timesSlot/timeSlot.types";





type TRootState = {
  auth: TAuthState;
  reports: TReportsState;
  refferalCodes: TRefferalCodeState;
  rolesAndPermission: TRolesAndPermissionState;
  pagination: TPaginationState;
  notifications: TNotificationsState;
  orders: TOrdersState;
  drivers: TDriversState;
  cmsPages: TCmsPagesState;
  driverHandBook: TDriverHandBookState;
  emailTemplate: TEmailTemplateState;
  faqs: TFAQsState;
  users: TUsersState;
  appSetting: TAppSettingsState;
  timeSlot: TTimeSlotState;




};

export default TRootState;
