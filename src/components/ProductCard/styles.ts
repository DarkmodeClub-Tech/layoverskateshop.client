import styled, { CSSProperties } from "styled-components";

export interface TCardContainerStyles extends CSSProperties {}

export const CardContainer = styled.div<CSSProperties>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */

  background-color: white;
  opacity: 5;

  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "500px")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "500px")};

  border-radius: 10px;
  overflow: hidden;

  &:hover {
    box-shadow: 2px 4px 8px var(--grey-3);
  }
  /* figure {
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60%;
    overflow-y: hidden;

    img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;

      pointer-events: none;
    }
  } */
  .product-dectails {
    position: absolute;
    top: 65%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .product-name {
    /* position: absolute; */

    margin-left: 20px;
    margin-top: 10px;
    /* margin-top: 300px; */

    font-size: 1.3rem;
    font-weight: 500;

    color: var(--grey-0);
  }

  .product-description {
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    color: var(--grey-2);
  }

  .product-price {
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    color: var(--random-7);
  }
  .button-container {
    display: inline-flex;
    gap: 10px;
    margin-left: 20px;
  }

  .add-to-cart-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    outline: none;

    border: none;
    border-radius: 5px;

    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;

    padding: 10px;
    font-size: 0.9rem;

    transition: 1s;
    &:hover {
      background-color: var(--orange);
    }
  }
`;
