//Utils
import { useContext } from "react";

//Contexts
import { CartContext } from "../../contexts/cart.context";

//Components
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

//Styled Components
import {
  ProductCardContainer,
  Footer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {

  const { id, name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;