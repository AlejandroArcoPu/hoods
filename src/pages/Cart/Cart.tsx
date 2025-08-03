import styles from "./Cart.module.scss";
import Linki from "../../components/Linki/Linki.tsx";
import { Form, useLoaderData } from "react-router";
import type { ReduceProduct } from "../../apis.ts";
import { calcPrice } from "../../utils.ts";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function Cart() {
  const { cart } = useLoaderData();
  const total = cart.length > 0 ? calcPrice(cart) : 0;
  return (
    <main className={styles.main}>
      {cart.length > 0 ? (
        <section className={styles.content}>
          <h1 className={styles.contentTitle}>Cart</h1>
          <div className={styles.products}>
            {cart.map((product: ReduceProduct) => (
              <div
                key={`${product.id}${product.size}`}
                className={styles.product}
              >
                <Form method="post" className={styles.trashContainer}>
                  <input name="id" hidden readOnly value={product.id} />
                  <input name="size" hidden readOnly value={product.size} />
                  <input name="type" hidden readOnly value={"delete"} />
                  <input
                    name="quantity"
                    hidden
                    readOnly
                    value={product.quantity}
                  />
                  <button type="submit" className={styles.trash}>
                    <Trash2 />
                  </button>
                </Form>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src={product.image}
                    alt={`${product.title}`}
                  />
                </div>
                <div className={styles.texts}>
                  <p className={styles.productTitle}>{product.title}</p>
                  <p className={styles.productSize}>
                    {product.size.toUpperCase()}
                  </p>
                </div>
                <div className={styles.buttons}>
                  <Form method="post">
                    <input name="id" hidden readOnly value={product.id} />
                    <input name="size" hidden readOnly value={product.size} />
                    <input name="type" hidden readOnly value={"minus"} />
                    <input
                      name="quantity"
                      hidden
                      readOnly
                      value={product.quantity}
                    />
                    <button
                      className={
                        product.quantity !== 1
                          ? `${styles.button}`
                          : `${styles.button} ${styles.disabled}`
                      }
                    >
                      <Minus strokeWidth={1} />
                    </button>
                  </Form>
                  <p className={styles.quantity}>{product.quantity}</p>
                  <Form method="post">
                    <input name="id" hidden readOnly value={product.id} />
                    <input name="size" hidden readOnly value={product.size} />
                    <input name="type" hidden readOnly value={"plus"} />
                    <input
                      name="quantity"
                      hidden
                      readOnly
                      value={product.quantity}
                    />
                    <button className={styles.button}>
                      <Plus strokeWidth={1} />
                    </button>
                  </Form>
                </div>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            ))}
          </div>
          <div className={styles.price}>
            <p>
              Subtotal •{" "}
              <span className={styles.article}>{cart.length} articles</span>
            </p>
            <p className={styles.priceSecond}>
              {Math.round(total * 100) / 100}€
            </p>
          </div>
          <div className={styles.price}>
            <p>Shipping</p>
            <p className={styles.priceSecond}>Free</p>
          </div>
          <div className={styles.price}>
            <p>Tax</p>
            <p className={styles.priceSecond}>-</p>
          </div>
          <div className={`${styles.total}`}>
            <p>Total</p>
            <p>{Math.round(total * 100) / 100}€</p>
          </div>
          <Linki text="Go to checkout" link="" disabled={true} size="1.2" />
        </section>
      ) : (
        <>
          <h1>Your shopping cart is empty.</h1>
          <p>
            Explore our <span className={styles.underline}>amazing</span>{" "}
            products.
          </p>
          <Linki text="Shop" link="/store" />
        </>
      )}
    </main>
  );
}
