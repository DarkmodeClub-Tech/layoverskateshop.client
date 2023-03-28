import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  width: 100vw;
  overflow-x: auto;

  margin-top: 17vh;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;

    width: 250px;
    min-width: 250px;
    background-color: aliceblue;
    margin: 10px;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0;
  }
`;
