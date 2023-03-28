import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  .button-container {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      outline: none;
      border: 1px solid transparent;

      background-color: transparent;
      cursor: pointer;

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
    }
  }
`;
