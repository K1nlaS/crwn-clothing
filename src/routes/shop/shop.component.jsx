//Utils
import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";

//Components
import CategoriesPreview from "../categoies-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {



  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;