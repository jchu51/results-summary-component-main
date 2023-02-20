import React from "react";
import styled from "styled-components";

export interface CircleProgressProps {
  number: number;
  maxNumber?: number;
}

export default function CircleProgress({
  number,
  maxNumber = 100,
}: CircleProgressProps) {
  return (
    <CircleProgressContainer data-testid="circleProgress">
      <CircleProgressInnerWrapper>
        <CircleProgressPercentage>{number}</CircleProgressPercentage>
        <CircleProgressMaxPercentage>
          {" "}of {maxNumber}
        </CircleProgressMaxPercentage>
      </CircleProgressInnerWrapper>
    </CircleProgressContainer>
  );
}

const CircleProgressContainer = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  position: relative;
  background: ${({ theme }) => `linear-gradient(
  to top,
  ${theme.colors.gradients.persianBlue},
  ${theme.colors.gradients.violetBlue}
);`};

  ${({ theme }) => theme.mediaQueries.mobile} {
    height: 120px;
    width: 120px;
  }
`;

const CircleProgressInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CircleProgressPercentage = styled.span`
  font-size: 70px;
  color: ${({ theme }) => theme.colors.neutral.white};

  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: 40px;
  }
`;

const CircleProgressMaxPercentage = styled.span`
  color: ${({ theme }) => theme.colors.neutral.lightLavender};
`;
