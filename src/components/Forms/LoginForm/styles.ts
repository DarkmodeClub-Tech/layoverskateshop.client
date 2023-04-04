import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--white-fixed);
  opacity: 0.9;
  width: 50%;
  /* margin-bottom: 20px; */
  /* margin: auto; */

  /* margin-top: 20vh; */
  padding: 10px;

  border-left: 1px solid var(--grey-5);
  border-radius: 0 10px 10px 0;

  .register-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    flex-wrap: wrap;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;

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

      margin: 10px 0;
      gap: 4px;

      font-size: 0.9rem;
      font-weight: 500;

      input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35px;
      }
    }

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 35px;
      width: 100%;

      background-color: var(--grey-0);
      color: var(--white-fixed);

      margin-top: 20px;
      padding: 5px;
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

  span {
    color: var(--grey-2);
  }
  a {
  }
`;
