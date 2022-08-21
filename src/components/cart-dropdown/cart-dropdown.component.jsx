//Utils
import "./cart-dropdown.styles.scss";

//Components
import Button from "../button/button.component";

const CartDropdown = () => {


  return (
    <div className="cart-dropdown-container">
      <div className="card-items" />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;