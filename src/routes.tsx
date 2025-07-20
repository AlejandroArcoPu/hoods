import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home.tsx";
import Store from "./pages/Store/Store.tsx";
import App from "./App.tsx";
import Error from "./pages/Error/Error.tsx";
import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import { getHome } from "./apis.ts";

export async function homeLoader() {
  const home = await getHome();
  return { home };
}

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App,
//     children: [
//       { index: true, Component: Home },
//       { path: "store", Component: Store },
//     ],
//   },
// ]);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <AppLayout>
        <Error />
      </AppLayout>
    ),
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: "store",
        element: <Store />,
      },
    ],
  },
  {
    path: "/cart",
    element: (
      <AppLayout>
        <Cart />
      </AppLayout>
    ),
  },
]);
