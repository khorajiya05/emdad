

type TRefferalCodeDetailPayload = {
    id: string,
    name: string,
    refferalCode: string,
    installBy:number | string,
    remainBenefit:number | string
}

type TRefferalCodeState = {
    loading: boolean;
    refferalCodeData: { refferalCodes: TRefferalCodeDetailPayload[] };
    singleRefferalCodeData: { refferalCode: TRefferalCodeDetailPayload }
}

type TRefferalCodeActionType = ActionType<typeof actoins>;

export {
    TRefferalCodeDetailPayload,
    TRefferalCodeState,
    TRefferalCodeActionType
}