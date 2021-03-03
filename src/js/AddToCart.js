import React, { useState, useEffect } from "react";
import Product from "./Product";
import ProductList from "./ProductList";
import likeBlackIcon from "../images/like.svg";
import cartIcon from "../images/shopping-cart.svg";
import backIcon from "../images/arrow-back-up.svg";

const data = [
  {
    id: 3,
    title: "The Road to Learn React",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41AJiI9AyyL._SX384_BO1,204,203,200_.jpg",
    price: 1793,
    stock: 5,
    liked: true,
  },
  {
    id: 2,
    title: "JavaScript: The Definitive Guide",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51fOFa903iL._SX388_BO1,204,203,200_.jpg",
    price: 2150,
    stock: 5,
    liked: false,
  },
  {
    id: 1,
    title: "Eloquent JavaScript",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
    price: 1874,
    stock: 5,
    liked: false,
  },
];

export default function AddToCart() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (cart.length !== 0) {
      const totalAmount = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      setCartTotal(totalAmount);
    }
  }, [cart]);

  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    setWishlist(products.filter((item) => item.liked));
  }, [products]);
  const [display, setDisplay] = useState("product-display");

  const displayWishlist = () => {
    display !== "wishlist" && setDisplay("wishlist");
    // setDisplay("wishlist");
  };
  const displayCart = () => {
    display !== "cart" && setDisplay("cart");
    // setDisplay("cart");
  };
  const displayProducts = () => {
    display !== "product-display" && setDisplay("product-display");
    // setDisplay("product-display");
  };
  return (
    <div className="exercise">
      <div className="add-to-cart">
        <header>
          <button className="header-back-btn" onClick={displayProducts}>
            <img src={backIcon} alt="" />
            Back
          </button>
          <div className="header-wrapper">
            <div className="wishlist-wrapper" onClick={displayWishlist}>
              <img className="icon" src={likeBlackIcon} alt="" />
              <div className="view-wishlist-btn">
                Wishlist - <span className="bold">{wishlist.length} Items</span>
              </div>
            </div>
            <div className="cart-wrapper" onClick={displayCart}>
              <img className="icon" src={cartIcon} alt="" />
              <div className="view-cart-btn">
                {cart.length} Products -{" "}
                <span className="bold">₹ {cartTotal}</span>
              </div>
            </div>
          </div>
        </header>

        {display === "product-display" ? (
          <div className="product-display">
            <h3>Most Popular</h3>
            <div className="product-wrapper">
              {products.map(({ title, id, img, price, stock, liked }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  img={img}
                  price={price}
                  stock={stock}
                  liked={liked}
                  // quantity={quantity}
                  setProducts={setProducts}
                  setCart={setCart}
                />
              ))}
            </div>
          </div>
        ) : display === "wishlist" ? (
          <div className="wishlist">
            <h3>Wishlist</h3>
            {wishlist.length > 0 ? (
              <div className="wishlist-items-wrapper">
                {wishlist.map(({ title, id, img, price, liked }) => (
                  <div key={id} className="wishlist-item">
                    <ProductList
                      isCartDisplay={false}
                      isWishlistDisplay={true}
                      id={id}
                      title={title}
                      img={img}
                      price={price}
                      liked={liked}
                      setProducts={setProducts}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-wrapper">
                <div className="empty-msg">Your wishlist is empty!!</div>
                <button className="btn" onClick={displayProducts}>
                  Add items
                </button>
              </div>
            )}
          </div>
        ) : display === "cart" ? (
          <div className="cart">
            <h3>My Cart</h3>
            {cart.length > 0 ? (
              <div className="cart-items-wrapper">
                {cart.map(({ title, id, img, price, quantity }) => (
                  <div key={id} className="cart-item">
                    <ProductList
                      isCartDisplay={true}
                      isWishlistDisplay={false}
                      id={id}
                      title={title}
                      img={img}
                      price={price}
                      quantity={quantity}
                      setProducts={setProducts}
                      setCart={setCart}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-wrapper">
                <div className="empty-msg">Your Cart is empty!!</div>
                <button className="btn" onClick={displayProducts}>
                  Add items
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="product-display">
            <h3>error 404</h3>
          </div>
        )}
      </div>
    </div>
  );
}
