"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductListProps {
  products: string[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter();

  const onClickMoveToProductDetailPage = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li
            key={index}
            onClick={() => onClickMoveToProductDetailPage(index + 1)}
          >
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};
