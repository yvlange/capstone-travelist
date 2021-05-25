import GoBackButton from "./GoBackButton";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const mockHistoryGoBack = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    goBack: mockHistoryGoBack,
  }),
}));

describe("<GoBackButton />", () => {
  it("should render <GoBackButton />", () => {
    render(<GoBackButton />);
    expect(screen.getByRole("button")).toHaveTextContent("back");
  });
  it("fires the goBack function from useHistory hook", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <GoBackButton />
      </MemoryRouter>
    );

    fireEvent.click(getByRole("button"));
    expect(mockHistoryGoBack).toHaveBeenCalled();
  });
});
