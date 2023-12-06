import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  z-index: 9;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 100vw;
  height: auto;
  background-color: var(--grey-0);
  /* background: rgba(10, 10, 10, 0.86); */
  color: var(--white-fixed);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);

  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);

  .header-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 20%;

    a {
      .cart-link-notification {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: red;
        color: var(--white-fixed);

        width: 20px;
        height: 20px;

        padding: 5px;
        border-radius: 50%;
      }
    }
  }

  .logo_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;

    font-size: 1.8rem;
    font-weight: 700;

    img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 50px;
      height: 50px;
      color: var(--white-fixed);
      margin: 10px;
    }
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    color: var(--white-fixed);

    font-size: 1rem;
    font-weight: 500;

    padding: 6px;
    border: none;
    border-bottom: 1px solid transparent;

    transition: 1s;

    &:hover {
      // color: var(--yellow-2);
      /* color: var(--grey-0); */

      // text-decoration: underline;

      border-color: var(--yellow-2);
    }
    &:focus {
      /* color: var(--grey-0); */
      border-color: var(--yellow-2);
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: space-evenly;

    .logo_container {
      font-size: 1.2rem;
      img {
        width: 40px;
        height: 40px;
      }
    }

    form {
      width: 90%;
    }
  }
`;

export const SearchFieldContainer = styled.div`
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

export const SearchFieldForm = styled.form`
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
    border: 1px solid transparent;
    border-radius: 20px 0 0 20px;
    outline: none;

    background-color: var(--grey-7);
    /* background: var(--grey-2); */
    /* color: var(--grey-0); */

    &:focus {
      border: 2px solid var(--orange);

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

    border: none;
    /* border-left: 1px solid var(--grey-3); */

    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0 20px 20px 0;
    outline: none;
    color: var(--grey-0);

    transition: 0.5s;

    background: var(--grey-7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);

    &:hover {
      background-color: var(--orange);
      color: var(--white-fixed);
      border: 2px solid var(--orange);
    }
  }
`;

export const FoundProductsListUl = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* gap: 5px; */

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
    border-radius: 5px;

    background: rgba(255, 255, 255, 0.3);
    /* background-color: var(--grey-7); */

    a {
      display: inline-flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;

      width: 100%;
      border-radius: 5px;

      color: var(--white-fixed);
      &:hover,
      &:focus {
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
      /* background-color: var(--color-brand-1); */
      color: var(--white-fixed);
      border-radius: 0 10px 10px 0;
      padding: 5px;
      margin-left: 5px;
    }
  }
`;

export const DropDownMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: flex-start; */

  width: 230px;
  height: auto;

  .menu-header-title {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    width: 230px;
    height: 30px;
    padding: 5px;
    background-color: var(--grey-0);
  }
`;

export const DropDownMenuNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: var(--success-1);
  opacity: 5;

  width: 100%;

  z-index: 9;
  position: absolute;
  /* margin-top: 40px; */

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
`;
