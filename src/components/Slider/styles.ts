import styled, { keyframes } from "styled-components";

interface ISliderProps {
  x?: string;
}

const slideList = keyframes`
 0% {
  transform: translatex(-100%);}

 50%{
  transform: translatex(-200%);

 }
 100%{
  transform:translatex(-200%);
 }
 50%{
  transform: translatex(-100%);
 } 
0%{
  transform: translatex(0);

}

`;

export const SliderContainer = styled.section<ISliderProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 80vh;
  background-color: var(--white-fixed);
  overflow: hidden;

  margin-top: 15vh;

  border-bottom: 1px solid var(--grey-4);
  box-shadow: 0px 2px 8px var(--grey-4);

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 90%;
    overflow: hidden;
    margin: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      min-width: 100%;

      transform: translate(${({ x }) => x});
      transition: 5s ease-in-out;

      animation: ${slideList} 10s infinite ease-in-out;

      img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        object-fit: cover;
      }
    }
  }
  .add-container {
    position: absolute;
    z-index: 80;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 60%;
    height: 60%;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--orange);

    .add {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 80%;
      height: 80%;

      img {
        color: var(--grey-0);
        opacity: 0.7;
        margin: 10px;
      }

      p {
        font-size: 3rem;
        font-weight: 700;
        color: var(--grey-0);
        opacity: 0.7;
      }

      span {
        opacity: 0.7;
      }
    }
  }

  .button-container {
    position: absolute;
    z-index: 99;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      padding-left: 5px;
      padding-right: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
      outline: none;
      border: 1px solid transparent;

      margin: 40px;
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
        color: var(--orange);
      }
    }
  }
`;
