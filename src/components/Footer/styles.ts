import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 40vh;

  background-color: black;
  color: var(--white-fixed);
  margin-top: 15vh;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-weight: 700;
    font-size: 1.9rem;
  }

  .footer-container {
  }
`;
