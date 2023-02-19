import React from "react";
import styled from "styled-components";
import { GlobalStoreProvider } from "../context/global-store";
import SummaryCard from "../components/summary-card/summary-card";
import data from "../../data.json";

const App = () => {
  return (
    <GlobalStoreProvider value={{ summaryResult: data }}>
      <BackgroundWrapper>
        <SummaryCard />
      </BackgroundWrapper>
    </GlobalStoreProvider>
  );
};

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 5%;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 0;
  }
`;

export default App;
