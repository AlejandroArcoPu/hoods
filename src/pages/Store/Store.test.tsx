import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import type { Product as ProductT } from "../../apis";
import App from "../../App.tsx";
import Store from "./Store.tsx";

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
  {
    Category: "Skates",
    Color: "White",
    Id: "pencil-skate",
    Image:
      "https://res.cloudinary.com/dcgygc8ve/image/upload/v1753199886/skate2_czg9kc.avif",
    Offer: "No",
    Price: "69.99€",
    Season: "Season 25/26",
    Title: "Pencil Skate",
  },
];

const routes = [
  {
    id: "root",
    path: "/",
    element: <App />,
    children: [
      {
        id: "store",
        path: "store",
        element: <Store />,
        loader: () => ({
          products: mockStoreData,
        }),
        children: [
          {
            id: "tshirts",
            path: "tshirts",
            element: <Store />,
          },
        ],
      },
    ],
  },
];

const router = createMemoryRouter(routes, { initialEntries: ["/store"] });

describe("Store component tests", () => {
  test("Displayed products and filters", async () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Collections")).toBeInTheDocument();
    expect(screen.getByText("Sort by")).toBeInTheDocument();
    expect(screen.getByText("Price: Low to high")).toBeInTheDocument();
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(screen.getByText(mockStoreData[0].Title)).toBeInTheDocument();
    expect(screen.getByText(mockStoreData[0].Price)).toBeInTheDocument();
    expect(screen.getByText(mockStoreData[1].Title)).toBeInTheDocument();
    expect(screen.getByText(mockStoreData[1].Price)).toBeInTheDocument();
  });

  test("Sort filter order the products", async () => {
    render(<RouterProvider router={router} />);

    const user = userEvent.setup();
    const buttonOrder = screen.getByText("Price: High to low");
    await user.click(buttonOrder);
    await waitFor(async () => {
      const section = screen.getByRole("region", { name: "products" });
      const links = within(section).getAllByRole("link");
      const hrefs = links.map((link) => link.getAttribute("href"));
      expect(hrefs).toStrictEqual([
        "/store/pencil-skate",
        "/store/brush-tshirt",
      ]);
    });
  });

  test("Collections filter only show the category clicked", async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await user.click(screen.getByText("TShirts"));
    expect(screen.getByText(mockStoreData[1].Title)).toBeInTheDocument();
    expect(screen.getByText(mockStoreData[1].Price)).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/store/tshirts");
    await waitFor(async () => {
      expect(
        screen.queryByText(mockStoreData[0].Price)
      ).not.toBeInTheDocument();
    });
  });
});
