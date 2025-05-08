import { microcmsClient } from "../api/microcms.js";

export const getAllBlogs = async (queries = {}) => {
  try {
    const res = await microcmsClient.get({
      endpoint: import.meta.env.ENDPOINT,
      queries,
    });
    return res;
  } catch (err) {
    return null;
  }
};

export const getBlogsDetail = async (contentId, queries = {}) => {
  try {
    const res = await microcmsClient.getListDetail({
      endpoint: import.meta.env.ENDPOINT,
      contentId,
      queries,
    });
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};