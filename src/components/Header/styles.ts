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

  background: rgba(10, 10, 10, 0.86);
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

    :hover {
      // color: var(--yellow-2);
      color: var(--yellow-2);

      // text-decoration: underline;

      /* border-color: var(--yellow-2); */
    }
    :focus {
      color: var(--yellow-2);
      /* border-color: var(--yellow-2); */
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
