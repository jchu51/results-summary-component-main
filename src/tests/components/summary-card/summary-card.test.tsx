import React from "react";
import data from "../../../../data.json";
import { render, RenderResult } from "../../utils/test-utils";
import SummaryCard from "../../../components/summary-card/summary-card";
import { GlobalStoreProvider } from "../../../context/global-store";

describe("SummaryCard Component", () => {
  let subject: RenderResult;

  beforeEach(() => {
    subject = render(
      <GlobalStoreProvider value={{ summaryResult: data }}>
        <SummaryCard />
      </GlobalStoreProvider>
    );
  });

  test(`GIVEN a render SummaryCard Component,
  THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("summaryCard");

    expect(element).toBeInTheDocument();
  });
});
