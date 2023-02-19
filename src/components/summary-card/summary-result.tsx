import React from "react";
import styled from "styled-components";
import CircleProgress from "../circle-progress";

export interface SummaryResultProps {
  score: number;
  maxScore?: number;
}

export default function SummaryResult({ score, maxScore }: SummaryResultProps) {
  return (
    <SummaryResultSection>
      <SummaryResultSectionWrapper>
        <SummaryResultTitle>Your Result</SummaryResultTitle>
        <CircleProgress number={score} maxNumber={maxScore} />
        <SummaryResultContentSection>
          <SummaryResultContentTitle>Great</SummaryResultContentTitle>
          <SummaryResultContentBody>
            Your Result {score} of {maxScore} Great You scored higher than 65%
            of the people who have taken these tests.
          </SummaryResultContentBody>
        </SummaryResultContentSection>
      </SummaryResultSectionWrapper>
    </SummaryResultSection>
  );
}

const SummaryResultSection = styled.div`
  height: 100%;
  flex-basis: 50%;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.gradients.lightSlateBlue};

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-basis: 40%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const SummaryResultSectionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SummaryResultTitle = styled.h2`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 8%;

  color: ${({ theme }) => theme.colors.neutral.lightLavender};
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: 4% auto;
  }
`;

const SummaryResultContentSection = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% auto 0 auto;
  width: 75%;

  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 85%;
    margin: 5% auto 0 auto;
  }
`;

const SummaryResultContentTitle = styled.h3`
  font-size: 28px;
  margin: 0;
  color: ${({ theme }) => theme.colors.neutral.white};
`;

const SummaryResultContentBody = styled.p`
  color: ${({ theme }) => theme.colors.neutral.lightLavender};
  text-align: center;
`;
