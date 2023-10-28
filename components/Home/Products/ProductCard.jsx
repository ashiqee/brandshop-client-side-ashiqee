import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/Ai";
import Rating from "react-rating";

const ProductCard = ({ toy }) => {
  const {
    _id,
    productImage,
    productName,
    brand,
    price,
    description,
    category,
    rating,
  } = toy;
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className=" mx-auto p-3 min-h-[320px] max-h-[320px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl"
          src={productImage}
          alt="product image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {productName}
          </h5>
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            Brand: {brand}
          </h5>
          <div className="flex">
            <Rating
              placeholderRating={rating}
              emptySymbol={<AiOutlineStar />}
              placeholderSymbol={<AiTwotoneStar className="text-red-400" />}
              fullSymbol={<AiTwotoneStar />}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ৳ {price}
            </span>
            <Link
              to={`/update/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </Link>

            <Link
              to={`/details/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
