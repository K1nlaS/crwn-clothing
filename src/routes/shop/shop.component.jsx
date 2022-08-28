//Utils
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

//Components
import CategoriesPreview from "../categoies-preview/categories-preview.component";
import Category from "../category/category.component";

//Redux
import { setCategoriesMap } from "../../store/categories/category.action";


const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;