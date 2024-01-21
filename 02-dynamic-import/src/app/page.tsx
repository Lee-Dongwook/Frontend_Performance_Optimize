"use client";
import dynamic from "next/dynamic";
import React from "react";
import { products } from "@/lib/product";

interface DynamicProductListProps {
  products: string[];
}

const DynamicProductList = dynamic<DynamicProductListProps>(
  () => import("@/components/productList").then((mod) => mod.ProductList),
  {
    loading: () => <p>Loading product list...</p>,
  }
);

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Shopping Mall</h1>
      <DynamicProductList products={products} />
    </div>
  );
}
