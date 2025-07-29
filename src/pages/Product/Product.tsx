import { Link, useFetcher, useMatches, useParams } from "react-router";
import { updateCart, type Product } from "../../apis.ts";
import styles from "./Product.module.scss";
import { useState } from "react";
import { Check } from "lucide-react";

const SIZES_CLOTHES = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];
const SIZES_SHOES = ["39", "40", "41", "42", "43", "44", "45"];
const SIZES_SKATES = ["7.4", "7.5", "7.75", "8", "8.25", "8.5", "8.75"];

export async function action({ params, request }) {
  const data = await request.formData();
  const object = Object.fromEntries(data);
  return updateCart(params.productId, object.radio);
}

export default function Product() {
  const matches = useMatches();
  const fetcher = useFetcher();
  const params = useParams();

  const products = matches.find((match) => match.id === "store")?.data.products;

  const product = products.find((product) => product.Id === params.productId);
  const filteredProducts = products.filter(
    (product) => product.Id !== params.productId
  );
  const SIZES =
    product?.Category === "Shoes"
      ? SIZES_SHOES
      : product?.Category === "Skates"
      ? SIZES_SKATES
      : SIZES_CLOTHES;

  const [size, setSize] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.id);
  };

  return (
    <main className={styles.main}>
      <div className={styles.product}>
        <div className={styles.imgContainer}>
          <img
            src={product!.Image}
            alt={`${product!.Title}`}
            className={styles.img}
            style={{ viewTransitionName: `${product!.Id}` }}
          />
        </div>
        <section className={styles.productText}>
          <p className={styles.subtitle}>{product!.Season}</p>
          <h1 className={styles.title}>{product!.Title}</h1>
          <p className={styles.price}>{product!.Price}</p>
          <div className={styles.char}>
            <div className={styles.color}>
              <p className={styles.charTitle}> COLOR:</p>
              <p>{product!.Color}</p>
            </div>
            <p className={styles.charTitle}>SIZE:</p>
            <fetcher.Form method="post">
              <div className={styles.radioboxes}>
                {SIZES.map((size) => (
                  <div key={size} className={styles.radiobox}>
                    <input
                      type="radio"
                      id={size}
                      name="radio"
                      onChange={handleInputChange}
                      className={styles.input}
                      value={size}
                    />
                    <label className={styles.label} htmlFor={size}>
                      {size.toUpperCase()}
                    </label>
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className={size === "" ? styles.disabled : styles.button}
              >
                Add to cart
              </button>
            </fetcher.Form>
          </div>

          <div className={styles.clarification}>
            <p className={styles.clarificationTitle}>
              Sold and Shipped by <span className={styles.bold}>Hoods</span>
            </p>
            <ul className={styles.clarificationList}>
              <li>Free shipping and returns</li>
              <li>30-day return policy</li>
              <li>Recycled material</li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.related}>
        <h2 className={styles.relatedTitle}>YOU MIGHT ALSO LIKE</h2>
        <ul className={styles.relatedList}>
          {filteredProducts.map((product) => (
            <li key={product.Id} className={styles.relatedProduct}>
              <Link viewTransition to={`/store/${product.Id}`}>
                <div className={styles.relatedContainer}>
                  <img
                    className={styles.imgRelated}
                    src={product.Image}
                    alt={`${product.Title}`}
                  />
                  <p className={styles.productRelatedPara}>
                    {product.Title}
                    <span className={styles.priceRelated}>{product.Price}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
