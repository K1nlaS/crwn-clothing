/* eslint-disable no-unused-vars */
//Utils
import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {

  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  //Seeding new values for the shop data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};