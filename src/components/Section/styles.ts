import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: initial;

  width: 90vw;

  margin: auto;
  margin-top: 50px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--orange);

  .button-container-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;

    button {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.3);

      border-radius: 10px;

      color: var(--grey-0);
      background-color: transparent;
      margin: 10px;

      :hover {
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: rgba(255, 0, 0, 1);
      }

      :disabled {
        color: var(--grey-4);
      }
    }
  }
`;
