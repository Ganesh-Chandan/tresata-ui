import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "..";

const onChange = jest.fn();

describe("Checkbox", () => {
  test("should render label tag and checkbox", () => {
    render(<Checkbox isChecked={false} label="Phone" />);
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("checkbox should be checked", () => {
    render(<Checkbox isChecked={true} label="Phone" />);
    fireEvent.click(screen.getByRole("checkbox"), {});
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("onChange method should be called", () => {
    render(<Checkbox label="Phone" onChange={onChange} />);
    fireEvent.click(screen.getByRole("checkbox"), {});
    expect(onChange).toHaveBeenCalled();
  });
});
