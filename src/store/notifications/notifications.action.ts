import { action } from 'typesafe-actions';
import NotificationsActionTypeEnum from './notifications.enum';
import { TNotificaiotnsPayload } from "./notifications.types";

//get notificatoins actions
export const getNotificationsPending = () => action(NotificationsActionTypeEnum.GET_NOTIFICATIONS_PENDING);
export const getNotificationsSuccess = (payload: TNotificaiotnsPayload) => action(NotificationsActionTypeEnum.GET_NOTIFICATIONS_SUCCESS, payload);
export const getNotificationsFailed = () => action(NotificationsActionTypeEnum.GET_NOTIFICATIONS_FAILED);

//delete notifications actions
export const deleteNotificationSuccess = (payload: { notificationIds: number[]; getAction?: Function; }) => action(NotificationsActionTypeEnum.DELETE_NOTIFICATION_SUCCESS, payload);
export const deleteNotificationPending = () => action(NotificationsActionTypeEnum.DELETE_NOTIFICATION_PENDING);
export const deleteNotificationFailed = () => action(NotificationsActionTypeEnum.DELETE_NOTIFICATION_FAILED);

//update notificatoins actions
export const updateNotificationSuccess = () => action(NotificationsActionTypeEnum.UPDATE_NOTIFICATION_SUCCESS);
export const updateNotificationFailed = () => action(NotificationsActionTypeEnum.UPDATE_NOTIFICATION_FAILED);
export const updateNotificationPending = () => action(NotificationsActionTypeEnum.UPDATE_NOTIFICATION_PENDING);
