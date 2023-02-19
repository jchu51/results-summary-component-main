import React, { MouseEvent } from "react";
import styled from "styled-components";
import { CategoryDetails } from "../../context/global-store";
import ScoreBar from "../score-bar";
import Button from "../button";

export interface SummaryDetailsProps {
  categories: CategoryDetails[];
}

export default function SummaryDetails({ categories }: SummaryDetailsProps) {
  return (
    <SummaryDetailsSection>
      <SummaryDetailsSectionWrapper>
        <SummaryDetailsTitle>Summary</SummaryDetailsTitle>
        {categories.map((item, i) => (
          <ScoreBar key={i} {...item} />
        ))}
        <SummaryContinueButton onClick={handleClickContinue}>
          Continue
        </SummaryContinueButton>
      </SummaryDetailsSectionWrapper>
    </SummaryDetailsSection>
  );

  function handleClickContinue(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("Do something !!!");
  }
}

const SummaryDetailsSection = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-basis: 60%;
  }
`;

const SummaryDetailsSectionWrapper = styled.div`
  margin: 10%;

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: 5%;
  }
`;

const SummaryDetailsTitle = styled.h2`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 8%;
`;

const SummaryContinueButton = styled(Button)`
  margin-top: 10%;

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-top: 0;
  }
`;
