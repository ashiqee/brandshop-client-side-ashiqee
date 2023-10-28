import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(
      "https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/brand"
    )
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl text-center mx-5 my-10 md:mx-auto">
      <h2 className="text-3xl text-center">Shop By Brands</h2>
      <br />
      <progress
        className="progress progress-error w-56 "
        value="100"
        max="100"
      ></progress>

      <div className="grid grid-cols-3  md:grid-cols-6 justify-between">
        {brands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
