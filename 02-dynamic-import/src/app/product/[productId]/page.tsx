"use client";
import dynamic from "next/dynamic";
import React from "react";

const DynamicProductDetail = dynamic(
  () => import("@/components/productDetail").then((mod) => mod.ProductDetail),
  {
    loading: () => <p>Loading product detail...</p>,
  }
);

export default function ProductDetailPage() {
  return (
    <div>
      <DynamicProductDetail />
    </div>
  );
}
