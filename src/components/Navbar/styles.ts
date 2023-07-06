import styled from "styled-components";

export const Nav = styled.nav`
  /* position: absolute; */
  /* top: 12vh; */
  /* padding-top: 12vh; */
  z-index: 7;

  /* margin-top: 14vh; */
  /* margin: auto; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  overflow-x: auto;

  width: 100%;

  background: rgba(10, 10, 10, 0.86);
  /* background: rgba(255, 255, 255, 0.2); */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* overflow: hidden; */

    /* background-color: var(--grey-0); */
    color: var(--white-fixed);

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

  @media screen and (max-width: 768px) {
    justify-content: flex-start;

    a {
      width: 100%;
      margin: 0;
      font-size: 0.9rem;
      padding: 10px;
      /* padding: 10px; */
      /* padding-bottom: 5px; */
    }
  }
`;

export const ProductListNav = styled.nav`
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: auto;
  width: 100vw;

  background-color: aliceblue;

  background: rgba(10, 10, 10, 0.86);
  /* background: rgba(255, 255, 255, 0.2); */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: auto;

    li {
      display: flex;
      flex-direction: row;
      width: 80%;

      overflow: hidden;

      a {
        display: flex;
        flex-direction: row;
        justify-content: left;
        width: 300px;
        color: lime;

        figure {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          min-width: 100px;
          width: 100px;
          min-height: 100px;
          height: 100px;

          margin-right: 10px;
          border-radius: 5px;

          img {
            display: flex;
            width: 120%;
          }
        }
      }
    }
  }
`;
