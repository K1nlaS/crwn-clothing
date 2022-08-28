//Utils
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIS_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIS_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);