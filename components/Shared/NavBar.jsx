import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const { user, logOut, cartData } = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartLen = cartData.length;
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    let totalPrice = [];
    cartData?.map((data) => {
      const price = data.price;
      totalPrice.push(price);
    });

    let remainingPrice = 0;
    totalPrice?.forEach((e) => {
      const price = parseInt(e);
      return (remainingPrice += price);
    });

    setTotalPrice(remainingPrice);
  }, [cartData]);

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to={`/cart/${user?.uid}`}>My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className=" bg-base-200">
        <div className="max-w-screen-xl mx-auto navbar">
          <div className="navbar-start">
            <div className="dropdown relative z-50">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navMenu}
              </ul>
            </div>

            <img
              className="w-12"
              src="https://i.pinimg.com/originals/c4/04/ea/c404ea576696ef88ef2c3c861e7b0acd.gif"
              alt=""
            />
            <Link to="/" className=" ml-2  text-3xl">
              Baby Toys
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navMenu}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div>
                  <div className="flex gap-5">
                    <div className="dropdown z-50 dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="badge badge-sm indicator-item">
                            {cartLen}
                          </span>
                        </div>
                      </label>
                      <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                      >
                        <div className="card-body">
                          <span className="font-bold text-lg">
                            {cartLen} Items
                          </span>
                          <span className="text-info">
                            Subtotal: {totalPrice}
                          </span>
                          <div className="card-actions">
                            <Link
                              to={`/cart/${user?.uid}`}
                              className="btn btn-primary btn-block"
                            >
                              View cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-12 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <div className=" avatar ">
                            <img
                              className="w-24 rounded-full"
                              src={user?.photoURL}
                            />
                          </div>
                          <a className="justify-between">
                            {user.displayName}
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                          <div
                            className=" btn text-center bg-blue-300"
                            onClick={handleLogOut}
                          >
                            Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </>
            )}

            <label className="swap swap-rotate p-2">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
