//Utils
import { Route, Routes } from "react-router-dom";

//Components
import CategoriesPreview from "../categoies-preview/categories-preview.component";
import Category from "../category/category.component";

//Styled Components


const Shop = () => {



  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;