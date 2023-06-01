import styled, { keyframes } from "styled-components";

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

export const Title = styled.h2`
  display: inline-flex;
  color: black;
  font-size: 1.7rem;
  font-weight: 700;
  margin: 10px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  /* width: 98vw; */
  width: 100%;
  overflow-x: hidden;

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
    border: 1px solid var(--grey-4);
    border-radius: 10px;
    padding: 0;

    /* background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--orange); */

    :hover {
      box-shadow: 2px 4px 8px var(--grey-3);
    }
  }
`;
