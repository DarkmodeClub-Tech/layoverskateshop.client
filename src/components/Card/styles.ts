import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;

  width: 100%;
  height: auto;

  img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .product-name {
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;

    font-size: 1.3rem;
    font-weight: 500;
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
    color: var(--color-brand-1);
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
    :hover {
      background-color: var(--orange);
    }
  }
`;
