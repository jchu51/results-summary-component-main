import React from "react";
import { render, RenderResult } from "../../utils/test-utils";
import SummaryResult, {
  SummaryResultProps,
} from "../../../components/summary-card/summary-result";

describe("SummaryResult Component", () => {
  const props: SummaryResultProps = {
    score: 50,
  };

  let subject: RenderResult;

  beforeEach(() => {
    subject = render(<SummaryResult {...props} />);
  });

  test(`GIVEN a render SummaryResult Component,
  THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("summaryResult");

    expect(element).toBeInTheDocument();
  });

  test(`GIVEN a render SummaryResult Component,
  THEN it should have correct text`, () => {
    const element = subject.getByTestId("summaryResultTitle");
    expect(element).toHaveTextContent("Your Result");

    const element2 = subject.getByTestId("summaryResultContentBody");
    expect(element2).toHaveTextContent(
      "Your Result 50 of 100 Great You scored higher than 65% of the people who have taken these tests."
    );
  });

  test(`GIVEN a render CircleProgress Component,
  THEN it should have correct text`, () => {
    const element = subject.getByTestId("circleProgress");
    expect(element).toBeInTheDocument();
  });
});
