import { render, screen } from "@testing-library/react";
import TripDetails from "./TripDetails";

describe("<TripDetails />", () => {
  it("renders without failure", () => {
    render(<TripDetails />);
  });
  it("renders the name passed as props", () => {
    render(<TripDetails name="activities" />);
    expect(screen.getByText("activities")).toBeInTheDocument();
  });
  it("renders the text passed as props", () => {
    render(<TripDetails text="go to museum" />);
    expect(screen.getByText("go to museum")).toBeInTheDocument();
  });
});
