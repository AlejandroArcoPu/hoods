import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home.tsx";
import Store from "./pages/Store/Store.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "store", Component: Store },
    ],
  },
]);
