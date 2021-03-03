import React, { useState } from "react";

export default function ProductList({
  isCartDisplay,
  isWishlistDisplay,
  id,
  title,
  img,
  price,
  quantity,
  setProducts,
  setCart,
}) {
  const handleIncreaseQuantity = (id, quantity) => {
    setProducts((prevProd) => {
      return prevProd.map((item) => {
        if (item.id === id && quantity + 1 <= item.stock + quantity) {
          increaseCartQuantity(id, quantity);
          return { ...item, stock: item.stock - 1 };
        }
        return item;
      });
    });
  };

  const increaseCartQuantity = (id, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity + 1 };
        }
        return item;
      });
    });
  };
  const handleDecreaseQuantity = (id, quantity) => {
    setProducts((prevProd) => {
      return prevProd.map((item) => {
        if (item.id === id) {
          // && ((quantity - 1) !== 0) not needed as button disabled on quantity === 1
          return { ...item, stock: item.stock + 1 };
        }
        return item;
      });
    });
    decreaseCartQuantity(id);
  };

  const decreaseCartQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleRemoveCartItem = (id, quantity) => {
    setProducts((prevProd) => {
      return prevProd.map((item) => {
        if (item.id === id) {
          return { ...item, stock: item.stock + quantity };
        }
        return item;
      });
    });
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const handleRemoveWishlistItem = (id) => {
    setProducts((prevProd) => {
      return prevProd.map((item) => {
        if (item.id === id) {
          return { ...item, liked: false };
        }
        return item;
      });
    });
  };

  return (
    <div className="productList">
      <div className="productList-img-wrapper">
        <img className="productList-img" src={img} alt="" />
      </div>
      <div className="productList-details">
        <div className="productList-title">{title}</div>
        <div className="productList-price">
          ₹ {isCartDisplay ? price * quantity : price}
        </div>
        {isCartDisplay ? (
          <div className="productList-quantity">
            Quantity:{" "}
            <button
              onClick={() => handleDecreaseQuantity(id, quantity)}
              style={
                quantity === 1
                  ? { cursor: "default", marginLeft: "8px" }
                  : { marginLeft: "8px" }
              }
              disabled={quantity === 1}
            >
              -
            </button>
            <div>{quantity}</div>
            <button onClick={() => handleIncreaseQuantity(id, quantity)}>
              +
            </button>
          </div>
        ) : null}
        <button
          onClick={() => {
            isCartDisplay
              ? handleRemoveCartItem(id, quantity)
              : handleRemoveWishlistItem(id);
          }}
          className="productList-remove-btn btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
