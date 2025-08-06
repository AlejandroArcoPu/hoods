import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import type { Home as HomeT, Product as ProductT } from "../../apis";
import { createMemoryRouter, RouterProvider } from "react-router";
import Home from "../Home/Home.tsx";
import Store from "../Store/Store.tsx";
import App from "../../App.tsx";

const mockHomeData: HomeT[] = [
  {
    Title: "NO RULES",
    Subtitle: "For the ones who ride with attitude.",
    Image:
      "https://res.cloudinary.com/dcgygc8ve/image/upload/v1753199704/carousel2_vlgonz.avif",
  },
];

const mockStoreData: ProductT[] = [
  {
    Category: "Tshirts",
    Color: "Dark gray",
    Id: "brush-tshirt",
    Image:
      "https://res.cloudinary.com/dcgygc8ve/image/upload/v1753199496/Brush-Script-TShirt_txevek.avif",
    Offer: "No",
    Price: "35.99€",
    Season: "Season 25/26",
    Title: "Brush TShirt",
  },
];

const routes = [
  {
    id: "root",
    path: "/",
    element: <App />,
    loader: () => ({ home: mockHomeData, cart: [] }),
    children: [
      { index: true, element: <Home /> },
      {
        id: "store",
        path: "store",
        element: <Store />,
        loader: () => ({
          products: mockStoreData,
        }),
      },
    ],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
});

describe("Home component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });
  test("Primary carousel elements is displayed", () => {
    expect(screen.getByText("IMPACT IS THE OUTFIT.")).toBeInTheDocument();
  });

  test("Mock data is displayed", () => {
    expect(screen.getByText(mockHomeData[0].Subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockHomeData[0].Title)).toBeInTheDocument();
  });

  test("Shop button is displayed", () => {
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  });

  test("Subscribe button is displayed", () => {
    expect(screen.getByRole("link", { name: "Subscribe" })).toBeInTheDocument();
  });

  test("Shop link navigates to the store page with product data", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText("Shop"));
    await waitFor(() => {
      expect(screen.getByText("Collections")).toBeInTheDocument();
      expect(screen.getByText("Sort by")).toBeInTheDocument();
      expect(screen.getByText(mockStoreData[0].Title)).toBeInTheDocument();
      expect(screen.getByText(mockStoreData[0].Price)).toBeInTheDocument();
      expect(
        screen.queryByText("IMPACT IS THE OUTFIT.")
      ).not.toBeInTheDocument();
    });
  });
});
