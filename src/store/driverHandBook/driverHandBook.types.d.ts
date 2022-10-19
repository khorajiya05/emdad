import { ActionType } from "typesafe-actions";
import * as actions from "./driverHandBook.action";

type TDriverHandBookActionType = ActionType<typeof actions>;

type TDriverHandBookDetail = {
    id: number | string,
    userType: string,
    question: string,
    answer: string,
    language: string
}

type TDriverHandBookState = {
    loading: boolean;
    driverHandBookData: { driverHandBooks: TDriverHandBookDetail[]; count: number };
}

export {
    TDriverHandBookState,
    TDriverHandBookActionType,
    TDriverHandBookDetail
}