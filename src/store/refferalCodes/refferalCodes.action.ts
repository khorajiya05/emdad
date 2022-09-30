import { action } from "typesafe-actions";
import RefferalCodeActionTypeEnum from "./refferalCodes.enum";
import { TRefferalCodeDetailPayload } from "./refferalCodes.types";


/**
 * refferalcode loading action creator
 * @returns 
 */
const refferalCodeLoadingAction = () =>{
    return action(RefferalCodeActionTypeEnum.REFFERALCODE_LOADING);
}

/**
 * refferalcode loaded action creator
 * @returns 
 */
const refferalCodeLoadedAction = () => action(RefferalCodeActionTypeEnum.REFFERALCODE_LOADED);

/**
 * get refferalcodes action creator
 * @param payload 
 * @returns 
 */
const getAllRefferalCodeAction = (payload:TRefferalCodeDetailPayload[]) => action(RefferalCodeActionTypeEnum.GET_ALL_REFFERALCODE,payload);


/**
 * get refferalcode by id action creator
 * @param payload 
 * @returns 
 */
const getRefferalCodeByIdAction = (payload:TRefferalCodeDetailPayload) => action(RefferalCodeActionTypeEnum.GET_REFFERALCODE_BY_ID,payload);


/**
 * delete refferalcode by id action creator
 * @param payload 
 * @returns 
 */
const deleteRefferalCodeAction = (payload:string) => action(RefferalCodeActionTypeEnum.DELETE_REFFERALCODE,payload)


/**
 * update refferalcode by id aciton creator
 * @param payload 
 * @returns 
 */
const updateRefferalCodeAction = (payload:TRefferalCodeDetailPayload)=>action(RefferalCodeActionTypeEnum.UPDATE_REFFERALCODE,payload);

/**
 * add new refferalcode action creator
 * @param payload 
 * @returns 
 */
const addRefferalCodeAction = (payload:TRefferalCodeDetailPayload) => action(RefferalCodeActionTypeEnum.ADD_NEW_REFFERALCODE,payload);
export {
    refferalCodeLoadedAction,
    refferalCodeLoadingAction,
    getRefferalCodeByIdAction,
    getAllRefferalCodeAction,
    deleteRefferalCodeAction,
    updateRefferalCodeAction,
    addRefferalCodeAction
}