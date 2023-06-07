import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 12vh;
  /* padding-top: 12vh; */
  z-index: 98;

  /* margin-bottom: 10vh; */
  margin: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;

  background: rgba(10, 10, 10, 0.86);
  /* background: rgba(255, 255, 255, 0.2); */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--orange);

  a {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* overflow: hidden; */

    /* background-color: var(--grey-0); */
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
    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: var(--white-fixed);
      overflow: hidden;

      img {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
      }
    }
  }
`;
