import { useState } from "react";

export function useProductModal() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return {
    selectedProduct,
    openModal,
    closeModal
  };
}
