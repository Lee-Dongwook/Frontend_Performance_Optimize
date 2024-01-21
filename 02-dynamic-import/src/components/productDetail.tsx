"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const ProductDetail = () => {
  const router = useRouter();

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID : </p>
    </div>
  );
};
