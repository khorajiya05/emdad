import { ActionType } from 'typesafe-actions';
import NotificationsActionTypeEnum from './notifications.enum';
import { TNotificationsState } from "./notifications.types";

const INITIAL_STATE: TNotificationsState = {
    loading: false,
    notifications: {
        notifications: [],
        count: 0,
        unreadNotificationCount: 0
    }
}

const notificationsReducer = (state = INITIAL_STATE, action: ActionType<any>) => {

    switch (action?.type) {
        case NotificationsActionTypeEnum.GET_NOTIFICATIONS_PENDING:
            return { ...state, loading: true };
        case NotificationsActionTypeEnum.GET_NOTIFICATIONS_SUCCESS:
            return { ...state, loading: false, notifications: action.payload }
        case NotificationsActionTypeEnum.GET_NOTIFICATIONS_FAILED:
            return { ...state, loading: false }

        case NotificationsActionTypeEnum.DELETE_NOTIFICATION_PENDING:
            return { ...state, loading: true };
        case NotificationsActionTypeEnum.DELETE_NOTIFICATION_SUCCESS:
            return { ...state, loading: false };
        case NotificationsActionTypeEnum?.DELETE_NOTIFICATION_FAILED:
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default notificationsReducer;