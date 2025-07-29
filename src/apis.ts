import Papa, { type ParseResult } from "papaparse";

const API_HOME =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9AllagKXZyv2MhmOpLLyCgIBR-j9FNW53O4TmflMSgvhA8D9ZSRkYwn_7TsBBT8hRRWZRquZPXMwE/pub?output=csv&gid=0";

const API_PRODUCTS =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9AllagKXZyv2MhmOpLLyCgIBR-j9FNW53O4TmflMSgvhA8D9ZSRkYwn_7TsBBT8hRRWZRquZPXMwE/pub?output=csv&gid=1041766312";

export type Home = {
  Title: string;
  Subtitle: string;
  Image: string;
};

export type Product = {
  Title: string;
  Price: string;
  Category: string;
  Image: string;
  Offer: string;
  Id: string;
  Season: string;
  Color: string;
};

export type LocalStorageData = {
  id: string;
  size: string;
  quantity: number;
};

// this is mocking a way of having an external datasource to put our photos and text in the main page.
export const getHome = async (): Promise<Home[]> => {
  const response = await fetch(API_HOME);
  if (!response.ok) {
    throw new Error("The API is throwing an error");
  }
  const data = await response.text();
  const parsed: ParseResult<Home> = await new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: resolve,
      error: reject,
    });
  });
  return parsed.data;
};

// this is mocking a way of having an external datasource to put our photos and text in the main page.
export const getProducts = async (q: null | string): Promise<Product[]> => {
  const response = await fetch(API_PRODUCTS);
  if (!response.ok) {
    throw new Error("The API is throwing an error");
  }
  const data = await response.text();
  const parsed: ParseResult<Product> = await new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: resolve,
      error: reject,
    });
  });
  const products = q
    ? parsed.data.filter((product) =>
        product.Title.toLowerCase().includes(q.toLowerCase())
      )
    : parsed.data;
  return products;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(API_PRODUCTS);
  if (!response.ok) {
    throw new Error("The API is throwing an error");
  }
  const data = await response.text();
  const parsed: ParseResult<Product> = await new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: resolve,
      error: reject,
    });
  });

  const product = parsed.data.find((product) => product.Id === id);
  return product!;
};

export const updateCart = (productId: string, size: string) => {
  const data = localStorage.getItem("hoods_cart");
  const cart: LocalStorageData[] = data ? JSON.parse(data) : [];

  const existingProduct = cart.find(
    (product) => product.id === productId && product.size === size
  );

  if (!existingProduct) {
    cart.push({ id: productId, size: size, quantity: 1 });
  } else {
    existingProduct.quantity++;
  }

  localStorage.setItem("hoods_cart", JSON.stringify(cart));
};

export const getCart = () => {
  const data = localStorage.getItem("hoods_cart");
  const cart: LocalStorageData[] = data ? JSON.parse(data) : [];
  return cart;
};
