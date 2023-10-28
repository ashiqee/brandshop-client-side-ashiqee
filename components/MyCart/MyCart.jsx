import { useContext, useEffect } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
  // const [userId, setUserId] = useState(null);
  const loadCartData = useLoaderData();
  const [cart, setCart] = useState(loadCartData);

  const { user, fetchData } = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (user) {
      fetch(
        `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/cart/${user?.uid}`
      )
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }, [user]);

  const handleDeleteFormCart = (id, _id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted Confirm");
        fetch(
          `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/cart/${_id}`,
          {
            method: "delete",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Remove!",
                " Your Cart Product has been remove.",
                "success"
              );
              const remaining = cart?.filter((c) => c.productId !== id);
              setCart(remaining);
              fetchData();
            }
          });
      }
    });
  };

  useEffect(() => {
    let totalPrice = [];
    cart?.map((data) => {
      const price = data.price;
      totalPrice.push(price);
    });

    let remainingPrice = 0;
    totalPrice?.forEach((e) => {
      const price = parseInt(e);
      return (remainingPrice += price);
    });
    console.log(totalPrice);
    setTotalPrice(remainingPrice);
  }, [cart]);

  return (
    <>
      {cart.length < 1 ? (
        <>
          {" "}
          <div className="max-w-7xl mx-auto p-10">
            <h2 className="text-center text-2xl p-5">Cart is Empty</h2>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-7xl mx-auto p-10">
            <div className="md:flex gap-5 ">
              <div className="md:min-w-[70%]">
                <h2>{user.displayName} Cart:</h2>
                <h2 className="text-center text-2xl p-5">
                  Product List in Cart
                </h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  {cart ? (
                    <>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        {cart.map((cartList) => (
                          <tbody key={cartList._id}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-32 p-4">
                                <img
                                  src={cartList?.productImage}
                                  alt="Apple Watch"
                                />
                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                <Link to={`/details/${cartList.productId}`}>
                                  {cartList?.productName}
                                  {/* {cartList?._id} */}
                                </Link>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                  <div>{cartList?.quantityStart}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                ৳ {cartList?.price}
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => {
                                    handleDeleteFormCart(
                                      cartList?.productId,
                                      cartList._id
                                    );
                                  }}
                                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </>
                  ) : (
                    <> no add cart </>
                  )}
                </div>
              </div>
              <div>
                <div className=" border mt-20 shadow-xl rounded-lg p-12">
                  <h2 className="text-2xl pb-2">No of Items: {cart.length}</h2>

                  <div className="text-2xl">Total Amount: ৳ {totalPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyCart;
