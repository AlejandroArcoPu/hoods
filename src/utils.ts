import type { ReduceProduct } from "./apis";

export function titleCase(string: string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
export function stringToNumber(str: string) {
  const num = Number(str.replace(/[^0-9.-]+/g, ""));
  return num;
}
export function calcPrice(products: ReduceProduct[]) {
  let result = 0;
  for (let i = 0; i < products.length; i++) {
    result += stringToNumber(products[i].price) * products[i].quantity;
  }
  return result;
}

export function getQuantity(products: ReduceProduct[]) {
  return products.reduce((sum, item) => sum + item.quantity, 0);
}
