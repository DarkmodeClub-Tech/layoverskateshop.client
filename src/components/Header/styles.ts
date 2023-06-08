import styled from "styled-components";

export const StyledHeader = styled.header`
  /* position: fixed;
  top: 0;
  left: 0; */
  z-index: 99;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 100vw;
  /* height: 12vh; */
  height: auto;

  /* background-color: var(--grey-0); */
  /* color: var(--white-fixed); */
  background: rgba(10, 10, 10, 0.86);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  .header-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 20%;
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
      color: var(--success-0);

      // text-decoration: underline;

      /* border-color: var(--yellow-2); */
    }
    :focus {
      color: var(--yellow-2);
      /* border-color: var(--yellow-2); */
    }
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: var(--white-fixed);

    width: 40%;
    height: 40px;

    border-radius: 20px;

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

      :focus {
        border: 1px solid var(--success-0);
        background-color: var(--white-fixed);
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
      border: 1px solid transparent;
      border-left: 1px solid var(--grey-3);

      padding-top: 5px;
      padding-bottom: 5px;

      outline: none;
      color: var(--grey-0);

      transition: 0.5s;

      :hover {
        background-color: var(--success-0);
        color: var(--grey-0);
      }
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
