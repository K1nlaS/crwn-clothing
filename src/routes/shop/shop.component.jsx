//Utils
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

//Components
import CategoriesPreview from "../categoies-preview/categories-preview.component";
import Category from "../category/category.component";

//Redux
import { fetchCategoriesAsync } from "../../store/categories/category.action";


const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;