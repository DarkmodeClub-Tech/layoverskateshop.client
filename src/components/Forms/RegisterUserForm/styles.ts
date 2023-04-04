import styled, { keyframes } from "styled-components";

const fieldsetAnimation = keyframes`
from{ transform:translatex(-100%);}
to{ transform:translatex(0);}

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  // flex-wrap: wrap;

  /* height: 100%;*/
  max-height: 90vh;
  width: 45%;
  // margin: 0 auto;
  // margin-top: 20vh;
  padding-top: 20px;

  border-right: 1px solid var(--grey-5);
  border-radius: 10px 0px 0px 10px;
  // box-shadow: 0px 4px 8px var(--grey-3);

  opacity: 0.9;
  overflow: auto;

  background-color: var(--white-fixed);

  ::-webkit-scrollbar {
    display: flex;
    width: 12px;
    background: transparent;
    padding: 2px;
  }
  ::-webkit-scrollbar-thumb {
    display: flex;

    background: var(--grey-4);
    opacity: 0.9;

    border-radius: 4px;
    margin: 2px;
    border: 2px solid var(--grey-6);
  }

  img {
    opacity: 0.9;
  }

  fieldset {
    animation: ${fieldsetAnimation} 2s;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: auto;

    margin-top: 10px;
    margin-bottom: 20px;

    legend {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      width: 100%;

      margin: 5px 0;
      gap: 4px;

      font-size: 0.9rem;
      font-weight: 500;

      input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30px;
      }
    }

    .form-button-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 100%;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        // width: 80%;

        background-color: var(--grey-0);
        color: var(--white-fixed);

        margin: 20px 10px 20px 10px;
        margin-top: 10px;
        padding: 10px 20px 10px 20px;
        outline: none;
        border: 1px solid var(--grey-0);
        border-radius: 5px;

        font-size: 0.9rem;
        font-weight: 600;

        :hover {
          background-color: var(--orange);
          border: 1px solid var(--orange);
          color: var(--grey-0);
        }
      }
    }
  }

  span {
    color: var(--grey-2);
  }
  a {
  }
`;
