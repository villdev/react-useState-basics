import React, { useState } from "react";
import likeBlackIcon from "../images/like.svg";
import likeRedIcon from "../images/like-red.svg";
// import dislikeIcon from "../images/dislike.svg";

export default function Product({
  title,
  id,
  img,
  price,
  stock,
  liked,
  // quantity,
  setProducts,
  setCart,
}) {
  const [mouseHover, setMouseHover] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [outOfStock, setOutOfStock] = useState(!!(quantity > stock));

  const hoverStyle = {
    backgroundColor: "transparent",
  };
  const handleMouseEnter = () => {
    setMouseHover(true);
  };
  const handleMouseLeave = () => {
    setMouseHover(false);
  };

  const increaseQuantity = () => {
    if (quantity + 1 > stock) {
      setOutOfStock(true);
    }
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity - 1 <= stock) {
      setOutOfStock(false);
    }
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = (id, title, price, quantity, img, stock) => {
    setCart((prevCart) => {
      const itemPresent = prevCart.filter((item) => item.id === id);
      if (itemPresent.length === 0) {
        changeStock(id, quantity);
        return [...prevCart, { id, title, price, quantity, img }];
      } else {
        return prevCart.map((item) => {
          if (item.id === id) {
            changeStock(id, quantity);
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      }
    });
    if (stock - quantity === 0) {
      setOutOfStock(true);
    }
    setQuantity(1);
  };

  const changeStock = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === id) {
          return { ...item, stock: item.stock - quantity };
        }
        return item;
      })
    );
  };

  const toggleLike = (id) => {
    setProducts((prevProd) =>
      prevProd.map((item) => {
        if (item.id === id) {
          return { ...item, liked: !item.liked };
        }
        return item;
      })
    );
  };

  return (
    <div
      className="product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-img-wrapper" style={mouseHover ? hoverStyle : {}}>
        <img className="product-img" src={img} alt="" />
        {mouseHover ? (
          <div onClick={() => toggleLike(id)} className="like-btn">
            {liked ? (
              <img className="product-like-img" src={likeRedIcon} alt="" />
            ) : (
              <img className="product-like-img" src={likeBlackIcon} alt="" />
            )}
          </div>
        ) : null}
      </div>
      <div className="product-title">{title}</div>
      <div className="product-price">₹ {price}</div>
      <div className="product-buy-actions">
        <div className="product-quantity">
          <button
            onClick={decreaseQuantity}
            disabled={!!(quantity === 1)}
            style={quantity === 1 ? { cursor: "default" } : {}}
          >
            -
          </button>
          <div style={outOfStock ? { color: "red" } : {}}>{quantity}</div>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() =>
            handleAddToCart(id, title, price, quantity, img, stock)
          }
          disabled={outOfStock}
          style={outOfStock ? { cursor: "not-allowed" } : {}}
        >
          {outOfStock ? "Out of stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
