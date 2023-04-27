import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "..";

const onSelect = jest.fn();

describe("Dropdown", () => {
  test("should render dropdown content", () => {
    render(
      <Dropdown
        items={[
          { name: "option1", value: "options1" },
          { name: "option2", value: "options2" },
          { name: "option3", value: "options3" },
        ]}
        width={150}
        height={200}
        selecetedItems={[]}
        onSelect={onSelect}
      >
        <div>Dropdown</div>
      </Dropdown>
    );
    expect(screen.getByText("Dropdown")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Dropdown"), {});
    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

  test("should call onSelecet method", () => {
    render(
      <Dropdown
        items={[
          { name: "option1", value: "options1" },
          { name: "option2", value: "options2" },
          { name: "option3", value: "options3" },
        ]}
        width={150}
        height={200}
        selecetedItems={[]}
        onSelect={onSelect}
      >
        <div>Dropdown</div>
      </Dropdown>
    );
    expect(screen.getByText("Dropdown")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Dropdown"), {});
    fireEvent.click(screen.getAllByRole("checkbox")[0]);
    expect(onSelect).toBeCalled();
  });

  test("should call close method", () => {
    render(
      <Dropdown
        items={[
          { name: "option1", value: "options1" },
          { name: "option2", value: "options2" },
          { name: "option3", value: "options3" },
        ]}
        width={150}
        height={200}
        selecetedItems={[]}
        onSelect={onSelect}
      >
        <div>Dropdown</div>
      </Dropdown>
    );

    expect(screen.getByText("Dropdown")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Dropdown"), {});
    const applyButton = screen.getByText("APPLY");
    expect(applyButton).toBeInTheDocument();
    expect(screen.getByText("CANCEL")).toBeInTheDocument();
    fireEvent.click(screen.getByText("APPLY"), {});
    expect(applyButton).not.toBeInTheDocument();
  });
});
