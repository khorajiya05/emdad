import { action } from "typesafe-actions";
import AppSettingsActionTypeEnum from "./appSettings.enum";
import { TGetAppSettingsPayload } from "./appSettings.types";

/**
 * appSettings loading action creator
 * @returns
 */
const appSettingsLoading= () => action(AppSettingsActionTypeEnum.APP_SETTING_LOADING);

/**
 * appSettings loaded action creator
 * @returns
 */
const appSettingsLoaded = () => action(AppSettingsActionTypeEnum.APP_SETTING_LOADED);

/**
 * get appSettings action creator
 * @param appSettingsData
 * @returns
 */
const getAppSettings = (appSettingsData: TGetAppSettingsPayload) => action(AppSettingsActionTypeEnum.GET_APP_SETTING, appSettingsData);

/**
 * update appSettings action creator
 * @returns
 */
const updateAppSettings = () => action(AppSettingsActionTypeEnum.UPDATE_APP_SETTING);

export { appSettingsLoading, appSettingsLoaded, getAppSettings, updateAppSettings };
