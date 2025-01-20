// components/Products.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import {
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../slice/ProductSlice";
import "./product.css";

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleUpdate = (id, currentProduct) => {
    const updatedProduct = {
      ...currentProduct,
      price: currentProduct.price + 10, // Example price update
    };
    dispatch(updateProduct({ id, product: updatedProduct }));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Products</h2>
      <ProductForm />

      <div className="products-grid">
        {items.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>Price: USD {product.price}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleUpdate(product.id, product)}>
              Update Price
            </button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
