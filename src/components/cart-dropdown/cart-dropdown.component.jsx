//Misc
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useCallback } from "react";

//Redux
import { selectCartItems } from "../../store/cart/cart.selector";

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

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

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