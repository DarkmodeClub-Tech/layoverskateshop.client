import styled from "styled-components";

export const CartContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 70vw;
  height: 70vh;
  overflow-y: auto;

  background: rgba(255, 255, 255, 0.2);
  color: var(--orange);

  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  margin: 10px;

  ::-webkit-scrollbar {
    display: flex;
    width: 12px;
    background: rgba(255, 255, 255, 0.2);
    padding: 2px;
  }
  ::-webkit-scrollbar-thumb {
    display: flex;

    background: var(--grey-4);
    border-radius: 4px;
    margin: 2px;
    border: 2px solid var(--grey-6);
  }

  .product-list-ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    height: auto;

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      width: 90%;

      background-color: var(--white-fixed);

      margin: 10px;
      border-radius: 10px;

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 10px;
      }

      .product-details-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 10px;
      }
    }
  }

  .product-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 100px;
  }
`;
