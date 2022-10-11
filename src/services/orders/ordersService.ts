import { API } from "../reports/reportsService";


export const getOrdersFuelAPI = (): Promise<any> => {
    return API.get("/orders")
}
