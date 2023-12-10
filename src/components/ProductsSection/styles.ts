import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { RefObject } from "react";

const slideList = keyframes`
 0% {
  /* transform: translatex(-100%);} */
 }
 30%{
  /* transform: translatex(-500%); */
 }
 40%{
  /* transform: translatex(-1000%); */

 }
 100%{
  /* transform:translatex(0); */
 }


`;

export const TitleH2 = styled.h2`
  display: inline-flex;
  /* flex-direction: column; */
  align-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  margin: 10px;
  height: auto;

  .title-span {
    background-color: var(--grey-0);
    color: var(--yellow-1);
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const StyledSection = styled(motion.section)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95vw;
  height: auto;
  overflow-x: hidden;

  margin: auto;
  margin-top: 20px;
  /* padding-left: 20px; */

  background: #e5d5ff;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--orange);

  .button-slider-list-container {
    position: absolute;
    top: 50%;
    width: 95%;
    z-index: 9;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: auto;

    button {
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      color: rgba(0, 0, 0, 0.1);
      &:hover {
        color: var(--yellow-1);
      }
      &:disabled {
        color: transparent;
      }
    }
  }
`;

export const StyledList = styled.ul<{
  x?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;
  border-radius: 10px;

  transform: translate(${({ x }) => (x ? x : "")});
  transition: 5s ease-in-out;

  cursor: grab;
  /* width: 98vw; */
  /* width: 100%;
  overflow-x: hidden; */

  .li-card {
    animation: ${slideList} 10s infinite;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;

    width: 250px;
    min-width: 250px;
    max-width: 320px;
    margin: 10px;
    overflow: hidden;
    border: 0.2px solid var(--grey-4);
    border-radius: 10px;
    padding: 0;

    /* background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--orange); */

    &:hover {
      box-shadow: 2px 4px 8px var(--grey-3);
    }
  }
`;
