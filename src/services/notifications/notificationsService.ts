import { API } from "../../middleware/middleware";

export const getNoficaiotns = (page: number, perPage: number, isAdmin: boolean, search?: string): Promise<any> => {
    return API.get("/notification", {
        params: { page, perPage, isAdmin, search: search || undefined }
    })
}

export const deleteNotification = (notificationIds: number[]) => {
    return API.delete("/notification", { data: { notificationIds } });
};

export const updateNotification = (notificationIds: (string | number)[], status: string) => {
    return API.patch("/notifications/read", { readedOption: status, notificationIds, });
};