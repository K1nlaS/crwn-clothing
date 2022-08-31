//Misc
import styled from "styled-components";

//Styled Components
import {
  BaseButton,
  GoogleSignInButton,
  Inverted
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${Inverted} {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    right: 0;
    width: 100%;
    height: 50%;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.span`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;