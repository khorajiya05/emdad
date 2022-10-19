import { ActionType } from "typesafe-actions";
import * as actions from "./cms.action";

type TCmsPagesActionType = ActionType<typeof actions>;

type TCmsPageDetail = {
	id: string,
	nameEng: string,
	contentEng: string,
	nameArb: string,
	contentArb: string,
	key: string,
	userType: string,
	createdAt: string | null,
	updatedAt: string | null,
	deletedAt: string | null,
	createdBy: string | null,
	updatedBy: string | null
}

type TCmsPagePayload = {
	count: number;
	cmsPages: TCmsPageDetail[];
};

type TCmsPagesState = {
	cmsPageList: { cmsPages: TCmsPageDetail[], count: number };
	singleCmsPage: TCmsPageDetail;
	loading: boolean;
};


export { TCmsPagesActionType, TCmsPagesState, TCmsPagePayload, TCmsPageDetail };
