import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100vw;
  height: 12vh;

  background: rgb(255, 128, 0);
  background: linear-gradient(
    82deg,
    rgba(255, 128, 0, 1) 1%,
    rgba(255, 0, 0, 1) 5%,
    rgba(179, 0, 0, 1) 9%,
    rgba(0, 0, 0, 1) 18%
  );

  color: #ffff;

  border-bottom: 1px solid #ffff;

  .logo_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 25%;

    font: normal 2rem Arial;

    img {
      width: 60px;
      height: 60px;
      color: #ffff;
      filter: drop-shadow(0px 10px 20px rgba(255, 128, 0, 1));
    }
  }

  a {
    color: #ffff;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 30%;
    height: 40%;

    border-radius: 10px;

    label {
      display: none;
    }

    input {
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: center;
      width: 90%;
      height: 100%;
      border-radius: 20px 0 0 20px;

      outline: none;
      border: 1px solid black;
      padding: 0;

      :focus {
        border: 1px solid tomato;
      }
    }
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 10%;
      height: 100%;
      border-radius: 0 20px 20px 0;
      padding-top: 5px;
      padding-bottom: 5px;

      outline: none;
      border: 1px solid transparent;
      color: rgba(255, 0, 0, 1);

      :hover {
        border: 1px solid tomato;
      }
    }
  }
`;
