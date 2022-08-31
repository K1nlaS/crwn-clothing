//Misc
import styled from 'styled-components';

export const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 25px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
  }
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;