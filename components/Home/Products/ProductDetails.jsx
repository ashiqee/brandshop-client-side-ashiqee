import { useEffect, useState } from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/Ai";
// import { FaBeer } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PageHeader from "../../Shared/PageHeader";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const toyDetails = useLoaderData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [quantityStart, setQuantity] = useState(1);
  // const [data, setData] = useState([]);

  const { user, fetchData } = useContext(AuthContext);
  const [alreadyCart, setAlreadyCart] = useState();

  const {
    _id,
    productImage,
    productName,
    brand,
    price,
    description,
    category,
    rating,
  } = toyDetails;

  useEffect(() => {
    fetch(
      `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/cart/${user?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        data.filter((b) => {
          if (b.productId === _id) {
            setAlreadyCart(b.productId);
            setLoading(false);
          }
        });
      });
  }, [user, _id]);

  const handleAddToCart = (productId) => {
    //send cart data to server
    const userId = user.uid;

    const userCart = {
      productId,
      brand,
      price,

      productName,
      productImage,
      userId,
      quantityStart,
    };
    console.log(alreadyCart);

    if (productId === alreadyCart) {
      return Swal.fire({
        title: "error",
        text: "Already Added in Cart",
        icon: "error",
        confirmButtonText: "Add more",
      });
    } else {
      fetch(
        "https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/cart",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userCart),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "success",
              text: "Product Added to Cart Successfully",
              icon: "success",
              confirmButtonText: "Add more",
            });
            fetchData();
            navigate("/");
          }
        });
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading Data</p>
      ) : (
        <>
          <PageHeader toyDetails={toyDetails} />
          <div className="max-w-7xl mx-auto ">
            <div className="lg:flex justify-around">
              <div
                className="flex flex-col-reverse  border shadow-lg  bg-white gap-16  rounded-lg md:flex-row
         md:max-w-full p-4  dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover  w-24 h-24  p-2  rounded-lg"
                  src={productImage}
                  alt={productName}
                />
                <img
                  className="object-fit min-h-[40vh] md:max-w-[60vh]    rounded-lg"
                  src={productImage}
                  alt={productName}
                />
              </div>
              <div className="flex flex-col shadow-lg border rounded-lg justify-items-start  p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {productName}
                </h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-400 dark:text-white">
                  <Link to={`/toysBrand/${brand}`}> Brand: {brand}</Link>
                </h5>
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Category: {category}
                </h5>

                <div className="flex">
                  <Rating
                    placeholderRating={rating}
                    emptySymbol={<AiOutlineStar />}
                    placeholderSymbol={
                      <AiTwotoneStar className="text-red-400" />
                    }
                    fullSymbol={<AiTwotoneStar />}
                  />
                </div>

                <p className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400">
                  ৳ {price}
                </p>

                <p className="mb-3 font-normal max-w-[40vh] text-gray-700 dark:text-gray-400">
                  {description.slice(0, 100)}
                </p>

                <div className="flex items-center gap-10">
                  <div>
                    <label>Quantity</label>
                    <div className="flex items-center rounded-lg justify-between border w-28">
                      <button
                        className="p-2 text-xl"
                        onClick={() =>
                          setQuantity((count) => {
                            if (count >= 0) {
                              return (count = 1);
                            }
                            count - 1;
                          })
                        }
                      >
                        -
                      </button>
                      <h2 className="text-2xl">{quantityStart}</h2>
                      <button
                        className="p-2 text-xl"
                        onClick={() => setQuantity((count) => count + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(_id)}
                    className="btn mt-6 bg-blue-300"
                  >
                    {" "}
                    Add Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="drawer mt-10">
              <input
                id="my-drawer-3 "
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                  <div className="flex-none lg:hidden">
                    <label
                      htmlFor="my-drawer-3"
                      aria-label="open sidebar"
                      className="btn btn-square btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="flex-1 px-2 mx-2">Description</div>
                  <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal">
                      {/* Navbar menu content here */}

                      <li>
                        <Link to={`/toysBrand/${brand}`}>{brand}</Link>
                      </li>
                      <li>
                        <Link to={`/cart/${user.uid}`}>View Cart</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Page content here */}

                <div className="p-10 text-justify"> {description}</div>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                  {/* Sidebar content here */}
                  <li>
                    <a>{brand}</a>
                  </li>
                  <li>
                    <Link to={`/cart/${user.uid}`}>View Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
