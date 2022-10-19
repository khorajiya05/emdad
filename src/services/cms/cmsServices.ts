import { API } from "../../middleware/middleware";

/**
 * Get cms pages api call
 * @param userType
 * @returns
 */
export const getCmsPages = (userType: string): Promise<any> => {
  return API.get("/cmsPages/", { params: { userType } });
};

/**
 * Get cms page by id api call
 * @param pageId
 * @returns
 */
export const getCmsPageById = (pageId?: string | number): Promise<any> => {
  return API.get("/cmsPages/" + pageId);
};

/**
 * Update cms page api call
 * @param contentEng
 * @param nameEng
 * @param pageId
 * @returns
 */
export const updateCmsPages = (contentEng: string, nameEng: string, pageId: string | number): Promise<any> => {
  return API.put("/cmsPages/" + pageId, { contentEng, nameEng });
};
