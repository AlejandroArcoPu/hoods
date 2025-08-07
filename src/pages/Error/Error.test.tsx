import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router";
import App from "../../App.tsx";
import Error from "./Error.tsx";

const routes = [
  {
    id: "root",
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/notfound"],
});

describe("Error component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });
  test("Error page displayed when route is not right", () => {
    expect(screen.getByText("Oops!")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, you are riding on the wrong place!")
    ).toBeInTheDocument();
  });
});
