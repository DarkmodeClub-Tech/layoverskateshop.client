import styled, { keyframes } from "styled-components";

const tranformScaleAndRotate360Animation = keyframes`
0%{
    transform: rotate(0deg);
    
}
50%{
  transform: rotate(180deg) ;

}
100%{
    transform: rotate(360deg) ;
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
  /* backdrop-filter: blur(1.5px); */
  /* -webkit-backdrop-filter: blur(1.5px); */
  /* color: var(--white-fixed); */

  h1 {
    font-size: 2rem;
    color: var(--yellow-1);
  }
  .wheel {
    animation: ${tranformScaleAndRotate360Animation} infinite 9ms linear;
    position: absolute;
    border-radius: 50%;
  }

  .bearing {
    animation: ${tranformScaleAndRotate360Animation} infinite 9ms;

    position: absolute;
    border-radius: 50%;
  }
  .screw {
    position: absolute;
  }
`;
