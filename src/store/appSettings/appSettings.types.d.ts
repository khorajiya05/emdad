import { ActionType } from 'typesafe-actions';
import * as actions from "./appSettings.action";

type TAppSettingActionType = ActionType<typeof actions>

type TAppSettingDetailType = {

    id: number | string,
    orderType: String | number,
    key: String,
    label: String,
    value: number | string,
    isActive: boolean,
    createdAt: string | null,
    updatedAt: string | null,
    deletedAt: string | null,
    createdBy: string | null,
    updatedBy: string | null

};

type TAppSettingsState = {
    loading: boolean,
    appSettingOrders: TAppSettingDetailType[]
    appSettingGeneral: TAppSettingDetailType[]
}

type TGetAppSettingsPayload = TAppSettingDetailType[];


export { TAppSettingActionType, TGetAppSettingsPayload, TAppSettingDetailType, TAppSettingsState };