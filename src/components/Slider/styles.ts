import styled, { keyframes } from "styled-components";
import { ISliderAtributes } from "./interfaces";

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

export const SliderContainer = styled.section<ISliderAtributes>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 20px;
  padding-bottom: 20px; */

  width: 100vw;
  height: 100vh;

  width: ${({ width }) => (width ? width : "100vw")};
  height: ${({ height }) => (height ? height : "90vh")};

  background-color: var(--grey-9);
  overflow: hidden;

  /* margin: auto;
  margin-top: 20px; */
  /* border-radius: 10px; */

  border-bottom: 1px solid var(--grey-4);

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: var(--orange);

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      min-width: 100%;

      transform: translate(${({ x }) => (x ? x : "")});
      transition: 5s ease-in-out;

      /* animation: ${slideList} 20s infinite ease-in-out; */

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
    width: ${({ addContainerWidth }) =>
      addContainerWidth ? addContainerWidth : "80%"};

    height: ${({ addContainerHeight }) =>
      addContainerHeight ? addContainerHeight : "80%"};

    /* From https://css.glass */
    /* background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--orange); */

    .add {
      /* display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between; */

      width: 80%;
      height: 80%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        color: var(--grey-0);
        opacity: 0.7;
        margin: 10px;
      }

      p {
        font-size: 3rem;
        font-weight: 700;
        color: var(--orange);
        opacity: 0.7;
        margin: 30px;
      }

      span {
        opacity: 0.7;
        color: lime;
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

      width: auto;
      height: auto;

      padding: 0;
      border: 1px solid transparent;
      border-radius: 50%;

      margin: 35px;
      color: rgba(255, 255, 255, 0.3);
      background-color: transparent;
      cursor: pointer;

      transition: 1s ease-in-out;

      &:hover {
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-color: rgba(255, 255, 255, 0.3);
        color: var(--yellow-2);
      }
      &:disabled {
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
