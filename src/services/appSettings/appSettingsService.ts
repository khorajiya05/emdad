import { API } from "../../middleware/middleware";
import { TAppSettingDetailType } from "../../store/appSettings/appSettings.types";

/**
 * get app settings api call
 * @returns
 */
export const getAppSettingsAPI = (): Promise<any> => {
  return API.get("/appsettings");
};

/**
 * update app settings api call
 * @returns
 */
export const updateAppSettingsAPI = (appSettings: { appSettings: Partial<TAppSettingDetailType>[] }): Promise<any> => {
  return API.patch("/appSettings/many", appSettings);
};
