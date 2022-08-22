//Utils
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Context
import { CartContext } from "../../contexts/cart.context";

//Components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

//Styled Components
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from "./cart-dropdown.styles";

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems >
        {
          cartItems.length
            ? (cartItems.map(item => <CartItem cartItem={item} key={item.id} />))
            : (
              <EmptyMessage>The cart is empty</EmptyMessage>
            )
        }


      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;