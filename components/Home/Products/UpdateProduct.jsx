import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const productData = useLoaderData();
  const [brands, setBrand] = useState([]);

  const {
    _id,
    productImage,
    productName,
    brand,
    price,
    category,
    rating,
    description,
  } = productData;

  useEffect(() => {
    fetch(
      "https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/brand"
    )
      .then((res) => res.json())
      .then((data) => setBrand(data));
  }, []);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const productImage = form.image.value;
    const productName = form.productName.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const category = form.category.value;

    const rating = form.rating.value;
    const description = form.description.value;

    const updateProduct = {
      productImage,
      productName,
      brand,
      price,
      category,

      rating,
      description,
    };

    //send data

    fetch(
      `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/toys/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "success",
            text: "Product Update Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update product
          </h2>
          <form onSubmit={handleUpdateProduct}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Image
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={productImage}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Paste product image link"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  defaultValue={productName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Brand
                </label>

                <select
                  defaultValue={brand}
                  name="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option>{brand}</option>
                  {brands.map((b) => (
                    <option key={b.id} value={b.brandName}>
                      {b.brandName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="2999"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  defaultValue={category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Toys,Educational"
                  required
                />
              </div>

              <div>
                <label>
                  Rating <br />{" "}
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="5"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Short Description
                </label>
                <textarea
                  id="description"
                  defaultValue={description}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Update Product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
