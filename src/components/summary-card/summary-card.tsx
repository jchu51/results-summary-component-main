import React, { useCallback } from "react";
import styled from "styled-components";
import { useGlobalStore } from "../../context/global-store";
import SummaryDetails from "./summary-details";
import SummaryResult from "./summary-result";

export default function SummaryCard() {
  const { summaryResult } = useGlobalStore();

  const calcScore = useCallback(() => {
    return Math.trunc(
      summaryResult.reduce((acc, curr) => curr.score + acc, 0) /
        summaryResult.length
    );
  }, [summaryResult]);

  return (
    <SummaryCardContainer data-testid="summaryCard">
      <SummaryResult score={calcScore()} />
      <SummaryDetails categories={summaryResult} />
    </SummaryCardContainer>
  );
}

const SummaryCardContainer = styled.div`
  width: 740px;
  height: 510px;
  display: flex;
  border-radius: 32px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05),
    0 16px 32px rgba(0, 0, 0, 0.05), 0 32px 64px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;
