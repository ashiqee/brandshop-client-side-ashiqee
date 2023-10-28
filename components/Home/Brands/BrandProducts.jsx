import { Link, useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";

import Brands from "./Brands";

import BrandSlider from "./BrandSlider";
import { useEffect, useState } from "react";

const BrandProducts = () => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrand] = useState();
  const [dataBrand, setDataBrand] = useState();
  const brandProduct = useLoaderData();

  useEffect(() => {
    fetch(
      `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/brand/`
    )
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((b) => b.brandName === dataBrand);
        if (filterData.length >= 1) {
          setLoading(false);
        }

        setBrand(filterData);
      });
  }, [dataBrand]);

  useEffect(() => {
    brandProduct?.map((p) => {
      setDataBrand(p?.brand);
    });
  }, [brandProduct]);

  return (
    <div>
      {/* card  */}
      {brandProduct.length < 1 ? (
        <>
          <div className="text-center p-24">
            <h2 className="text-3xl text-rose-700">
              This Brand Product Not Available
            </h2>
          </div>
          <h3 className="text-2xl p-10 text-center bg-yellow-100 text-black">
            Please Shop Other Brands Products{" "}
          </h3>
          <Brands />
        </>
      ) : (
        <div className="lg:max-w-screen-2xl md:max-w-screen-lg max-w-lg mx-auto">
          {loading ? (
            <>
              <span className="loading  loading-ball loading-xs"></span>
            </>
          ) : (
            <div>
              {brands.map((brand) => (
                <BrandSlider key={brand._id} brand={brand} />
              ))}

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
                {brandProduct.map((product) => (
                  <BrandProductCard key={product._id} toys={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
