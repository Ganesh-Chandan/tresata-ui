import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Slider from "..";

const onChange = jest.fn();

describe("Slider", () => {
  test("should render slider component", () => {
    render(<Slider value={50}></Slider>);
    expect(screen.getByTestId("sliderContainer")).toBeInTheDocument();
    expect(screen.getByTestId("sliderIcon")).toBeInTheDocument();
    expect(screen.getByTestId("sliderbar")).toBeInTheDocument();
    expect(screen.getByTestId("rangeInfo")).toBeInTheDocument();

    expect(screen.getByTestId("sliderbar").style.width).toBe("50%");
    expect(screen.getByTestId("sliderIcon").innerHTML).toBe("50");
  });

  test("slider call onChange method", () => {
    render(<Slider value={50} onChange={onChange}></Slider>);
    expect(screen.getByTestId("sliderIcon")).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByTestId("sliderIcon"), {});
    fireEvent.mouseMove(screen.getByTestId("sliderContainer"), { clientX: 0 });
    fireEvent.mouseUp(screen.getByTestId("sliderContainer"), {});
    fireEvent.mouseMove(screen.getByTestId("sliderContainer"), { clientX: 0 });
    fireEvent.mouseUp(screen.getByTestId("sliderContainer"), {});
    expect(onChange).toHaveBeenCalled();
  });
});
