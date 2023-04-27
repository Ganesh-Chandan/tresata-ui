import { fireEvent, render, screen } from "@testing-library/react";
import Similarity from "..";

const onChange = jest.fn();

describe("Similarity", () => {
  test("should render Similarity", () => {
    render(<Similarity />);
    expect(screen.getByText("Similarity")).toBeInTheDocument();
  });

  test("should select all tag when click on Select All", () => {
    render(<Similarity />);
    expect(screen.getByText("Select All")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("checkbox")[0], {});
    expect(screen.getByTestId("selectedTags").innerHTML).toBe("2 Selected");
    fireEvent.click(screen.getAllByRole("checkbox")[0], {});
    expect(screen.getByTestId("selectedTags").innerHTML).toBe("0 Selected");
  });

  test("should select tag when click on checkbox", () => {
    render(<Similarity />);
    expect(screen.getByText("Select All")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("checkbox")[1], {});
    expect(screen.getByTestId("selectedTags").innerHTML).toBe("1 Selected");
    fireEvent.click(screen.getAllByRole("checkbox")[1], {});
    expect(screen.getByTestId("selectedTags").innerHTML).toBe("0 Selected");
  });

  test("should open dropdown when click ADD TAGS", () => {
    render(<Similarity />);
    expect(screen.getByText("ADD TAGS")).toBeInTheDocument();
    fireEvent.click(screen.getByText("ADD TAGS"), {});
    expect(screen.getAllByRole("listitem").length).toBe(5);
    expect(screen.getByText("Contact info")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("listitem")[0].children[0], {});
  });

  test("should select the value when click checkbox and apply buton", () => {
    render(<Similarity />);
    expect(screen.getByText("ADD TAGS")).toBeInTheDocument();
    fireEvent.click(screen.getByText("ADD TAGS"), {});
    expect(screen.getAllByRole("listitem").length).toBe(5);
    expect(screen.getByTestId("Identifier")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("Identifier"), {});
    expect(screen.getByTestId("Identifier")).toBeChecked();
    fireEvent.click(screen.getByTestId("Identifier"), {});
    expect(screen.getByTestId("Identifier")).not.toBeChecked();
  });
});
