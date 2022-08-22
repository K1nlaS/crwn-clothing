//Utils
import { useNavigate } from "react-router-dom";

//Styled Components
import {
  DirectoryItemContainter,
  Body,
  BackgroundImage
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {

  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainter onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainter>
  );
};

export default DirectoryItem;