import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useSubmit,
} from "react-router";
import styles from "./Store.module.scss";
import type { Product } from "../../apis";
import { type Product as ProductT } from "../../apis.ts";
import { titleCase } from "../../utils.ts";
import { useEffect } from "react";
import { Search } from "lucide-react";

type LoaderData = {
  products: ProductT[];
  q: string;
};

const SORT_FILTERS = ["Price: Low to high", "Price: High to low"];
const COLLECTION_FILTERS = [
  { name: "All", link: "", active: "store" },
  { name: "TShirts", link: "tshirts", active: "tshirts" },
  { name: "Shoes", link: "shoes", active: "shoes" },
  { name: "Skates", link: "skates", active: "skates" },
];

export default function Store() {
  const location = useLocation();
  const submit = useSubmit();
  const { products, q } = useLoaderData<LoaderData>();
  const locationSplit = location.pathname.split("/");
  const lastPath = locationSplit[locationSplit.length - 1];
  const filteredProducts =
    lastPath === "store"
      ? products
      : products.filter((product) => product.Category === titleCase(lastPath));
  const { pathname } = useLocation();
  const isProductPage =
    pathname.includes("/store/") &&
    pathname !== "/store" &&
    pathname !== "/store/tshirts" &&
    pathname !== "/store/shoes" &&
    pathname !== "/store/skates";

  useEffect(() => {
    const element = document.getElementById("q") as HTMLInputElement;
    if (element) {
      element.value = q;
    }
  }, [q]);

  if (isProductPage) return <Outlet />;

  return (
    <main className={styles.main}>
      <Form id="search-form" role="search" className={styles.form}>
        <input
          className={styles.input}
          id="q"
          aria-label="Search products"
          placeholder="Search products..."
          type="search"
          name="q"
          defaultValue={q}
          onChange={(event) => {
            const isFirstSearch = q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });
          }}
        />
        <Search className={styles.searchIcon} size={20} color="#a4a4a4" />
      </Form>
      <div className={styles.left}>
        <nav>
          <p className={styles.listTitle}>Collections</p>
          <ul className={styles.list}>
            {COLLECTION_FILTERS.map((filter) => (
              <li key={filter.name}>
                <Link
                  viewTransition
                  className={
                    lastPath === filter.active ? styles.linkActive : styles.link
                  }
                  to={filter.link}
                >
                  {filter.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {filteredProducts.length === 0 ? (
        <section className={styles.notProduct}>
          <h1>Oops!</h1>
          <p>
            Sorry, the product <span className={styles.underline}>{q}</span> is
            not found.
          </p>
        </section>
      ) : (
        <section className={styles.products}>
          {filteredProducts.length &&
            filteredProducts.map((product: Product) => (
              <Link viewTransition key={product.Id} to={`/store/${product.Id}`}>
                <div className={styles.product}>
                  <img
                    src={product.Image}
                    alt={`${product.Title}`}
                    className={styles.image}
                    style={{ viewTransitionName: `${product.Id}` }}
                  />
                  <div className={styles.productText}>
                    <p className={styles.productPara}>
                      {product.Title}
                      <span className={styles.price}>{product.Price}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </section>
      )}

      <div className={styles.right}>
        <nav>
          <p className={styles.listTitle}>Sort by</p>
          <ul className={styles.list}>
            {SORT_FILTERS.map((filter) => (
              <li key={filter}>
                <Link viewTransition className={styles.link} to="/store">
                  {filter}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
