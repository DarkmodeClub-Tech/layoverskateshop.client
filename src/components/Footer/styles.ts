import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 40vh;

  background: rgba(10, 10, 10, 0.86);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
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
