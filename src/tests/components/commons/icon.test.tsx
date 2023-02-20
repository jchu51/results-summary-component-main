import React from "react";
import { render, RenderResult } from "../../utils/test-utils";
import Icon, { IconProps } from "../../../components/commons/icon";

describe("Icon Component", () => {
  let subject: RenderResult;
  const props: IconProps = {
    name: "memory",
  };

  beforeEach(() => {
    subject = render(<Icon {...props} />);
  });

  test(`GIVEN a render Icon Component,
    THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("icon");

    expect(element).toBeInTheDocument();
  });

  describe("GIVEN an invalid icon name", () => {
    beforeEach(() => {
      props.name = "test";
      subject.rerender(<Icon {...props} />);
    });

    test(`WHEN name is not a valid icon name
      THEN it should not show in DOM`, () => {
      const element = subject.queryByTestId("icon");

      expect(element).not.toBeInTheDocument();
    });
  });
});
