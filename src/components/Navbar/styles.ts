import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  padding-top: 12vh;
  z-index: 98;

  margin-bottom: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: var(--grey-0);
  /* background-color: var(--yellow-1); */

  a {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    background-color: var(--grey-0);
    color: var(--white-fixed);

    padding: 5px;
    margin: 5px 10px 5px 10px;

    font-size: 1rem;
    font-weight: 500;
    border-bottom: 1px solid transparent;

    :hover {
      color: var(--yellow-2);
      /* border-color: var(--yellow-2); */
    }
  }
`;
