import AppSettingsActionTypeEnum from "./appSettings.enum";
import { TAppSettingActionType, TAppSettingDetailType, TAppSettingsState } from "./appSettings.types";

const INITIAL_STATE: TAppSettingsState = {
    loading: false,
    appSettingOrders: [],
    appSettingGeneral: []
};

const appSettingsReducer = (state = INITIAL_STATE, action: TAppSettingActionType): TAppSettingsState => {
    switch (action.type) {
        case AppSettingsActionTypeEnum.APP_SETTING_LOADING:
            return { ...state, loading: true };

        case AppSettingsActionTypeEnum.APP_SETTING_LOADED:
            return { ...state, loading: false };

        case AppSettingsActionTypeEnum.GET_APP_SETTING:
            return {
                ...state,
                loading: false,
                appSettingOrders: (action.payload || []).filter((fuel) => fuel.orderType === 1 || fuel.orderType === 2),
                appSettingGeneral: (action.payload || []).filter((fuel) => fuel.orderType === null),
            };

        case AppSettingsActionTypeEnum.UPDATE_APP_SETTING:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default appSettingsReducer;
