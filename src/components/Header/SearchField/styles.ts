import styled from "styled-components";

export const StyledContainerDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 40%;

  @media screen and (max-width: 660px) {
    width: 90%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: var(--white-fixed);

  width: 100%;
  height: 40px;

  border: 1px solid var(--white-fixed);
  border-radius: 40px;

  label {
    display: none;
  }

  input {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;

    width: 85%;
    height: 100%;
    border: 1px solid var(--color-brand-1);
    border-right: none;
    border-radius: 20px 0 0 20px;
    outline: none;

    background-color: var(--grey-7);
    /* background: var(--grey-2); */
    /* color: var(--grey-0); */

    :focus {
      border: 2px solid var(--color-brand-1);

      /* background-color: var(--white-fixed); */
    }
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 15%;
    height: 100%;

    border-radius: 0 20px 20px 0;
    border: 1px solid var(--color-brand-1);
    border-left: none;
    /* border-left: 1px solid var(--grey-3); */

    padding-top: 5px;
    padding-bottom: 5px;

    outline: none;
    color: var(--color-brand-1);

    transition: 0.5s;

    background: var(--grey-7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);

    :hover {
      background-color: var(--color-brand-1);
      color: var(--white-fixed);
    }
  }
`;

export const StyledUL = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  width: 100%;
  height: 400px;

  overflow-y: auto;
  overflow-x: hidden;

  margin: 0;
  border-radius: 5px;

  /* background-color: var(--white-fixed); */
  background: rgba(10, 10, 10, 0.86);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  /* color: var(--grey-0); */

  .product-figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .product-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    border-radius: 5px;

    margin-right: 10px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    width: 90%;

    /* background: rgba(255, 255, 255, 0.3); */
    background-color: var(--grey-7);

    a {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;

      width: 100%;

      color: var(--grey-2);
      :hover,
      :focus {
        color: var(--yellow-1);
        background: rgba(10, 10, 10, 0.86);
      }
    }

    .product-price {
      color: var(--success-1);
      margin-left: 10px;
    }
    border-radius: 10px;

    .product-category {
      background-color: var(--color-brand-1);
      color: var(--white-fixed);
      border-radius: 0 10px 10px 0;
      padding: 5px;
      margin-left: 5px;
    }
  }
`;
