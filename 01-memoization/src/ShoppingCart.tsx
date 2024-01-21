import React, { useState } from "react";
import { ProductList } from "./components/productList";
import type { Product } from "./components/types";

const ShoppingCartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = (productId: number) => {
    const selectedProduct = ProductList.find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      const isExistCertainProduct = cart.find(
        (product) => product.id === productId
      );

      if (isExistCertainProduct) {
        setCart((prev) =>
          prev.map((product) =>
            product.id === productId
              ? { ...product, quantity: product.quantity! + 1 }
              : product
          )
        );
      } else {
        setCart((prev) => [...prev, { ...selectedProduct, quantity: 1 }]);
      }
    } else {
      alert("선택된 물품이 없습니다.");
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity!,
      0
    );
  };

  return (
    <div>
      <h1>쇼핑 카트</h1>
      <ul>
        {ProductList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addProductToCart(product.id)}>
              카트에 추가하기
            </button>
          </li>
        ))}
      </ul>

      <h2>카트 목록</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} X {product.quantity}
          </li>
        ))}
      </ul>

      <h3>총 가격 : ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default ShoppingCartPage;
