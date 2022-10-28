import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { appSettingsLoading, appSettingsLoaded, getAppSettings, updateAppSettings } from "./appSettings.action";
import * as requestFromServer from "../../services/appSettings/appSettingsService";
import { errorToast, successToast } from "../../components/toast/toast";
import { TAppSettingDetailType, TGetAppSettingsPayload } from "./appSettings.types";

/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/

/**
 * get app settings thunk
 * @returns
 */
export const getAppSettingsDataActionThunk = (): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(appSettingsLoading());

    requestFromServer
      .getAppSettingsAPI()
      .then((response) => {
        dispatch(appSettingsLoaded());
        dispatch(getAppSettings(response.data?.data?.settings));
      })
      .catch((error) => {
        dispatch(appSettingsLoaded());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};

/**
 * update app settings thunk
 * @returns
 */
export const updateAppSettingsDataActionThunk = (
  appSettings: { appSettings: Partial<TAppSettingDetailType>[] }
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(appSettingsLoading());

    requestFromServer
      .updateAppSettingsAPI(appSettings)
      .then(() => {
        dispatch(appSettingsLoaded());
        dispatch(updateAppSettings());
        successToast("Settings updated successfully.");
      })
      .catch((error) => {
        dispatch(appSettingsLoaded());
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("Something went wrong.");
        }
      });
  };
};
