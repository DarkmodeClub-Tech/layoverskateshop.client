import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: auto;

  .product-name {
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
  }

  .product-description {
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
  }

  .product-price {
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    color: blue;
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
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;

    padding: 5px;
    :hover {
    }
  }
`;
