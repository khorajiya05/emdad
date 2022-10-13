
type TNotification = {
    id: number,
    fromId: string,
    titleEng: string,
    descriptionEng: string,
    titleArb: string,
    descriptionArb: string,
    toIds: string[],
    isAdmin: boolean,
    notificationType: number,
    toUserType: string,
    deletedBy: string[],
    readedBy: string[],
    createdAt: string,
    updatedAt: string,
    deletedAt: null
}

type TNotificaiotnsPayload = {
    notifications: TNotification[];
    count: number;
    unreadNotificationCount: number;
}

type TNotificationsState = {
    loading: boolean;
    notifications: {
        notifications: TNotification[]
        count: number,
        unreadNotificationCount: number
    }
}

export {
    TNotificaiotnsPayload,
    TNotificationsState,
    TNotification
}