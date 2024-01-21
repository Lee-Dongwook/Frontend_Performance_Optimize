import React, { useState, useMemo, useCallback } from "react";
import { ProductList } from "./components/productList";
import type { Product } from "./components/types";

const CartProductList = React.memo(({ product }: { product: Product }) => (
  <li>
    {product.name} - ${product.price} X {product.quantity}
  </li>
));

const ShoppingCartMemoizationPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = useCallback(
    (productId: number) => {
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
    },
    [cart]
  );

  const calculateTotalPrice = useMemo(() => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity!,
      0
    );
  }, [cart]);

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
          <CartProductList key={product.id} product={product} />
        ))}
      </ul>

      <h3>총 가격 : ${calculateTotalPrice}</h3>
    </div>
  );
};

export default ShoppingCartMemoizationPage;
