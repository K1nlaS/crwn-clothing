//Misc
import { Link } from "react-router-dom";

//Components
import ProductCard from "../product-card/product-card.component";

//Styled Components
import {
  Title,
  Preview,
  CategoryPreviewContainer
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {


  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`${title}`}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>

      <Preview>
        {
          products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;