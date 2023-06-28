import styled, { keyframes } from "styled-components";

const tranformScaleAnimation = keyframes`
0%{
    transform: rotate(0deg);
    
}
50%{
    transform: rotate(180deg) scale(2.0);
}
100%{
    transform: rotate(360deg) scale(1.0);
}
`;

export const StyledLoadingContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: rgba(10, 10, 10, 0.86);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  /* color: var(--white-fixed); */

  h1 {
    font-size: 2rem;
    color: var(--yellow-1);
  }
  img {
    animation: ${tranformScaleAnimation} infinite 1s;
    transform: scale(1);
    width: 100px;
    height: 100px;
    svg {
      fill: red;
      path {
      }
    }
  }
`;
