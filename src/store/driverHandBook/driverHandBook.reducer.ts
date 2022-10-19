import DriverHandBookActionTypeEnum from './driverHandBook.enum';
import { TDriverHandBookActionType, TDriverHandBookState } from "./driverHandBook.types"

const INITIAL_STATE: TDriverHandBookState = {
    loading: false,
    driverHandBookData: { driverHandBooks: [], count: 0 },
}

const driverHandBookReducer = (state = INITIAL_STATE, action: TDriverHandBookActionType) => {

    switch (action.type) {

        case DriverHandBookActionTypeEnum.DRIVERHANDBOOK_LOADING:
            return { ...state, loading: true }

        case DriverHandBookActionTypeEnum.DRIVERHANDBOOK_LOADED:
            return { ...state, loading: false }

        case DriverHandBookActionTypeEnum.GET_ALL_DRIVERHANDBOOK:
            return { ...state, loading: false, driverHandBookData: { ...state?.driverHandBookData, driverHandBooks: action.payload?.driverHandBooks, count: action?.payload?.count } }

        case DriverHandBookActionTypeEnum.UPDATE_DRIVERHANDBOOK:
            const indexOfUpdated = state?.driverHandBookData?.driverHandBooks?.findIndex((book) => String(book?.id) === String(action.payload?.id))
            if (indexOfUpdated > -1) {
                state.driverHandBookData.driverHandBooks[indexOfUpdated] = action?.payload;
            }
            return { ...state, loading: false }

        case DriverHandBookActionTypeEnum.ADD_NEW_DRIVERHANDBOOK:
            return { ...state, loading: false }

        default:
            return state;
    }
}

export default driverHandBookReducer;