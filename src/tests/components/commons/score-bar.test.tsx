import React from "react";
import { render, RenderResult } from "../../utils/test-utils";
import ScoreBar, { ScoreBarProps } from "../../../components/commons/score-bar";

describe("ScoreBar Component", () => {
  let subject: RenderResult;
  const props: ScoreBarProps = {
    category: "memory",
    score: 50,
    color: "red",
    icon: "path",
  };

  beforeEach(() => {
    subject = render(<ScoreBar {...props} />);
  });

  test(`GIVEN a render ScoreBar Component,
    THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("scoreBar");

    expect(element).toBeInTheDocument();
  });

  test(`GIVEN a render ScoreBar Component,
  THEN it should render the correct text`, () => {
    const element = subject.getByTestId("scoreBarCategoryText");

    expect(element).toHaveTextContent("memory");
  });

  test(`GIVEN a render ScoreBar Component,
  THEN it should render the correct text`, () => {
    const element = subject.getByTestId("ScoreBarScoreNumber");
    const maxNumberElement = subject.getByTestId("ScoreBarScoreMaxNumber");

    expect(element).toHaveTextContent("50");
    expect(maxNumberElement).toHaveTextContent("/ 100");
  });

  test(`GIVEN a render scoreBarCategoryText,
  THEN it should render the correct color`, () => {
    const element = subject.getByTestId("scoreBarCategoryText");
    const computedStyle = getComputedStyle(element);

    expect(computedStyle.color).toEqual("rgb(255, 87, 87)");
  });

  test(`GIVEN a render ScoreBarContainer,
  THEN it should render the correct bg color`, () => {
    const element = subject.getByTestId("scoreBar");
    const computedStyle = getComputedStyle(element);

    expect(computedStyle.backgroundColor).toEqual("rgba(255, 87, 87, 0.15)");
  });

  test(`GIVEN a render ScoreBarScoreNumber AND with props.opacity,
   THEN it should return opacity style`, () => {
    const element = subject.getByTestId("ScoreBarScoreNumber");
    const computedStyle = getComputedStyle(element);
    expect(computedStyle.opacity).toEqual("1");

    const element2 = subject.getByTestId("ScoreBarScoreMaxNumber");
    const computedStyle2 = getComputedStyle(element2);
    expect(computedStyle2.opacity).toEqual("0.5");
  });

  describe(`GIVEN props.color is not in the list`, () => {
    beforeEach(() => {
      props.color = "brown";
      subject.rerender(<ScoreBar {...props} />);
    });

    test(`GIVEN a render scoreBarCategoryText,
   THEN it should return default color`, () => {
      const element = subject.getByTestId("scoreBarCategoryText");
      const computedStyle = getComputedStyle(element);

      expect(computedStyle.color).toEqual("black");
    });

    test(`GIVEN a render ScoreBarContainer,
   THEN it should return default bg color`, () => {
      const element = subject.getByTestId("scoreBar");
      const computedStyle = getComputedStyle(element);

      expect(computedStyle.backgroundColor).toEqual("black");
    });
  });
});
