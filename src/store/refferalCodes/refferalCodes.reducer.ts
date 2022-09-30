import RefferalCodeActionTypeEnum from './refferalCodes.enum';
import { TRefferalCodeActionType, TRefferalCodeDetailPayload, TRefferalCodeState } from "./refferalCodes.types"

const INITIAL_STATE: TRefferalCodeState = {
    loading: false,
    refferalCodeData: { refferalCodes: [] },
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    singleRefferalCodeData: { refferalCode: <TRefferalCodeDetailPayload>{} }
}
const refferalCodeReducer = (state = INITIAL_STATE, action: TRefferalCodeActionType) => {
    switch (action.type) {
        case RefferalCodeActionTypeEnum.REFFERALCODE_LOADING:
            return { ...state, loading: true }

        case RefferalCodeActionTypeEnum.REFFERALCODE_LOADED:
            return { ...state, loading: false }

        case RefferalCodeActionTypeEnum.GET_ALL_REFFERALCODE:
            return { ...state, loading: false, refferalCodeData: { refferalCodes: action.payload } }

        // case RefferalCodeActionTypeEnum.DELETE_REFFERALCODE:
        //     const refferalCodeData = [...state.refferalCodeData.refferalCodes]
        //     const refferalCodeId = refferalCodeData.findIndex((refferalCode) => refferalCode.id === action.payload);
        //     if (refferalCodeId > -1) {
        //         refferalCodeData.splice(refferalCodeId, 1);
        //     }
        //     return { ...state, loading: false, refferalCodeData: { refferalCodes: [...refferalCodeData] } }

        // case RefferalCodeActionTypeEnum.GET_REFFERALCODE_BY_ID:
        //     return { ...state, loading: false, singleRefferalCodeData: { refferalCode: action.payload } }

        // case RefferalCodeActionTypeEnum.UPDATE_REFFERALCODE:
        //     {
        //         const refferalCodeList = [...state.refferalCodeData.refferalCodes];
        //         const refferalCodeIndex = refferalCodeList.findIndex((refferalcode) => refferalcode.id === action.payload.id);
        //         if (refferalCodeIndex > -1) {
        //             refferalCodeList[refferalCodeIndex] = { ...action.payload };
        //         }
        //         return { ...state, loading: false, refferalCodeData: { refferalCodes: refferalCodeList } }
        //     }

        // case RefferalCodeActionTypeEnum.ADD_NEW_REFFERALCODE:
        //     const refferalCodeList = [...state.refferalCodeData.refferalCodes];
        //     refferalCodeList[refferalCodeList.length] = { ...action?.payload }
        //     return { ...state, loading: false, refferalCodeData: { refferalCodes: refferalCodeList } }

        default:
            return state;
    }
}

export default refferalCodeReducer;