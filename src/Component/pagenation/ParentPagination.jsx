import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const ParentPagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTheProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setProducts(data.products); // Fix: access the products array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-2xl text-red-500">Pagination</h1>
      {/* Display your products */}
      {currentListOfItems.map((product) => (
        <div key={product.id} className="mx-3">
          {product.id}-{product.title}
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default ParentPagination;
