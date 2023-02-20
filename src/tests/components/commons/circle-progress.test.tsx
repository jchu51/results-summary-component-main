import React from "react";
import { render, RenderResult } from "../../utils/test-utils";
import CircleProgress, {
  CircleProgressProps,
} from "../../../components/commons/circle-progress";

describe("CircleProgress Component", () => {
  let subject: RenderResult;
  const props: CircleProgressProps = {
    number: 50,
  };

  beforeEach(() => {
    subject = render(<CircleProgress {...props} />);
  });

  test(`GIVEN a render CircleProgress Component,
  THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("circleProgress");

    expect(element).toBeInTheDocument();
  });

  describe("WHEN use default maxNumber", () => {
    test(`GIVEN props.number, WHEN render,
    THEN it should display correct text`, () => {
      const element = subject.getByTestId("circleProgress");

      expect(element).toHaveTextContent("50 of 100");
    });
  });

  describe("WHEN use props.maxNumber", () => {
    beforeEach(() => {
      props.maxNumber = 80;
      subject.rerender(<CircleProgress {...props} />);
    });

    test(`GIVEN props.number, WHEN render,
    THEN it should display correct text`, () => {
      const element = subject.getByTestId("circleProgress");

      expect(element).toHaveTextContent("50 of 80");
    });
  });
});
