import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const toysProducts = useLoaderData();

  return (
    <div className="w-fit mx-auto">
      <h2 className="text-4xl text-center p-6">Our Products</h2>
      <div className="grid gap-8 mx-auto lg:grid-cols-4 md:grid-cols-3 grid-cols-1 ">
        {toysProducts.map((toy) => (
          <ProductCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Products;
