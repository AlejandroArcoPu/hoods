import {
  createBrowserRouter,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";
import Home from "./pages/Home/Home.tsx";
import Store from "./pages/Store/Store.tsx";
import App from "./App.tsx";
import Error from "./pages/Error/Error.tsx";
import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import {
  getHome,
  getProducts,
  getCart,
  addProductCart,
  deleteProductCart,
  type CartProduct,
  minusProductCart,
  plusProductCart,
} from "./apis.ts";
import Product from "./pages/Product/Product.tsx";

const homeLoader = async () => {
  const home = await getHome();
  const cart = getCart();
  return { home, cart };
};

const productAction = async ({ params, request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const object = Object.fromEntries(data);
  const productId = params.productId as string;
  const sizeSelected = object.radio as string;
  return await addProductCart(productId, sizeSelected);
};

const productsLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const products = await getProducts(q);
  return { products, q };
};

const cartLoader = async () => {
  const cart = getCart();
  return { cart };
};

const cartAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const object = Object.fromEntries(data) as CartProduct;
  if (object.type === "delete") {
    return deleteProductCart(object);
  } else if (object.type === "minus") {
    return minusProductCart(object);
  } else {
    return plusProductCart(object);
  }
};

export const routes = [
  {
    id: "root",
    path: "/",
    element: <App />,
    HydrateFallback: () => null,
    errorElement: (
      <AppLayout>
        <Error />
      </AppLayout>
    ),
    loader: homeLoader,
    children: [
      { index: true, element: <Home /> },
      {
        id: "store",
        path: "store",
        element: <Store />,
        loader: productsLoader,
        children: [
          {
            path: ":productId",
            element: <Product />,
            action: productAction,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: cartLoader,
        action: cartAction,
      },
    ],
  },
];
