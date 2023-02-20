import React from "react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { render, RenderResult } from "../../utils/test-utils";
import Button from "../../../components/commons/button";

describe("Button Component", () => {
  let user: UserEvent;
  const mockFunc = jest.fn();
  let subject: RenderResult;

  beforeEach(() => {
    user = userEvent.setup();
    subject = render(<Button onClick={mockFunc}>TEST</Button>);
  });

  test(`GIVEN a render Button Component,
  THEN it should show in the DOM`, () => {
    const element = subject.getByTestId("button");

    expect(element).toBeInTheDocument();
  });

  test(`GIVEN button text, WHEN render,
  THEN it should display 'test' text`, () => {
    const element = subject.getByTestId("button");

    expect(element).toHaveTextContent("TEST");
  });

  test(`GIVEN a render Button Component, 
  WHEN click on the button,
  THEN it should trigger it once`, async () => {
    const element = subject.getByTestId("button");
    await user.click(element);
    expect(mockFunc).toHaveBeenCalled();
    expect(mockFunc).toBeCalledTimes(1);
  });
});
