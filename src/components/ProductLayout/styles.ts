import styled from "styled-components";

export const ProductLayoutContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100vw;
  height: auto;
  margin: 10px auto;

  .product-details-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 40%;
    height: auto;

    padding-bottom: 10px;
    background-color: var(--white-fixed);

    .buy-product-button,
    .add-to-cart-button,
    .product-category,
    .product-title,
    .product-installments,
    .product-price {
      display: flex;
      margin: 10px 0 0 10px;
    }
    .product-title {
      font-size: 2rem;
    }

    .product-price {
      display: flex;
      font-size: 4rem;
      color: var(--success-1);
    }
  }

  .fieldset-sizes-field,
  .fieldset-colors-field {
    margin-left: 10px;
    margin-top: 10px;
  }

  .buy-product-button,
  .add-to-cart-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    outline: none;

    color: var(--white-fixed);
    background-color: var(--success-1);

    font-size: 2rem;

    padding: 10px;
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: var(--grey-0);
      color: var(--yellow-1);
    }
  }
  .add-to-cart-button {
    background-color: var(--success-2);
    color: var(--success-1);
    &:hover {
    }
  }
  .label-sizes-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: auto;
    margin: 10px 0 0 10px;
    padding-left: 10px;
    background-color: var(--grey-5);
    border-radius: 10px;

    select {
      display: flex;
      outline: none;
      background-color: var(--yellow-1);
      color: var(--grey-0);

      border-radius: 10px;

      option {
        border-radius: 10px;
      }
    }
  }
  @media screen and (max-width: 660px) {
    width: 100%;

    .product-figure {
      width: 100%;
    }
    .product-details-section {
      width: 100%;
    }
    .product-price {
      font-size: 2em;
    }
  }
`;

export const ProductFigureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  width: 80vw;
  height: 80vh;

  overflow-x: hidden;

  .product-figure {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    /* margin-right: 10px; */
    background-color: var(--white-fixed);

    img {
      display: flex;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 120%;
      height: auto;
    }
  }
`;

export const ProductLayoutForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  height: auto;

  fieldset,
  label,
  input,
  button {
    display: flex;

    outline: none;
    border: none;
  }

  fieldset {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border: solid 1px var(--grey-5);
    border-radius: 5px;

    margin: 10px 0 0 10px;
    padding: 10px 0 10px;

    label {
      flex-direction: column;
      padding-left: 10px;
    }

    input {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: auto;
      height: 25px;
    }
  }

  button {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 0 10px 0 10px;
    font-size: 1rem;
    color: var(--grey-0);

    background-color: var(--yellow-1);
  }
`;
