import { getNotificationsSuccess, getNotificationsPending, getNotificationsFailed, deleteNotificationPending, deleteNotificationFailed, deleteNotificationSuccess, updateNotificationFailed, updateNotificationPending, updateNotificationSuccess } from './notifications.action';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as requestFromServer from "../../services/notifications/notificationsService"
import { errorToast, successToast } from '../../components/toast/toast';

/**
 * get notifications action thunk
 * @param page 
 * @param perPage 
 * @param search 
 * @param isAdmin 
 * @returns 
 */
export const getNotificationsActionThunk = (page: number, perPage: number, isAdmin: boolean, search?: string): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getNotificationsPending());
    requestFromServer.getNoficaiotns(page, perPage, isAdmin, search)
      .then((res) => {
        dispatch(getNotificationsSuccess(res.data))
      })
      .catch((error) => {
        errorToast(error?.response?.data?.message || "Something went wrong")
        dispatch(getNotificationsFailed());
      })
  }
}

export const deleteNotificationActionThunk = (
  notificationIds: number[],
  getAction: Function,
  setSelectedNotifications: React.Dispatch<React.SetStateAction<number[]>>,
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(deleteNotificationPending());

    requestFromServer
      .deleteNotification(notificationIds)
      .then((res) => {
        dispatch(deleteNotificationSuccess({ notificationIds, getAction }));
        successToast("Notification deleted successfully");
        setSelectedNotifications([])
        getAction();
      })
      .catch((err) => {
        dispatch(deleteNotificationFailed());
        errorToast(err?.response?.message?.data || "Something went wrong");
      });
  };
};

export const updateNotificationActionThunk = (
  notificationIds: (string | number)[],
  status: string,
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(updateNotificationPending);
    requestFromServer
      .updateNotification(notificationIds, status)
      .then((res) => {
        dispatch(
          updateNotificationSuccess()
        );
        successToast("Notification updated successfully");
      })
      .catch((err) => {
        dispatch(updateNotificationFailed());
        errorToast(err?.response?.message?.data || "Something went wrong");
      });
  };
};