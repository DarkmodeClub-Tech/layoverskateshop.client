import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 230px;
  height: auto;
  position: relative;

  .menu-header-title {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: var(--success-1);
  opacity: 5;

  width: 100%;

  z-index: 9;
  position: absolute;
  margin-top: 40px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
`;
