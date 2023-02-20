import React from "react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { render, RenderResult } from "../../utils/test-utils";
import SummaryDetails, {
  SummaryDetailsProps,
} from "../../../components/summary-card/summary-details";

describe("SummaryDetails Component", () => {
  let user: UserEvent;
  const props: SummaryDetailsProps = {
    categories: [
      {
        category: "Reaction",
        score: 80,
        icon: "./assets/images/icon-reaction.svg",
        color: "red",
      },
      {
        category: "Memory",
        score: 92,
        icon: "./assets/images/icon-memory.svg",
        color: "yellow",
      },
    ],
  };

  let subject: RenderResult;

  beforeEach(() => {
    user = userEvent.setup();
    subject = render(<SummaryDetails {...props} />);
  });

  test(`GIVEN a render SummaryDetails Component,
  THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("summaryDetails");

    expect(element).toBeInTheDocument();
  });

  test(`GIVEN a render SummaryDetails Component,
  THEN it should have correct text`, () => {
    const element = subject.getByTestId("summaryDetails");

    expect(element).toHaveTextContent("Summary");
  });

  test(`GIVEN a render SummaryContinueButton Component,
  THEN it should have correct text`, () => {
    const element = subject.getByTestId("summaryContinueButton");

    expect(element).toHaveTextContent("Continue");
  });

  test(`GIVEN multiple Score bar,
  THEN it should have correct text`, () => {
    props.categories.forEach((item) => {
      expect(subject.getByText(item.category)).toBeInTheDocument();
      expect(subject.getByText(item.score)).toBeInTheDocument();
    });
  });
});
