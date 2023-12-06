"use client";

import { StyledLoadingContainer } from "./styles";

export const LoadingElement = () => {
  return (
    <StyledLoadingContainer>
      <img src="wheel.svg" className="wheel" alt="loading icon wheel" />
      <img src="bearing.svg" className="bearing" alt="loading icon bearing" />
      <img src="screw.svg" className="screw" alt="loading icon screw" />
    </StyledLoadingContainer>
  );
};
